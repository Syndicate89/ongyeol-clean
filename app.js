import { calculate, money, todayInSeoul, quoteText } from './estimate.js';
const $ = s => document.querySelector(s);
const form = $('#estimate-form');
let result;
const text = (tag, value, className) => { const el = document.createElement(tag); el.textContent = value; if (className) el.className = className; return el; };
function readInput() {
  const d = new FormData(form);
  return Object.fromEntries([...d.entries(), ['sticker', d.has('sticker')], ['special', d.has('special')]]);
}
function alertBox(title, entries, error = false) {
  const el = text('div', '', `result-alert${error ? ' error' : ''}`);
  el.append(text('strong', title));
  const ul = document.createElement('ul');
  entries.forEach(e => ul.append(text('li', e)));
  el.append(ul); return el;
}
function update() {
  $('#date').min = todayInSeoul();
  result = calculate(readInput());
  const i = result.input;
  $('#area-unit').textContent = i.unit === 'sqm' ? '㎡' : '평';
  $('#area').step = i.unit === 'sqm' ? '0.01' : '0.1';
  $('#area-conversion').textContent = `${Number.isFinite(result.area) && result.area > 0 ? `계산 면적 ${result.area.toFixed(1)}평` : '공급면적을 입력해주세요'} · 자동 견적 범위 5~60평`;
  $('#area').setAttribute('aria-invalid', String(result.errors.some(e => /면적/.test(e))));
  $('#result-selection').textContent = `${result.service?.label ?? ''} · ${i.home}\n${i.region} · 공급면적 ${i.area || '미입력'}${i.unit === 'sqm' ? '㎡' : '평'}${i.unit === 'sqm' && Number.isFinite(result.area) ? ` (${result.area.toFixed(1)}평)` : ''}`;
  const detail = $('#result-details'); detail.replaceChildren();
  if (result.total !== null) {
    const dl = text('dl', '', 'quote-items');
    result.items.forEach(row => { const div = text('div', '', 'quote-row'); div.append(text('dt', row.label), text('dd', money(row.value))); dl.append(div); });
    detail.append(dl);
    if (result.minimumApplied) detail.append(text('p', `최소 기본 청소비 ${money(result.service.minimum)} 적용`, 'minimum-note'));
  }
  $('#result-total').textContent = result.errors.length ? '조건을 확인해주세요' : result.total === null ? '별도 상담이 필요해요' : money(result.total);
  $('#result-total').classList.toggle('consult-total', result.total === null);
  $('#total-label').textContent = result.unpriced.length && result.total !== null ? '예상 합계 · 추가 비용 미포함' : '예상 합계';
  $('#total-meta').hidden = result.total === null;
  const alerts = $('#result-alerts'); alerts.replaceChildren();
  if (result.errors.length) alerts.append(alertBox('입력 조건 확인', result.errors, true));
  if (result.reasons.length) alerts.append(alertBox('개별 확인이 필요한 조건', result.reasons));
  if (result.unpriced.length) alerts.append(alertBox('추가 비용 미포함', result.unpriced));
  $('#result-date').textContent = `희망 작업일: ${i.date || '미정 · 상담 시 조율'}${i.date ? ' (예약 확정 아님)' : ''}`;
  $('#copy-quote').disabled = result.errors.length > 0;
  $('#consult-result').disabled = result.errors.length > 0;
}
form.addEventListener('input', update);
form.addEventListener('change', update);
form.addEventListener('submit', event => {
  event.preventDefault(); update();
  if (result.errors.length) { toast(result.errors[0]); return; }
  $('#quote-result').focus({ preventScroll: true });
  $('#quote-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#reset-quote').addEventListener('click', () => { form.reset(); update(); $('#region').focus({ preventScroll: true }); $('#estimate').scrollIntoView({ behavior: 'smooth' }); toast('처음 조건으로 돌아왔어요.'); });
document.querySelectorAll('.choose-service').forEach(button => button.addEventListener('click', () => {
  form.elements.service.value = button.dataset.service; update(); $('#estimate').scrollIntoView({ behavior: 'smooth' });
}));
let toastTimer;
function toast(message) { $('#toast').textContent = message; $('#toast').classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 3500); }
$('#copy-quote').addEventListener('click', async () => {
  update(); if (result.errors.length) return;
  try { await navigator.clipboard.writeText(quoteText(result)); toast('선택 조건과 예상 견적을 복사했어요.'); }
  catch { $('#copy-fallback').value = quoteText(result); $('#copy-dialog').showModal(); $('#copy-fallback').focus(); $('#copy-fallback').select(); }
});
function openConsult() {
  update();
  if (result.errors.length) { $('#area').focus({ preventScroll: true }); $('#estimate').scrollIntoView({ behavior: 'smooth' }); toast(result.errors[0]); return; }
  $('#dialog-quote').textContent = quoteText(result);
  $('#consult-dialog').showModal();
}
document.querySelectorAll('.consult-trigger').forEach(button => button.addEventListener('click', openConsult));
$('#consult-result').addEventListener('click', openConsult);
$('#close-dialog').addEventListener('click', () => $('#consult-dialog').close());
$('#done-dialog').addEventListener('click', () => $('#consult-dialog').close());
$('#close-copy').addEventListener('click', () => $('#copy-dialog').close());
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', e => { if (e.target === dialog) { const b = dialog.getBoundingClientRect(); if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) dialog.close(); } }));
document.querySelectorAll('.comparison input[type="range"]').forEach(input => {
  const updateComparison = () => {
    input.closest('.comparison').style.setProperty('--split', `${input.value}%`);
    input.setAttribute('aria-valuetext', `청소 전 ${input.value}%, 청소 후 ${100 - Number(input.value)}%`);
  };
  input.addEventListener('input', updateComparison);
  updateComparison();
});
document.querySelectorAll('.open-comparison').forEach(button => button.addEventListener('click', () => {
  const card = button.closest('.detail-case');
  const title = card.dataset.title;
  $('#compare-dialog-title').textContent = `${title} · 전후 비교`;
  $('#compare-dialog-description').textContent = card.querySelector('.detail-description').textContent;
  for (const stage of ['before', 'after']) {
    const image = $(`#compare-${stage}`);
    image.src = card.querySelector(`img[data-stage="${stage}"]`).getAttribute('src');
    image.alt = `${title} ${stage === 'before' ? '청소 전' : '청소 후'}`;
  }
  $('#compare-range').value = '50';
  $('#compare-range').setAttribute('aria-label', `${title} 청소 전후 비교`);
  $('#compare-range').setAttribute('aria-valuetext', '청소 전 50%, 청소 후 50%');
  $('#comparison').style.setProperty('--split', '50%');
  $('#comparison-dialog').showModal();
}));
$('#close-compare').addEventListener('click', () => $('#comparison-dialog').close());
$('#done-compare').addEventListener('click', () => $('#comparison-dialog').close());
window.addEventListener('pageshow', update);
document.addEventListener('visibilitychange', () => { if (!document.hidden) update(); });
update();

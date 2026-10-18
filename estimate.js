export const SERVICES = {
  movein: { label: '입주청소', rate: 13000, minimum: 200000 },
  moving: { label: '이사청소', rate: 14000, minimum: 220000 },
  living: { label: '거주청소', rate: 17000, minimum: 250000 },
};
export const REGIONS = ['서울', '경기 성남', '경기 하남', '경기 구리', '경기 남양주'];
export const HOMES = ['아파트', '오피스텔', '빌라·다세대'];
export const money = n => `${new Intl.NumberFormat('ko-KR').format(n)}원`;
export function todayInSeoul(date = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date).map(p => [p.type, p.value]));
  return `${p.year}-${p.month}-${p.day}`;
}
export function calculate(input, today = todayInSeoul()) {
  const service = SERVICES[input.service];
  const amount = Number(input.area);
  const errors = [];
  const reasons = [];
  if (!service) errors.push('청소 유형을 선택해주세요.');
  if (!Number.isFinite(amount) || amount <= 0 || String(input.area).trim() === '') errors.push('공급면적을 숫자로 입력해주세요.');
  if (!['pyeong', 'sqm'].includes(input.unit)) errors.push('면적 단위를 선택해주세요.');
  if (input.unit === 'pyeong' && Number.isFinite(amount) && Math.abs(amount * 10 - Math.round(amount * 10)) > 0.000001) errors.push('평 면적은 소수점 첫째 자리까지 입력해주세요.');
  for (const [key, label, max] of [['bathrooms', '욕실', 4], ['balconies', '베란다', 4], ['wardrobes', '붙박이장', 5], ['fridge', '냉장고', 2], ['oven', '오븐', 2]]) {
    if (!Number.isInteger(Number(input[key])) || Number(input[key]) < 0 || Number(input[key]) > max) errors.push(`${label} 개수를 확인해주세요.`);
  }
  if (input.date && (!/^\d{4}-\d{2}-\d{2}$/.test(input.date) || !Number.isFinite(Date.parse(input.date)) || new Date(`${input.date}T00:00:00Z`).toISOString().slice(0, 10) !== input.date || input.date < today)) errors.push('희망 작업일은 오늘 이후의 유효한 날짜로 선택해주세요.');
  const area = Math.round((input.unit === 'sqm' ? amount / 3.3058 : amount) * 10) / 10;
  if (!REGIONS.includes(input.region)) reasons.push('서비스 가능 여부 상담이 필요한 지역입니다.');
  if (!HOMES.includes(input.home)) reasons.push('단독·복층주택은 구조 확인 후 별도 견적을 안내합니다.');
  if (Number.isFinite(amount) && amount > 0 && (area < 5 || area > 60)) reasons.push('자동 견적 범위인 5~60평을 벗어나 별도 상담이 필요합니다.');
  const unpriced = [];
  if (input.sticker) unpriced.push('스티커·접착제 제거 — 사진 확인 후 추가 비용 안내');
  if (input.special) unpriced.push('곰팡이·니코틴·공사 잔재 등 특수 오염 — 상태 확인 후 별도 견적');
  if (Number(input.fridge) > 1) unpriced.push('냉장고 내부 2대 이상 — 별도 상담 후 추가 비용 안내');
  if (Number(input.oven) > 1) unpriced.push('오븐 내부 2대 이상 — 별도 상담 후 추가 비용 안내');
  const base = service && Number.isFinite(area) ? Math.max(Math.ceil(area * service.rate / 1000) * 1000, service.minimum) : 0;
  const items = service ? [
    { label: '기본 청소비', value: base },
    { label: `추가 욕실 ${Math.max(0, Number(input.bathrooms) - 1)}개`, value: Math.max(0, Number(input.bathrooms) - 1) * 20000 },
    { label: `추가 베란다 ${Math.max(0, Number(input.balconies) - 1)}개`, value: Math.max(0, Number(input.balconies) - 1) * 15000 },
    ...(Number(input.fridge) === 1 ? [{ label: '냉장고 내부 1대', value: 40000 }] : []),
    ...(Number(input.oven) === 1 ? [{ label: '오븐 내부 1대', value: 30000 }] : []),
    ...(Number(input.wardrobes) > 0 ? [{ label: `붙박이장 내부 ${input.wardrobes}통`, value: Number(input.wardrobes) * 15000 }] : []),
  ] : [];
  const total = errors.length || reasons.length ? null : items.reduce((s, row) => s + row.value, 0);
  return { input, service, area, base, minimumApplied: service ? base === service.minimum && area * service.rate < service.minimum : false, items: total === null ? [] : items, total, errors, reasons, unpriced };
}
export const DISCLAIMER = '입력하신 조건을 기준으로 계산한 예상 금액입니다. 실제 면적, 현장 상태, 작업 범위를 확인한 후 최종 견적을 안내합니다. 희망일 선택만으로 예약이 확정되지 않습니다.';
export function quoteText(r) {
  const i = r.input;
  return [
    '온결클린 | 우리 집 예상 청소비',
    '가상 업체 포트폴리오 · 실제 예약 및 결제 불가',
    `청소 유형: ${r.service?.label ?? '미선택'}`,
    `지역: ${i.region} / 주거 형태: ${i.home}`,
    `공급면적: ${i.area} ${i.unit === 'sqm' ? '㎡' : '평'}${Number.isFinite(r.area) ? ` (계산 면적 ${r.area.toFixed(1)}평)` : ''}`,
    `욕실 ${i.bathrooms}개 / 베란다 ${i.balconies}개`,
    `냉장고 내부 ${Number(i.fridge) === 2 ? '2대 이상' : `${i.fridge}대`} / 오븐 내부 ${Number(i.oven) === 2 ? '2대 이상' : `${i.oven}대`} / 붙박이장 내부 ${i.wardrobes}통`,
    ...r.items.map(row => `${row.label}: ${money(row.value)}`),
    r.minimumApplied ? `최소 기본 청소비 ${money(r.service.minimum)} 적용` : '',
    r.total === null ? '예상 합계: 별도 상담 필요' : `예상 합계: ${money(r.total)} (부가세 포함 · 서비스 지역 내 출장비 포함)`,
    ...r.errors, ...r.reasons,
    ...r.unpriced.map(s => `추가 비용 미포함: ${s}`),
    `희망 작업일: ${i.date || '미정 (상담 시 조율)'}`,
    DISCLAIMER,
    '데모 체험 완료 — 실제 상담은 접수되지 않습니다',
  ].filter(Boolean).join('\n');
}

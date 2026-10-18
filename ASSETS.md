# 생성 이미지 기록

생성 방식: OpenAI 내장 image_gen 도구. API 키를 사용하는 CLI 경로는 사용하지 않았습니다.

모든 사진은 이 가상 업체 포트폴리오를 위해 생성한 시연 이미지입니다. 실제 고객 작업 사진이 아닙니다. 생성 결과를 프로젝트의 assets/에 복사하고 WebP로 최적화했습니다.

## assets/hero.webp

최종 프롬프트:

Use case: photorealistic-natural. Asset type: wide hero photograph for a Korean residential cleaning service portfolio called 온결클린. Create a beautiful editorial interior architecture photograph, landscape 3:2. A sunlit, immaculate modern Korean apartment living room. Full-height sheer ivory curtains with soft afternoon sunlight from the left, warm natural light oak wooden floor, pale ivory low linen sofa on right, small rounded light wood coffee table, a single clear glass vase with fresh leafy green branches, a quiet green tree outside the window. Soft ivory walls, subtle pale sage textiles. Inviting and lived-in yet perfectly tidy. Eye level, natural 35mm architectural lens, realistic materials and shadows, premium residential lifestyle magazine quality, airy and calm. No people, no text, no logos, no watermark. This is an AI-generated demonstration interior, not an actual client project.

## assets/kitchen-after.webp

최종 프롬프트:

Use case: photorealistic-natural. Asset type: cleaning portfolio demonstration after photo. Landscape 3:2, camera straight-on 35mm interior architecture photo of a small modern Korean apartment kitchen, light ivory flat cabinet doors, light gray backsplash tile, clean stainless sink and chrome gooseneck tap in center, a pale warm stone counter, inset black induction hob at right, sunlight softly from left, light oak floor, completely immaculate and empty worktops. Natural believable premium photograph with sharp small details, no people, no text, no logo, no watermark. Carefully compose full sink, cabinetry and hob so a matching before-cleaning version can later be made from this frame. Clearly only a synthetic demonstration.

## assets/kitchen-before.webp

최종 프롬프트:

Use case: precise-object-edit. Edit the immediately preceding clean kitchen image only to create a matching BEFORE-cleaning demonstration photo. Preserve absolutely the exact camera perspective, frame, image dimensions, geometry, cabinets, sink, tap, hob, lighting, window, tile lines, all architecture and colors. Add believable moderate domestic grime: thin sticky yellowish grease spots on backsplash by the hob, water spots and dull limescale on tap and sink rim, fingerprints and subtle drip streaks on lower cabinet doors, a few small crumbs and dust along counter edges. Keep all objects in exactly the same positions, do not add utensils or trash or people. Natural realistic soil, not exaggerated decay. No text, no labels, no watermarks. This is an AI-generated demo pair for a cleaning service portfolio.



# 클로즈업 전후 비교 갤러리

OpenAI 내장 image_gen 도구로 6곳의 청소 전 이미지를 생성하고, 각 원본을 편집해 같은 구도의 청소 후 이미지를 만들었습니다. 실제 작업 사진이 아닙니다. WebP로 최적화했습니다.

## assets/closeup-sink-before.webp

Use case: photorealistic-natural. Asset type: BEFORE-cleaning macro photograph for an AI demonstration portfolio. A very tight close-up of the base and short stem of a chrome kitchen faucet and the adjoining stainless steel sink rim in a Korean apartment kitchen. Faucet base and metal occupy 85% of frame. Obvious chalky white hard-water scale crust around the circular faucet base and dried water streaks across the steel rim, dull greasy fingerprints. No dishes. Landscape 3:2. Detail fills the composition, no full room, no wide shot. High realism, crisp surface texture, neutral soft daylight, credible cleaning inspection photography, muted ivory and gray palette. Visible localized dirt must be easy to distinguish at thumbnail size, but ordinary removable household soil, not broken material. No people, hands, tools, added text, logos, watermark or artificial sparkle. We will edit this exact frame to make an after photo later.

## assets/closeup-sink-after.webp

Use case: precise-object-edit. Create the matching AFTER-cleaning version of the supplied close-up BEFORE photograph of 싱크대 수전. Remove ONLY removable household dirt, water deposits, limescale film, grease splashes, crumbs and dust from all visible surfaces. Surfaces should be visibly clean and dry with naturally restored sheen. STRICT INVARIANTS: preserve pixel-aligned camera viewpoint, lens, crop, frame dimensions, all object geometry, seams, edges, rings, holes, material colors, scratches from normal use, lighting direction and shadow shapes. This must remain exactly the same location, not a replacement fixture, not renovation. No new objects, no new geometry, no extra reflections of people, no hands, tools, text, logos, watermark or graphic sparkles. Landscape 3:2 documentary realistic cleaning result, clear difference from dirt removal alone.

## assets/closeup-cooktop-before.webp

Use case: photorealistic-natural. Asset type: BEFORE-cleaning macro photograph for an AI demonstration portfolio. A tight detail photograph of one black glass induction hob cooking ring and adjoining pale ivory stone counter edge in a Korean apartment. Glass and counter fill the frame, with only a small backsplash sliver. Obvious scattered baked-on brown grease splashes, smeared oily film and crumbs around the ring, dust and sticky residue at the counter seam. No cookware. Landscape 3:2. Detail fills the composition, no full room, no wide shot. High realism, crisp surface texture, neutral soft daylight, credible cleaning inspection photography, muted ivory and gray palette. Visible localized dirt must be easy to distinguish at thumbnail size, but ordinary removable household soil, not broken material. No people, hands, tools, added text, logos, watermark or artificial sparkle. We will edit this exact frame to make an after photo later.

## assets/closeup-cooktop-after.webp

Use case: precise-object-edit. Create the matching AFTER-cleaning version of the supplied close-up BEFORE photograph of 인덕션 주변. Remove ONLY removable household dirt, water deposits, limescale film, grease splashes, crumbs and dust from all visible surfaces. Surfaces should be visibly clean and dry with naturally restored sheen. STRICT INVARIANTS: preserve pixel-aligned camera viewpoint, lens, crop, frame dimensions, all object geometry, seams, edges, rings, holes, material colors, scratches from normal use, lighting direction and shadow shapes. This must remain exactly the same location, not a replacement fixture, not renovation. No new objects, no new geometry, no extra reflections of people, no hands, tools, text, logos, watermark or graphic sparkles. Landscape 3:2 documentary realistic cleaning result, clear difference from dirt removal alone.

## assets/closeup-window-before.webp

Use case: photorealistic-natural. Asset type: BEFORE-cleaning close-up photograph for an AI demonstration cleaning portfolio. A tight macro detail of the inside corner of a white PVC sliding window frame and its lower narrow twin window tracks in a Korean apartment, from above at 45 degrees. Frame grooves and one corner fill 90% of view; only a sliver of glass. Obvious gray-brown household dust and dry dirt built up along the grooves, dark dust clumps at the corner and scattered grit. No insects, no mold, no damage. Landscape 3:2. Tight close-up, not a full room. Detailed realistic materials, neutral soft daylight, sober documentary inspection photography. Dirt should be unmistakable at thumbnail size. No hands, people, cleaning tools, text, logo, watermark or artificial sparkle. Keep a simple fixed camera composition that can be edited to an identical clean after shot.

## assets/closeup-window-after.webp

Use case: precise-object-edit. Matching AFTER-cleaning version of this exact supplied close-up BEFORE photo of 창틀 레일. Remove only removable household dirt: all dust clumps, loose grit, dusty films, soap scum and dried water deposits, including corners and grooves. Restore visibly clean white PVC or naturally pale-gray tile and clean brushed metal. STRICTLY preserve the exact composition, camera, crop, dimensions, geometry, tile grout placement, drain perforations or window-track lines, original texture, wear, material colors, light and shadows. Do not redesign or replace surfaces. The after frame must align with the before frame for a comparison slider. No people, hands, tools, text, logo, watermarks, new objects, graphic sparkle or dramatic lighting change. Natural believable dry cleaned surface.

## assets/closeup-bathroom-before.webp

Use case: photorealistic-natural. Asset type: BEFORE-cleaning close-up photograph for an AI demonstration cleaning portfolio. A close-up detail of pale warm-gray square bathroom floor tiles around a brushed stainless steel square shower drain cover, from above at a slight angle. Four tiles, grout lines and drain occupy 100% of frame. Clear whitish soap scum, dried water rings and gray dusty residue along the tile edges and drain perimeter. Ordinary removable household deposits, not black mold, not rust, not permanent cracks. Landscape 3:2. Tight close-up, not a full room. Detailed realistic materials, neutral soft daylight, sober documentary inspection photography. Dirt should be unmistakable at thumbnail size. No hands, people, cleaning tools, text, logo, watermark or artificial sparkle. Keep a simple fixed camera composition that can be edited to an identical clean after shot.

## assets/closeup-bathroom-after.webp

Use case: precise-object-edit. Matching AFTER-cleaning version of this exact supplied close-up BEFORE photo of 욕실 바닥. Remove only removable household dirt: all dust clumps, loose grit, dusty films, soap scum and dried water deposits, including corners and grooves. Restore visibly clean white PVC or naturally pale-gray tile and clean brushed metal. STRICTLY preserve the exact composition, camera, crop, dimensions, geometry, tile grout placement, drain perforations or window-track lines, original texture, wear, material colors, light and shadows. Do not redesign or replace surfaces. The after frame must align with the before frame for a comparison slider. No people, hands, tools, text, logo, watermarks, new objects, graphic sparkle or dramatic lighting change. Natural believable dry cleaned surface.

## assets/closeup-balcony-before.webp

Use case: photorealistic-natural. Asset type: BEFORE-cleaning macro photograph for an AI demonstration cleaning portfolio. A tight close-up of the junction of beige matte ceramic balcony floor tiles and the light-gray skirting wall in a Korean apartment. One window edge barely visible. Mostly floor and wall junction with 2 grout intersections; no wide view. Obvious gray dust layer, dry muddy shoeprints and grit accumulated along the wall edge. Removable dirt only, no mold, no broken tiles, no permanent stains. Landscape 3:2. Extreme detail, limited context, never an entire room. Natural inspection photography, soft neutral daylight, clear realistic texture, believable ordinary domestic dirt that reads even at thumbnail size. No people, hands, cleaning tools, text, logos, watermark or artificial sparkle. We will edit this exact frame into a clean matching after photo.

## assets/closeup-balcony-after.webp

Use case: precise-object-edit. Make the clean AFTER version of this exact supplied close-up BEFORE photo of 베란다 바닥. Remove all loose dirt, crumbs, dust, muddy shoeprints and greasy films from the visible floor or empty cabinet surfaces and narrow tracks. The difference must be immediately clear: clean dry surface, clean edges and rail grooves. Preserve pixel-aligned composition, lens, crop, dimensions, wall, window, grout intersections, drawer runner holes, cabinetry geometry, material tone, subtle original wear, lighting direction, shadows and depth of field. Do not replace or renovate anything. No people, hands, cleaning tools, text, logos, new objects, watermarks, artificial sparkle or exaggerated polish. Natural documentary close-up, same exact location.

## assets/closeup-cabinet-before.webp

Use case: photorealistic-natural. Asset type: BEFORE-cleaning macro photograph for an AI demonstration cleaning portfolio. A tight close-up of an open empty white kitchen cabinet drawer bottom and silver drawer runner rail at the front right corner. Interior bottom and runner occupy the entire frame. Obvious bread crumbs, brown crumbs and household dust on the white base and around the track, sticky pale grease smears along the edge. Entire cabinet is empty, no utensils, no food packages, no damage. Landscape 3:2. Extreme detail, limited context, never an entire room. Natural inspection photography, soft neutral daylight, clear realistic texture, believable ordinary domestic dirt that reads even at thumbnail size. No people, hands, cleaning tools, text, logos, watermark or artificial sparkle. We will edit this exact frame into a clean matching after photo.

## assets/closeup-cabinet-after.webp

Use case: precise-object-edit. Make the clean AFTER version of this exact supplied close-up BEFORE photo of 수납장 레일. Remove all loose dirt, crumbs, dust, muddy shoeprints and greasy films from the visible floor or empty cabinet surfaces and narrow tracks. The difference must be immediately clear: clean dry surface, clean edges and rail grooves. Preserve pixel-aligned composition, lens, crop, dimensions, wall, window, grout intersections, drawer runner holes, cabinetry geometry, material tone, subtle original wear, lighting direction, shadows and depth of field. Do not replace or renovate anything. No people, hands, cleaning tools, text, logos, new objects, watermarks, artificial sparkle or exaggerated polish. Natural documentary close-up, same exact location.

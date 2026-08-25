# UI/UX Audit — Alfha Coach Builders

Audit of the existing site (Header, Layout, StickyCta, Hero/sections, highlights, LocalSeoSection, EnquiryForm, Footer, routes). Design, colours, fonts, layout, sections, hero and animations stay exactly as they are. Below are only the genuine issues found, plus the surgical fixes.

## Genuine issues found

**Accessibility (highest value, zero visual change)**
1. No visible keyboard focus indicator anywhere — links, buttons, inputs and the mobile menu toggle have no `focus-visible` style. Keyboard users can't see where they are.
2. Mobile menu button has no `aria-expanded` / `aria-controls`; nav landmarks are unlabelled (`Main`, `Mobile`, `Footer`).
3. Enquiry form success message is not announced (no `aria-live`), and required fields have no visible required marker — only the browser's silent `required`.
4. Footer/Explore and contact links are small text-only tap targets (well under 44px height on mobile).

**Mobile usability**
5. Form inputs use 14px text — iOS Safari auto-zooms the page on focus on any input under 16px. Fix by bumping input font-size to 16px on small screens only (labels and design unchanged).
6. `CtaRow` puts five wrapping buttons in a row; on a 390–428px screen they break into ragged 1–2 per line. Slightly tighter gap and allowing the primary WhatsApp/Call buttons to fill the row makes them easier to tap without changing button styling.
7. `min-h-screen` (Layout, 404, error page) — on mobile browsers `100vh` is taller than the visible viewport, causing an extra scroll nudge. Switch to `min-h-dvh`.
8. Hero eyebrow copy reads "Since Four Decades of Craft" (grammatically broken); one-line copy fix to "Four Decades of Craft".

**Performance / layout stability**
9. No `width`/`height` (or aspect ratio) on gallery, about, institutional and footer images → layout shift while images load. Add intrinsic sizing that matches the current rendered crop, so nothing looks different.
10. Hero image is `loading="eager"` but has no `fetchPriority="high"`; it is the LCP element. Also add `decoding` hints to gallery images that lack them.
11. Animated counter renders `0` then counts up inside a fixed-width stat cell — keep as is (already `tabular-nums`), no change needed.

**Content hierarchy / polish**
12. Section vertical padding is a flat `py-20` on mobile and desktop; on mobile that stacks a very long page. Reduce to `py-14 sm:py-20` (same rhythm, same style) so mobile scrolling feels less endless.
13. Gallery/institutional figcaptions can overflow on narrow screens (title + meta on one baseline row) — allow wrapping.

## Not changing (deliberately)

- Colour palette, tokens, fonts, hero layout, section order, card designs, hover/scale animations, images, navigation style, sticky bottom CTA bar, all copy other than item 8.

## Technical notes

- Focus states via a single `@layer base` rule in `src/styles.css` using existing `--ring` token: `:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }`.
- Input zoom fix: add `text-base sm:text-sm` to the shared `field` class in `EnquiryForm.tsx`.
- Required marker: `<span aria-hidden="true" class="text-primary">*</span>` next to Name/Phone labels; success `<p>` gets `role="status" aria-live="polite"`.
- Touch targets: add vertical padding to footer/contact list links (`py-1.5` → keeps layout, raises hit area) and `min-h-11` on the header nav CTA.
- Files touched: `src/styles.css`, `src/components/site/{Header,Layout,StickyCta,sections,highlights,LocalSeoSection,EnquiryForm,Footer}.tsx`, `src/routes/__root.tsx` (min-h-dvh only).
- QA: Playwright screenshots at 390px, 820px and 1440px before/after to confirm the pages remain visually identical apart from the spacing/focus fixes, plus a check for horizontal overflow on mobile.

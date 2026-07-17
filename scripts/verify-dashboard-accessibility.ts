import { strict as assert } from "node:assert/strict";

const page = await Bun.file("apps/web/app/page.tsx").text();
const styles = await Bun.file("apps/web/app/globals.css").text();

function requireSource(source: string, fragment: string, description: string) {
  assert.ok(source.includes(fragment), `missing ${description}`);
}

requireSource(page, 'href="#main-content"', "skip-link target");
requireSource(page, 'id="main-content"', "main landmark target");
requireSource(page, "tabIndex={-1}", "keyboard focus target");
requireSource(page, 'aria-labelledby="overview-heading"', "overview landmark");
requireSource(
  page,
  'aria-labelledby="exception-heading"',
  "exception landmark"
);
requireSource(
  page,
  "presentationFixtureBoundary.notice",
  "static-data boundary notice"
);
requireSource(page, "md:grid-cols-3", "tablet metric layout");
requireSource(page, "xl:grid-cols-[1.35fr_0.65fr]", "desktop dashboard layout");
requireSource(styles, ":focus-visible", "visible focus rule");
requireSource(styles, "var(--color-brand-600)", "focus token usage");

console.log(
  "Dashboard accessibility and responsive source verification passed (10 assertions)."
);

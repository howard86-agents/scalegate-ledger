# SG-03 responsive and accessibility verification

The static dashboard verification is intentionally lightweight and stays within the
presentation boundary. Run it from the repository root:

```sh
bun run verify:dashboard
```

The check confirms the page has a skip link and focus target, labelled dashboard
landmarks, the static-fixture notice, responsive grid breakpoints, and a global
token-based `:focus-visible` rule.

## Rendered evidence procedure

Run the app with `bun run dev`, then inspect `http://localhost:3000` at these
viewport sizes:

- PC: 1280 × 800
- tablet: 768 × 1024

At each size, confirm:

1. The five dashboard sections remain visible without horizontal overflow or
   clipped text: 今日作業摘要、車次佇列、最近完成紀錄、每日紀錄摘要、例外與人工覆核。
2. The heading order is one `h1` followed by the labelled section `h2` headings.
3. Pressing `Tab` reveals the `跳至主要內容` skip link with a visible focus outline;
   activating it moves focus to the main dashboard content.
4. Text and status badges use the existing `@theme` color tokens, and the static
   data / non-control disclaimer remains visible.

Evidence artifacts (durable, local):

- `docs/verification/evidence/issue-16-dashboard-1280x800.png` (`1280×800`)
- `docs/verification/evidence/issue-16-dashboard-768x1024.png` (`768×1024`)

Record one screenshot at each viewport with the PR evidence. This procedure does
not imply live data, device control, authentication, or any operational action.

## Screenshot capture command

```sh
bunx playwright install chromium
mkdir -p docs/verification/evidence
bunx playwright screenshot --viewport-size 1280,800 http://localhost:3000 docs/verification/evidence/issue-16-dashboard-1280x800.png --wait-for-timeout 1000
bunx playwright screenshot --viewport-size 768,1024 http://localhost:3000 docs/verification/evidence/issue-16-dashboard-768x1024.png --wait-for-timeout 1000
```
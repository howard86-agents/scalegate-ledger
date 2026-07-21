# Issue #15 rendered dashboard evidence

These artifacts demonstrate the static dashboard composition on PR #21 (`fix/issue-15-dashboard-fixture-composition-repair`) after a production build.

## Capture procedure

1. From the PR branch, install exactly the committed graph and build it:

   ```sh
   bun install --frozen-lockfile
   bun run build
   bun --cwd apps/web start -- -p 3115
   ```

2. In a second shell, capture the two committed full-page renders with Playwright 1.61.1:

   ```sh
   bunx --yes playwright screenshot --device='Desktop Chrome' --full-page \
     http://127.0.0.1:3115 docs/evidence/issue-15/dashboard-desktop-1280.png
   bunx --yes playwright screenshot --device='iPad Pro 11 landscape' --full-page \
     http://127.0.0.1:3115 docs/evidence/issue-15/dashboard-tablet-1194x834.png
   ```

3. Review the full-page images for the four required presentation-only concepts:
   visit queue; gross/tare/net/charge summary; landfill daily-log summary; and the informational exception/human-review queue. Confirm the presentation-fixture notice is visible and that no operational control is rendered.

## Artifacts

- `dashboard-desktop-1280.png` — Playwright `Desktop Chrome`, CSS viewport `1280×720`; full-page PNG is `1280×1115`.
- `dashboard-tablet-1194x834.png` — Playwright `iPad Pro 11 landscape`, CSS viewport `1194×834`; the captured 2× PNG is `2388×2884`.

The production build, typecheck, and repository check were run before capture. Screenshots are committed so reviewers can inspect them from the PR branch rather than relying on local or transient paths.

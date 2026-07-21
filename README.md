# ScaleGate Ledger

ScaleGate Ledger is a Traditional Chinese operations workspace for traceable vehicle visits, weighbridge records, charge calculations, landfill daily logs, and exception handling. The current Stage-1 bootstrap is an interface and architecture foundation only: its dashboard uses static presentation data and does not operate site equipment or connect to production services.

## Stack

- Bun workspace and Turborepo
- Next.js and Tailwind CSS v4 in `apps/web`
- Shared static/domain data in `packages/data`
- Deferred Prisma/Postgres scaffold in `packages/database`
- Shared TypeScript configuration in `packages/config-typescript`
- Ultracite/Biome, Husky, Commitlint, Gitleaks, Typos, Dependabot, and GitHub Actions CI

## Current product surface

The responsive PC/tablet dashboard shell presents four approved Phase-1 concepts:

- visit queue and manually reviewed workflow states;
- gross, tare, net weight, and charge summary;
- landfill daily operational log summary;
- exception queue with explicit human review.

All values shown on the page are static demonstration data. They are not live measurements, financial records, or completed transactions.

## Explicit boundaries

Stage 1 does not implement authentication or authorization, database models or migrations, hardware/device adapters, plate recognition, direct gate or traffic-light control, external APIs, accounting/payment flows, production configuration, deployment, or secrets. Database, authentication, hosting, offline behavior, and every device/integration boundary remain deferred pending discovery and explicit acceptance.

ScaleGate Ledger must not be treated as a fail-safe controller for gates, vehicles, weighbridges, PLCs, or safety interlocks. Unverified automatic plate or weight results must never bypass an agreed human exception process.

## Setup

```sh
brew install bun gitleaks typos-cli
bun install
bun run dev
```

## Common scripts

```sh
bun run check       # Ultracite lint/check
bun run fix         # Ultracite autofix
bun run typecheck   # Turbo typecheck across workspaces
bun run build       # Turbo build
bun run dev         # Run persistent dev tasks
```

## Quality gates

| Gate | Runs | Bypass |
|---|---|---|
| `pre-commit` | lint-staged Ultracite fixes, staged Gitleaks scan | `git commit --no-verify` |
| `commit-msg` | Commitlint Conventional Commits | `git commit --no-verify` |
| `pre-push` | Ultracite check, Turbo typecheck, Typos, Gitleaks history scan | `git push --no-verify` |
| CI | Ultracite check, typecheck, Typos, Gitleaks, actionlint | Required for merge |

Build is intentionally not in CI by default; Vercel previews should own app build validation unless a generated project decides otherwise.

## Agent workflow

Read `AGENTS.md` before editing. Keep work issue-scoped, inspect code first, make atomic conventional commits, run checks, and document stack/base notes for dependent PRs.

## Delivery posture

Read `CONTEXT.md` and `AGENTS.md` before implementation. Keep one accepted delivery issue per branch/PR after the phased issue graph is approved; preserve the existing quality gates and document any future architecture decision before activating database, authentication, integration, or deployment work.

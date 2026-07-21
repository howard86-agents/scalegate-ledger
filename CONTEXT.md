# ScaleGate Ledger Context

## Product

ScaleGate Ledger is an operations platform concept for gate/scale operators, landfill supervisors, dispatchers, finance administrators, and site managers. It aims to make vehicle visits, weights, rate application, landfill placement records, and operational exceptions traceable without presenting the browser application as a physical safety controller.

Traditional Chinese is the primary interface language. PC workstations and tablets are first-class; phone support is not currently assumed. The interface direction is calm, high-contrast, restrained, keyboard accessible, and suitable for dense operational information with touch-safe controls.

## Accepted Stage-1 scope

- Product-specific repository identity and `@scalegate-ledger/*` workspace namespace.
- A responsive static dashboard shell covering visit queue, weight/charge, landfill daily log, and exceptions.
- Product Tailwind tokens, Traditional Chinese metadata/language, and a Traditional Chinese system/font stack.
- Documentation of product boundaries and deferred decisions.

The displayed operational values are presentation fixtures only. No production data path has been accepted or implemented.

## Architecture

Maison-style full-stack TypeScript monorepo, bootstrapped from `howard86-agents/workspace-template`:

- Bun is the package manager and runtime for scripts.
- Turborepo coordinates workspace tasks.
- Next.js powers `apps/web`.
- The existing Prisma/Postgres scaffold remains in `packages/database`, but no ScaleGate Ledger schema or migration is authorized yet.
- Shared static/domain data lives in `packages/data`.
- Shared TypeScript compiler settings live in `packages/config-typescript`.

The intended future boundaries are a responsive web application, server/API layer, relational operational datastore, integration adapters, immutable audit events, and reporting. These are architecture hypotheses—not implemented commitments. A direct browser-to-weighbridge, barrier, PLC, or safety-interlock design is explicitly excluded.

## Current conventions

- Tailwind CSS v4 is the styling layer (utility classes, CSS-first config); operational color and font tokens live in `apps/web/app/globals.css` `@theme`.
- Ultracite/Biome for linting and formatting (class sorting enforced via `useSortedClasses`).
- Commitlint with Conventional Commits.
- Husky local gates for commit, commit message, and push checks.
- Gitleaks and Typos in local hooks and CI.
- GitHub Issues and PRs carry repo continuation state.

## Non-goals

- Authentication/SSO or role implementation during bootstrap.
- Product database models, migrations, seed data, or migration of legacy records.
- Live weighbridge, plate-recognition, printer, RFID/QR, PLC, barrier, traffic-light, intercom, or other hardware adapters.
- Direct or autonomous control of physical access or safety systems.
- External APIs, accounting/ERP, invoicing, payments, tax, regulator reporting, GIS, telematics, HR, or maintenance integrations.
- Production credentials/configuration, deployment topology, onsite edge services, offline synchronization, commissioning, or support commitments.

## Deferred decisions

Discovery must establish workflows and approval rules; device vendors/protocols and simulator access; stable-weight/reweigh/calibration rules; rate, rounding, tax, and correction rules; authentication/authorization and audit ownership; retention/privacy/compliance requirements; hosting/network/offline/recovery needs; and operational support boundaries. Database, authentication, and integration work must remain inactive until those decisions are accepted and recorded.

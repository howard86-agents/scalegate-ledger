# ADR 0002: Defer operational integrations pending discovery

## Status

Accepted for Stage-1 bootstrap.

## Context

ScaleGate Ledger may eventually coordinate vehicle visits, weights, charge calculations, landfill records, and exception review. Device protocols, safety ownership, workflow approvals, authentication, retention rules, deployment topology, and offline requirements are not yet validated. Treating the initial web shell or retained template scaffolds as working operational infrastructure would create false safety and delivery assumptions.

## Decision

Stage 1 provides product identity, documentation, design tokens, and a static responsive operations dashboard shell only. Database models and migrations, authentication/authorization, live hardware or plate-recognition adapters, physical gate control, external services, production configuration, and deployment remain inactive until discovery produces explicit acceptance criteria and a later ADR.

Future device results must enter through an adapter boundary with idempotent ingestion, visible pending/error states, immutable audit evidence, and an agreed human review or manual fallback. The browser application must never be represented as a fail-safe controller for physical access or safety interlocks.

## Consequences

- Dashboard values are presentation fixtures, not measurements or business records.
- Existing Prisma and authentication-ready template code may remain for provenance, but it does not constitute an accepted product implementation.
- No equipment, external service, credential, production environment, or migration is needed for this bootstrap.
- Future data, identity, integration, hosting, and offline decisions require discovery evidence, bounded delivery issues, and architecture review.

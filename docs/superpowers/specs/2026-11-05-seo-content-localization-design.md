# SEO Content and Localization Design

## Intent

Strengthen `dobryvodar.sk` for Slovak local search while adding a useful Ukrainian-language entry point. Use only real client photos and avoid unverifiable claims about prices, work duration, districts, or results.

## Goals

- Update the homepage H1 for the agreed emergency-plumber query.
- Improve service-page metadata, social sharing metadata, and visual proof of work.
- Publish a boiler service page and real work case pages based on supplied photographs.
- Add Ukrainian routes and hreflang metadata for the selected high-intent pages.
- Keep all existing pages, services, and blocks intact.

## Non-goals

- No GA4/GTM conversion configuration.
- No Google Business Profile changes.
- No paid advertising.
- No fabricated district case studies, prices, arrival times, guarantees, reviews, or before/after claims.

## Approaches

1. Generic district pages — rejected because they risk thin or misleading content.
2. Photo-led real-work cases — selected because they provide evidence without unsupported local claims.
3. Full-site Ukrainian translation — rejected as too broad for this iteration.
4. Ukrainian homepage and high-intent routes first — selected for useful language access without disrupting Slovak search.

## Design

- Reuse existing App Router, shared components, schemas and real WebP photos.
- Create a small data layer for real work cases with only visually supported scope.
- Add Ukrainian route metadata and hreflang entries for the implemented routes.
- Retain existing no-price wording until exact pricing, warranty and arrival conditions are confirmed.

## Verification

- TypeScript check and focused source-level tests.
- Production build where the local font environment permits.
- Verify public route HTML and metadata after deployment.

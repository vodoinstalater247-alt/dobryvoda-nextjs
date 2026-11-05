# Real Work Gallery Design

## Intent

Show genuine completed plumbing work on the home page so prospective customers can see the range of services and move directly to a relevant service page.

## Goals

- Add a curated, fast-loading set of supplied photos to the existing “Our Work” carousel.
- Group captions by real service type and link every photo to the corresponding service page.
- Use descriptive Slovak and English alternative text.
- Avoid photos that expose personal household details or imply an unverified location, date, price, or outcome.

## Constraints

- Preserve the existing six gallery photos and carousel behavior.
- Use only client-supplied assets.
- Publish optimized WebP derivatives at a maximum width of 1600px; the original attachments remain untouched.
- Do not create district-specific claims because no verified district data was supplied.
- Videos are out of scope for this change to prevent autoplay and page-weight regressions.

## Chosen approach

Extend the existing home-page carousel with 16 selected images. Each slide has an accessible caption and a direct internal link to the related service page. This is preferable to creating artificial case-study pages because the supplied material does not include confirmed job locations or written case details.

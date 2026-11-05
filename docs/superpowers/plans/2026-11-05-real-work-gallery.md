# Real Work Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the existing “Our Work” carousel with optimized, client-supplied photos and links to the relevant plumbing services.

**Architecture:** Store selected image derivatives under `public/images/portfolio`, define the gallery entries as typed data in the carousel component, and render each slide as an internal Next.js link. Translation keys provide captions and alt text in both supported languages.

**Tech Stack:** Next.js 15, TypeScript, `next/image`, Tailwind CSS, Embla Carousel.

**Spec:** `docs/superpowers/specs/2026-11-05-real-work-gallery-design.md`

## Global Constraints

- Use only supplied assets and preserve the original six gallery images.
- Do not publish a location, price, date, guarantee, or result that was not supplied.
- Use WebP gallery images sized to a maximum width of 1600px.
- No video playback in this change.

## Review Focus

- Each new image path must exist in `public/images/portfolio`.
- Each gallery entry must have a service URL and localized accessible text.
- The carousel must still retain the six original work images.
- New images must be lazy-loaded through `next/image`.
- Personal/household-heavy source photos must not be selected.

### Task 1: Prepare portfolio assets

**Files:**
- Create: `public/images/portfolio/*.webp`

- [ ] Convert the selected client-provided JPEGs to 1600px-wide WebP derivatives without changing the originals.
- [ ] Confirm the 16 output files are valid WebP images.

### Task 2: Add structured gallery entries

**Files:**
- Modify: `src/components/OurWorkSection.tsx`
- Modify: `src/contexts/LanguageContext.tsx`

- [ ] Add a typed gallery entry model containing image path, href, title key, and alt key.
- [ ] Add the selected entries after the existing six slides and render them as accessible internal links.
- [ ] Add Slovak and English caption and alt-text keys for each new work category.

### Task 3: Verify and publish

**Files:**
- Test: `src/components/OurWorkSection.tsx`

- [ ] Run the build and the existing automated test suite.
- [ ] Inspect a production build for the 16 asset paths and service links.
- [ ] Commit, push to `main`, and verify the live carousel after Vercel deploys.

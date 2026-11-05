# SEO Content and Localization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve on-site SEO content, real-work proof, and Ukrainian discoverability without changing analytics, Google Business Profile, or publishing unverified service claims.

**Architecture:** Keep the App Router and existing shared page components. Add deterministic page data for real work cases, extend existing metadata helpers, and introduce a bounded `/uk` route tree for key search-intent pages. Continue to use `next/image` and existing real WebP photos.

**Tech Stack:** Next.js 15 App Router, React, TypeScript, Tailwind CSS, Next Metadata API.

## Task 1: Homepage search intent and truthful service facts

1. Write a failing test for the Slovak emergency headline.
2. Update translations and home metadata.
3. Run focused tests and TypeScript check.

## Task 2: Boiler-page depth and social metadata

1. Write a failing test for boiler-specific FAQ and metadata.
2. Replace generic FAQ with truthful boiler questions.
3. Run focused tests and TypeScript check.

## Task 3: Real work cases

1. Write a failing test for unique case slugs, real portfolio paths and service links.
2. Add four photo-led cases and listing/detail pages with service links and schemas.
3. Add routes to sitemap.
4. Run focused tests and TypeScript check.

## Task 4: Ukrainian routes and alternate-language SEO

1. Write a failing test for language alternate links and Ukrainian route data.
2. Implement `/uk/` and selected high-intent routes.
3. Add hreflang metadata and sitemap entries.
4. Run focused tests and TypeScript check.

## Task 5: Validate and deploy

1. Run all source tests and `npx tsc --noEmit`.
2. Run the production build, documenting an environment limitation if it persists.
3. Review routes, schemas, metadata and mobile classes.
4. Merge, push and verify production HTML after Vercel deployment.

## Review focus

- Never add invented reviews, prices, arrival times, guarantees, dates or district claims.
- Preserve existing Slovak routes and links.
- Ensure Ukrainian alternates do not canonicalize to Slovak pages.
- Use only committed real client photos.

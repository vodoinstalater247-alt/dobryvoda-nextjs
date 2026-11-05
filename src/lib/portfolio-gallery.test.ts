import assert from "node:assert/strict";
import test from "node:test";
import { portfolioWorks } from "./portfolio-gallery";

test("portfolio gallery contains the selected optimized client photos", () => {
  assert.equal(portfolioWorks.length, 17);

  const ids = portfolioWorks.map((work) => work.id);
  const images = portfolioWorks.map((work) => work.image);

  assert.equal(new Set(ids).size, portfolioWorks.length);
  assert.equal(new Set(images).size, portfolioWorks.length);

  for (const work of portfolioWorks) {
    assert.match(work.image, /^\/images\/portfolio\/.+\.webp$/);
    assert.match(work.href, /^\//);
    assert.notEqual(work.href, "/");
  }
});

test("portfolio photos only link to relevant existing service pages", () => {
  const allowedServicePaths = new Set([
    "/montaz-baterie",
    "/montaz-sprchy",
    "/oprava-kurenia",
    "/vymena-rozvodov",
    "/oprava-potrubia",
    "/oprava-wc",
    "/filtre-na-vodu",
    "/montaz-sanity",
    "/montaz-bojleru",
  ]);

  for (const work of portfolioWorks) {
    assert.ok(allowedServicePaths.has(work.href));
  }
});

test("boiler work uses a real client installation photo", () => {
  const boilerWork = portfolioWorks.find((work) => work.id === "boiler-installation");

  assert.deepEqual(boilerWork, {
    id: "boiler-installation",
    image: "/images/portfolio/boiler-installation.webp",
    href: "/montaz-bojleru",
    titleKey: "work.portfolio.boilerInstallation",
  });
});

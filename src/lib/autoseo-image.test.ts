import assert from "node:assert/strict";
import test from "node:test";
import { extractCoverImageUrl } from "./autoseo-image";

test("uses AutoSEO heroImageUrl before legacy image fields", () => {
  const image = extractCoverImageUrl({
    heroImageUrl: "https://cdn.autoseo.example/articles/drain-smell.jpg",
    featured_image: "https://cdn.autoseo.example/articles/older-image.jpg",
  });

  assert.equal(image, "https://cdn.autoseo.example/articles/drain-smell.jpg");
});

test("accepts snake_case hero image URLs from integrations", () => {
  const image = extractCoverImageUrl({
    hero_image_url: "https://cdn.autoseo.example/articles/burst-pipe.jpg",
  });

  assert.equal(image, "https://cdn.autoseo.example/articles/burst-pipe.jpg");
});

test("ignores an invalid hero image URL", () => {
  const image = extractCoverImageUrl({ heroImageUrl: "javascript:alert(1)" });

  assert.equal(image, null);
});

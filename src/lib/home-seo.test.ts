import assert from "node:assert/strict";
import test from "node:test";
import { homeSeo } from "@/lib/home-seo";

test("targets the emergency plumber query in the Slovak homepage heading", () => {
  assert.equal(homeSeo.slovakH1, "Vodoinštalatér Bratislava: havarijné opravy 24/7");
  assert.match(homeSeo.title, /Vodoinštalatér Bratislava/);
  assert.match(homeSeo.description, /24\/7/);
});

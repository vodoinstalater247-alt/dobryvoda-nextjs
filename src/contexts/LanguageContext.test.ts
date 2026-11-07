import assert from "node:assert/strict";
import test from "node:test";
import { translate } from "./LanguageContext";

test("keeps intentionally empty hero fragments empty", () => {
  assert.equal(translate("sk", "hero.title2"), "");
  assert.equal(translate("sk", "hero.title3"), "");
});

test("falls back to the key only for a missing translation", () => {
  assert.equal(translate("sk", "missing.translation"), "missing.translation");
});

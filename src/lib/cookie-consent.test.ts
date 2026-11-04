import assert from "node:assert/strict";
import test from "node:test";

import {
  COOKIE_CONSENT_COOKIE,
  getConsentFromCookieValue,
  shouldLoadGoogleTags,
} from "./cookie-consent";

test("reads a granted consent value from the cookie", () => {
  assert.equal(getConsentFromCookieValue("accepted"), "accepted");
  assert.equal(COOKIE_CONSENT_COOKIE, "dobryvodar_cookie_consent");
});

test("treats unknown and rejected consent as no permission for Google tags", () => {
  assert.equal(getConsentFromCookieValue("anything-else"), null);
  assert.equal(shouldLoadGoogleTags(null), false);
  assert.equal(shouldLoadGoogleTags("rejected"), false);
});

test("loads Google tags only after analytics consent was accepted", () => {
  assert.equal(shouldLoadGoogleTags("accepted"), true);
});

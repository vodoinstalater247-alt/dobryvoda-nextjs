import assert from "node:assert/strict";
import test from "node:test";

import { localBusinessSchema } from "./structured-data";

test("uses the current legal business details without exposing a walk-in address", () => {
  assert.equal(localBusinessSchema.legalName, "Dobrý Vodar s. r. o.");
  assert.deepEqual(localBusinessSchema.identifier, {
    "@type": "PropertyValue",
    propertyID: "IČO",
    value: "57 972 443",
  });
  assert.equal("address" in localBusinessSchema, false);
  assert.equal("geo" in localBusinessSchema, false);
});

test("does not publish stale self-serving review markup", () => {
  assert.equal("aggregateRating" in localBusinessSchema, false);
  assert.equal("review" in localBusinessSchema, false);
  assert.equal(localBusinessSchema.sameAs.length, 2);
});

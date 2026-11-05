import assert from "node:assert/strict";
import test from "node:test";

import { boilerServiceFaqs } from "./boiler-service-faqs";

test("boiler page has factual, job-specific FAQ content", () => {
  assert.ok(boilerServiceFaqs.length >= 4);
  assert.equal(
    new Set(boilerServiceFaqs.map((faq) => faq.question)).size,
    boilerServiceFaqs.length,
  );
  assert.ok(
    boilerServiceFaqs.some((faq) => faq.question.includes("bojlera")),
  );
  assert.ok(boilerServiceFaqs.some((faq) => faq.question.includes("cena")));
});

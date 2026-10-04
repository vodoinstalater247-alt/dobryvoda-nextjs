type RecordData = Record<string, unknown>;

function asText(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (!value || typeof value !== "object" || Array.isArray(value)) return "";

  const nested = value as RecordData;
  for (const key of ["url", "src", "value"]) {
    const text = asText(nested[key]);
    if (text) return text;
  }

  return "";
}

function firstText(record: RecordData, keys: string[]): string {
  for (const key of keys) {
    const text = asText(record[key]);
    if (text) return text;
  }

  return "";
}

export function extractCoverImageUrl(article: RecordData): string | null {
  const value = firstText(article, [
    "heroImageUrl",
    "hero_image_url",
    "hero_image",
    "cover_image_url",
    "featured_image",
    "image_url",
    "image",
  ]);

  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : null;
  } catch {
    return null;
  }
}

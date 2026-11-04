export const COOKIE_CONSENT_COOKIE = "dobryvodar_cookie_consent";

export type CookieConsent = "accepted" | "rejected";

export function getConsentFromCookieValue(value: string | undefined): CookieConsent | null {
  return value === "accepted" || value === "rejected" ? value : null;
}

export function shouldLoadGoogleTags(consent: CookieConsent | null): boolean {
  return consent === "accepted";
}

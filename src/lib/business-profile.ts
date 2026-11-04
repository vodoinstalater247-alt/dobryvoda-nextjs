/**
 * Public business details used across the website and structured data.
 * The company serves customers at their location, so the legal seat is kept
 * on the privacy page and is deliberately not used as a walk-in address.
 */
export const businessProfile = {
  brandName: "Dobrý Vodár",
  legalName: "Dobrý Vodar s. r. o.",
  ico: "57 972 443",
  phone: "+421944562059",
  phoneDisplay: "0944 562 059",
  email: "info@dobryvodar.sk",
  website: "https://dobryvodar.sk",
  serviceArea: "Bratislava a okolie",
  socialProfiles: [
    "https://www.facebook.com/share/1BoTNz1Rhw/?mibextid=wwXIfr",
    "https://www.instagram.com/vodoinstalater_ba",
  ],
} as const;

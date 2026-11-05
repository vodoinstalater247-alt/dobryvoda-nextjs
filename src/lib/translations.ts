// Slovak translations used for server-side metadata generation
// This is the source of truth for SEO metadata on each service page
// Title: 50-60 chars | Description: 150-160 chars

export const seoData: Record<
  string,
  { title: string; description: string; slug: string }
> = {
  siphon: {
    slug: "vymena-sifonu",
    // 57 chars
    title: "Výmena sifónu Bratislava | Oprava & Montáž | Dobrý Vodár",
    // 151 chars
    description:
      "Výmena sifónu v kuchyni, kúpeľni a WC v Bratislave. Riešime pretekanie, zápach a upchaté sifóny. Rozsah práce si vopred dohodneme. Volajte 0944 562 059.",
  },
  wc: {
    slug: "oprava-wc",
    // 56 chars
    title: "Oprava WC Bratislava | Pretekajúce WC | Dobrý Vodár",
    // 155 chars
    description:
      "Oprava pretekajúceho WC, výmena splachovača a montáž nových toaliet v Bratislave. Pred zásahom preveríme problém a dohodneme postup. Volajte 0944 562 059.",
  },
  faucet: {
    slug: "montaz-baterie",
    // 56 chars
    title: "Výmena a montáž batérie Bratislava | Kúpeľňa & Kuchyňa",
    // 155 chars
    description:
      "Odborná montáž a výmena vodovodných batérií v Bratislave. Oprava kvapkajúcich kohútikov v kuchyni a kúpeľni. Profesionálny prístup. Volajte 0944 562 059.",
  },
  pipe: {
    slug: "oprava-potrubia",
    // 55 chars
    title: "Oprava potrubia Bratislava | Únik vody | Dobrý Vodár",
    // 155 chars
    description:
      "Havarijná oprava vodovodného potrubia v Bratislave. Riešime viditeľné úniky vody a poškodené potrubie. Havarijná služba je dostupná 24/7. Volajte 0944 562 059.",
  },
  shower: {
    slug: "montaz-sprchy",
    // 59 chars
    title: "Montáž sprchového kúta Bratislava | Inštalácia | Dobrý Vodár",
    // 153 chars
    description:
      "Montáž sprchových kútov, vaničiek a zásten v Bratislave. Pomôžeme so silikónovaním a utesnením sprchy podľa stavu miesta. Volajte 0944 562 059.",
  },
  appliance: {
    slug: "zapojenie-spotrebicov",
    // 56 chars
    title: "Zapojenie práčky a umývačky Bratislava | Dobrý Vodár",
    // 152 chars
    description:
      "Zapojenie práčky, umývačky riadu a sušičky v Bratislave. Preveríme prívod vody, odpad a priestor pre spotrebič. Rozsah práce dohodneme vopred. Volajte 0944 562 059.",
  },
  valve: {
    slug: "vymena-ventilov",
    // 55 chars
    title: "Výmena ventilov Bratislava | Oprava ventilu | Dobrý Vodár",
    // 152 chars
    description:
      "Výmena nefunkčných a starých rohových ventilov pod umývadlom, pri WC alebo práčke v Bratislave. Pomôžeme preveriť viditeľný stav ventilu a prípojok. Volajte 0944 562 059.",
  },
  sanitary: {
    slug: "montaz-sanity",
    // 56 chars
    title: "Montáž sanity Bratislava | Umývadlá, Vane | Dobrý Vodár",
    // 154 chars
    description:
      "Kompletná montáž sanity do kúpeľne a kuchyne v Bratislave. Osadenie umývadla, vane, bidetu a kuchynského drezu. Profesionálna práca. Volajte 0944 562 059.",
  },
  heating: {
    slug: "oprava-kurenia",
    // 57 chars
    title: "Oprava a výmena radiátorov Bratislava | Kúrenár | Dobrý Vodár",
    // 153 chars
    description:
      "Montáž, výmena a oprava radiátorov v Bratislave. Riešime tečúce ventily a úpravy pripojenia radiátorov podľa stavu systému. Volajte 0944 562 059.",
  },
  boiler: {
    slug: "montaz-bojleru",
    // 55 chars
    title: "Montáž a výmena bojlerov Bratislava | Servis | Dobrý Vodár",
    // 153 chars
    description:
      "Montáž a výmena bojlerov v Bratislave. Pred zásahom preveríme miesto, viditeľné prípojky a rozsah potrebných prác. Dohodnite si termín na 0944 562 059.",
  },
  pipes: {
    slug: "vymena-rozvodov",
    // 58 chars
    title: "Výmena rozvodov vody Bratislava | Rekonštrukcia | Dobrý Vodár",
    // 155 chars
    description:
      "Výmena vodovodných a odpadových rozvodov v bytoch a domoch v Bratislave. Pripravíme nové rozvody pri rekonštrukcii podľa možností priestoru. Volajte 0944 562 059.",
  },
};

// Image mapping for each service page
export const serviceImages: Record<string, string> = {
  siphon: "/images/portfolio/installed-basin-faucet.webp",
  wc: "/images/portfolio/wc-installation-frame.webp",
  faucet: "/images/portfolio/installed-kitchen-faucet.webp",
  pipe: "/images/portfolio/pipe-replacement.webp",
  shower: "/images/portfolio/shower-enclosure.webp",
  appliance: "/images/work-3.jpg",
  valve: "/images/portfolio/radiator-valve.webp",
  sanitary: "/images/portfolio/bathtub-installation.webp",
  heating: "/images/portfolio/radiator-pipework.webp",
  boiler: "/images/portfolio/boiler-installation.webp",
  pipes: "/images/portfolio/bathroom-pipework.webp",
};

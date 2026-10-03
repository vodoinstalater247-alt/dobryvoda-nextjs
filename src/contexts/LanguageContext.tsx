"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "sk" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  sk: {
    // SEO Specific
    "seo.title": "Dobrý Vodár Bratislava | Havarijná služba & Opravy 24/7",
    "seo.description": "Profesionálny vodoinštalatér v Bratislave a okolí. Rýchle opravy potrubí, montáž sanity, čistenie odpadov a havarijná služba 24/7. Volajte 0944 562 059.",
    "seo.keywords": "vodoinštalatér bratislava, oprava vody, havarijná služba voda, čistenie odpadov, inštalatér, výmena batérie, dobrý vodár",
    
    // Navbar
    "nav.home": "Domov",
    "nav.services": "Služby",
    "nav.work": "Naše práce",
    "nav.references": "Referencie",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",
    "nav.book": "Objednať sa",

    // Hero
    "hero.badge": "🔧 Spolu s vami 24/7",
    "hero.title1": "Dobrý vodár",
    "hero.title2": "Rýchlo a",
    "hero.title3": "Spoľahlivo",
    "hero.description": "Profesionálna inštalácia a oprava vodovodných systémov. Riešime všetky problémy s vodoinštaláciou rýchlo a spoľahlivo.",
    "hero.benefit1": "Havarijné výjazdy: 24/7",
    "hero.benefit2": "Bežné práce PON-PIA 7:00 - 17:00",
    "hero.benefit3": "Bratislava a okolie",
    "hero.cta.call": "Zavolať teraz",
    "hero.cta.services": "Naše služby",
    "hero.image.alt": "Profesionálny vodoinštalatér Bratislava",

    // Stats
    "stats.clients": "Spokojných klientov",
    "stats.years": "Rokov skúseností",
    "stats.projects": "Dokončených projektov",
    "stats.service": "Pohotovostná služba",

    // Services
    "services.label": "Naše služby",
    "services.title1": "Čo pre vás",
    "services.title2": " môžeme urobiť",
    "services.description": "Profesionálna inštalácia a oprava vodovodných systémov s dôrazom na kvalitu a spokojnosť zákazníka.",
    "services.emergency.title": "Havarijné služby",
    "services.emergency.1": "Únik vody / prasknuté potrubie",
    "services.emergency.2": "Zatekanie, havarijné opravy",
    "services.emergency.3": "Odstránenie porúch na rozvodoch studenej a teplej vody",
    "services.emergency.4": "Riešenie upchatia (drez, umývadlo, WC)",
    "services.regular.title": "Montážne a bežné práce",
    "services.regular.hours": "PON-PIA 7:00 - 17:00",
    "services.regular.1": "Výmena sifónu",
    "services.regular.2": "Výmena batérie (kuchyňa/kúpeľňa)",
    "services.regular.3": "Výmena a montáž WC",
    "services.regular.4": "Montáž a výmena ventilov",
    "services.regular.5": "Montáž zdravotechniky a sanity",
    "services.regular.6": "Oprava vodovodného potrubia",
    "services.regular.7": "Výmena a montáž rozvodov vody",
    "services.regular.8": "Výmena rozvodov kanalizácie v bytoch a rodinných domoch",
    "services.regular.9": "Montáž vykurovania v bytoch a domoch (radiátory, rozvody, prípojky)",
    "services.pricing.title": "Ceny sú individuálne",
    "services.pricing.description": "Presná suma závisí od typu práce a stavu zariadenia. Pre presnú cenu ma kontaktujte telefonicky alebo správou.",

    // Our Work
    "work.label": "Naše práce",
    "work.title": "Ukážky našej práce",
    "work.description": "Pozrite si niektoré z našich dokončených projektov. Kvalita a precíznosť v každom detaile.",
    "work.1": "Inštalácia sprchy",
    "work.2": "Sprchovací kút",
    "work.3": "Moderná kúpeľňa",
    "work.4": "WC inštalácia",
    "work.5": "Sprchový systém",
    "work.6": "Dvojumývadlo",

    // Testimonials
    "testimonials.label": "Referencie",
    "testimonials.title1": "Čo hovoria naši",
    "testimonials.title2": " spokojní zákazníci",
    "testimonials.description": "Reálne recenzie od našich zákazníkov na Google.",
    "testimonials.source": "Google recenzia",
    "testimonials.1.name": "Bartolomej Proščák",
    "testimonials.1.content": "Profesionálny prístup, dobrá cena a kvalitná práca. Vymenený celý sprchový kút, sprchový systém, termostatická batéria. Demontáž, montáž, odvoz, dovoz. Všetko v poriadku. Určite ak budeme potrebovať, opätovne sa obrátime na Dobrého vodára. Odporúčame.",
    "testimonials.2.name": "Rene",
    "testimonials.2.content": "Perfektny vodar, super sluzba a profesionalita, od zavolania do hodiny sa dostavil a opravil, a to bolo v sobotu. Doporucujem vsetkym.",
    "testimonials.3.name": "Viktor Bab",
    "testimonials.3.content": "S inštalatérskymi službami som maximálne spokojný. Prerábal mi radiátory a práca bola urobená rýchlo, kvalitne a za veľmi rozumnú cenu. Oceňujem profesionálny prístup, spoľahlivosť a detailné spracovanie. Určite odporúčam každému, kto hľadá kvalitného inštalatéra.",
    "testimonials.4.name": "Yaroslava Svitlyk",
    "testimonials.4.content": "Som veľmi spokojná so službami. Prišiel rýchlo, všetko profesionálne vysvetlil a problém vyriešil za chvíľu. Určite odporúčam.",
    "testimonials.5.name": "Miroslava Š.",
    "testimonials.5.content": "Mali sme dlhodobý problém – vlhla nám stena. Nevedeli sme prísť na to, z čoho to je, tak sme zavolali pána. Do 30 minút bola príčina nájdená a problém vyriešený, a hlavne za adekvátnu cenu. Klobúk dole.",
    "testimonials.6.name": "Richard Tekel",
    "testimonials.6.content": "Spokojnosť. Rýchla reakcia, mal som šťastie na skorý termín a havária v stúpačke bola vyriešená bez problémov. Veľmi dobrý prístup.",

    // Contact
    "contact.label": "Kontaktujte nás",
    "contact.title1": "Objednajte si",
    "contact.title2": " termín ešte dnes",
    "contact.description": "Máte problém s vodoinštaláciou? Kontaktujte nás a my vám pomôžeme.",
    "contact.form.title": "Napíšte nám",
    "contact.form.name": "Vaše meno",
    "contact.form.email": "Váš email",
    "contact.form.phone": "Telefónne číslo",
    "contact.form.message": "Opíšte váš problém alebo požiadavku...",
    "contact.form.submit": "Odoslať správu",
    "contact.toast.title": "Správa odoslaná!",
    "contact.toast.description": "Ďakujeme za vašu správu. Čoskoro vás budeme kontaktovať.",
    "contact.validation.name": "Prosím, vyplňte vaše meno.",
    "contact.validation.email": "Prosím, zadajte platný email.",
    "contact.validation.message": "Prosím, napíšte vašu správu.",
    "contact.info.phone": "Telefón (WhatsApp)",
    "contact.info.regular": "Bežné práce",
    "contact.info.emergency": "Havarijné výjazdy",
    "contact.info.area": "Oblasť pôsobenia",
    "contact.info.area.value": "Bratislava a okolie",

    // FAQ
    "faq.label": "Časté otázky",
    "faq.title1": "Rýchle odpovede na",
    "faq.title2": " vaše otázky",
    "faq.description": "Nájdite odpovede na najčastejšie otázky o našich vodoinštalačných službách.",
    "faq.cta": "Nenašli ste odpoveď? Kontaktujte nás na",
    "faq.1.question": "Ako rýchlo môžete prísť?",
    "faq.1.answer": "V prípade bežných objednávok príjdeme do 24-48 hodín. Pri naliehavých situáciách poskytujeme pohotovostnú službu s príjazdom do 60 minút.",
    "faq.2.question": "Aké služby ponúkate?",
    "faq.2.answer": "Ponúkame komplexné vodoinštalačné služby vrátane opráv vodovodných potrubí, inštalácie sanitárnych zariadení, čistenia odpadov, opráv vykurovania a montáže kotlov.",
    "faq.3.question": "Poskytujete záruky na vaše práce?",
    "faq.3.answer": "Áno, na všetky naše práce poskytujeme záruku minimálne 24 mesiacov. Na niektoré typy prác ponúkame aj rozšírenú záruku.",
    "faq.4.question": "Koľko stojí vaša služba?",
    "faq.4.answer": "Ceny závisia od typu práce. Vždy poskytujeme bezplatnú cenovú ponuku pred začatím prác, aby ste presne vedeli, čo očakávať. Bez skrytých poplatkov.",
    "faq.5.question": "Pracujete aj cez víkendy?",
    "faq.5.answer": "Áno, poskytujeme služby 7 dní v týždni. Pre pohotovostné služby sme dostupní 24/7 vrátane sviatkov.",

    // Footer
    "footer.description": "Dobrý vodár - spolu s vami 24/7. Profesionálne vodoinštalačné služby pre váš domov. Rýchlo a spoľahlivo.",
    "footer.quickLinks": "Rýchle odkazy",
    "footer.services": "Služby",
    "footer.contact": "Kontakt",
    "footer.service.1": "Havarijné služby 24/7",
    "footer.service.2": "Montáž sanity",
    "footer.service.3": "Opravy potrubí",
    "footer.service.4": "Čistenie odpadov",
    "footer.service.5": "Vykurovanie",
    "footer.service.6": "Krtkovanie",
    "footer.service.7": "Filtre na vodu",
    "footer.hours": "PON-PIA 7:00 - 17:00",
    "footer.emergency": "Havárie: 24/7",
    "footer.copyright": "Všetky práva vyhradené.",

    // Siphon Page Specific (SK)
    "siphon.seo.title": "Výmena sifónu Bratislava | Oprava & Montáž | Dobrý Vodár",
    "siphon.seo.description": "Profesionálna výmena sifónu v kuchyni, kúpeľni a WC. Riešime pretekanie, zápach a upchaté sifóny. Rýchly výjazd v Bratislave. Volajte 0944 562 059.",
    "siphon.seo.keywords": "výmena sifónu, oprava sifónu, montáž sifónu, sifón umývadlo, sifón vaňa, pretekajúci sifón, vodoinštalatér bratislava",
    "siphon.hero.title": "Výmena a oprava sifónov",
    "siphon.hero.subtitle": "Profesionálne riešenie pre vašu kuchyňu a kúpeľňu",
    "siphon.problem.title": "Máte problém so sifónom?",
    "siphon.problem.1": "Pretekajúca voda pod umývadlom",
    "siphon.problem.2": "Nepríjemný zápach z odpadu",
    "siphon.problem.3": "Upchatý alebo neodtekajúci sifón",
    "siphon.problem.4": "Starý a skorodovaný materiál",
    "siphon.cta": "Objednať výmenu",

    // 1. Oprava WC
    "wc.seo.title": "Oprava a montáž WC Bratislava | Pretekajúce WC | Dobrý Vodár",
    "wc.seo.description": "Rýchla oprava pretekajúceho WC, výmena splachovača a montáž nových toaliet v Bratislave. Geberit servis. Volajte ihneď.",
    "wc.seo.keywords": "oprava wc bratislava, pretekajúce wc, výmena záchoda, montáž geberit, inštalatér wc",
    "wc.hero.title": "Oprava a montáž WC",
    "wc.hero.subtitle": "Stop pretekajúcej vode a nefunkčnému splachovaniu",
    "wc.problem.title": "Problémy s toaletou?",
    "wc.problem.1": "WC neustále preteká",
    "wc.problem.2": "Nefunkčné alebo zaseknuté splachovanie",
    "wc.problem.3": "Výmena starého WC za nové",
    "wc.problem.4": "Montáž a servis podomietkových systémov (Geberit)",
    "wc.cta": "Objednať opravu WC",

    // 2. Vodovodné batérie
    "faucet.seo.title": "Výmena a montáž batérie Bratislava | Kúpeľňa & Kuchyňa",
    "faucet.seo.description": "Odborná montáž a výmena vodovodných batérií. Oprava kvapkajúcich kohútikov v kuchyni a kúpeľni. Profesionálny prístup.",
    "faucet.seo.keywords": "výmena batérie, montáž vodovodnej batérie, kvapkajúci kohútik, inštalácia batérie bratislava",
    "faucet.hero.title": "Montáž a výmena batérií",
    "faucet.hero.subtitle": "Profesionálna inštalácia pre vašu kúpeľňu a kuchyňu",
    "faucet.problem.title": "Kedy vymeniť batériu?",
    "faucet.problem.1": "Batéria kvapká alebo netesní",
    "faucet.problem.2": "Ťažké alebo zaseknuté ovládanie",
    "faucet.problem.3": "Estetická výmena za nový model",
    "faucet.problem.4": "Slabý prúd vody cez batériu",
    "faucet.cta": "Vymeniť batériu",

    // 3. Oprava potrubia (Leak)
    "pipe.seo.title": "Oprava prasknutého potrubia Bratislava | Únik vody",
    "pipe.seo.description": "Havarijná oprava vodovodného potrubia. Lokalizácia a odstránenie úniku vody. Rýchly výjazd v celej Bratislave.",
    "pipe.seo.keywords": "oprava potrubia, prasknuté potrubie, únik vody bratislava, havarijná služba voda, inštalatér potrubie",
    "pipe.hero.title": "Oprava vodovodného potrubia",
    "pipe.hero.subtitle": "Rýchly zásah pri úniku vody a prasknutom potrubí",
    "pipe.problem.title": "Máte haváriu vody?",
    "pipe.problem.1": "Viditeľný únik vody alebo mokrá stena",
    "pipe.problem.2": "Náhly pokles tlaku vody",
    "pipe.problem.3": "Staré a zhrdzavené rozvody",
    "pipe.problem.4": "Prasknuté potrubie v stene alebo podlahe",
    "pipe.cta": "Nahlásiť haváriu",

    // 4. Sprchové kúty
    "shower.seo.title": "Montáž sprchového kúta Bratislava | Inštalácia sanity",
    "shower.seo.description": "Profesionálna montáž sprchových kútov, vaničiek a zásten. Silikónovanie a utesnenie sprchy. Kvalitná práca.",
    "shower.seo.keywords": "montáž sprchového kúta, inštalácia sprchy, výmena sprchovej vaničky, silikónovanie sprchy, vodár bratislava",
    "shower.hero.title": "Montáž sprchových kútov",
    "shower.hero.subtitle": "Kompletná inštalácia a utesnenie vašej novej sprchy",
    "shower.problem.title": "Plánujete novú sprchu?",
    "shower.problem.1": "Montáž nového sprchového kúta",
    "shower.problem.2": "Výmena starej vaničky",
    "shower.problem.3": "Pretekajúca voda zo sprchy (pretesnenie)",
    "shower.problem.4": "Inštalácia sprchového panelu",
    "shower.cta": "Objednať montáž",

    // 5. Zapojenie spotrebičov
    "appliance.seo.title": "Zapojenie práčky a umývačky Bratislava | Dobrý Vodár",
    "appliance.seo.description": "Odborné zapojenie práčky, umývačky riadu a sušičky. Úprava prívodu vody a odpadu. Pečiatka pre záruku.",
    "appliance.seo.keywords": "zapojenie práčky, zapojenie umývačky, inštalácia spotrebičov, pripojenie vody, vodár bratislava",
    "appliance.hero.title": "Zapojenie spotrebičov",
    "appliance.hero.subtitle": "Profesionálne pripojenie práčky a umývačky riadu",
    "appliance.problem.title": "Kúpili ste nový spotrebič?",
    "appliance.problem.1": "Odborné zapojenie práčky",
    "appliance.problem.2": "Inštalácia umývačky riadu",
    "appliance.problem.3": "Úprava prívodu vody a odpadu",
    "appliance.problem.4": "Výmena ventilov pre spotrebiče",
    "appliance.cta": "Objednať zapojenie",

    // 6. Rohové ventily
    "valve.seo.title": "Výmena rohových ventilov Bratislava | Oprava ventilu",
    "valve.seo.description": "Výmena nefunkčných a starých rohových ventilov pod umývadlom, pri WC alebo práčke. Predíďte vytopeniu.",
    "valve.seo.keywords": "výmena rohového ventilu, oprava ventilu, nefunkčný ventil, vodársky ventil, poistný ventil",
    "valve.hero.title": "Výmena ventilov",
    "valve.hero.subtitle": "Bezpečná výmena starých a nefunkčných ventilov",
    "valve.problem.title": "Prečo vymeniť ventily?",
    "valve.problem.1": "Ventil sa nedá zatvoriť alebo otvoriť",
    "valve.problem.2": "Viditeľná korózia alebo kvapkanie",
    "valve.problem.3": "Preventívna výmena starých ventilov",
    "valve.problem.4": "Inštalácia nových kombinovaných ventilov",
    "valve.cta": "Vymeniť ventily",

    // 7. Montáž sanity (Umývadlá)
    "sanitary.seo.title": "Montáž sanity Bratislava | Umývadlá, Vane, Bidety",
    "sanitary.seo.description": "Kompletná montáž sanity do kúpeľne a kuchyne. Osadenie umývadla, vane, bidetu a kuchynského drezu.",
    "sanitary.seo.keywords": "montáž sanity, osadenie umývadla, montáž vane, inštalácia drezu, rekonštrukcia kúpeľne",
    "sanitary.hero.title": "Montáž sanity",
    "sanitary.hero.subtitle": "Precízne osadenie umývadiel, vaní a drezov",
    "sanitary.problem.title": "Zariaďujete kúpeľňu?",
    "sanitary.problem.1": "Montáž umývadla a skrinky",
    "sanitary.problem.2": "Osadenie a silikónovanie vane",
    "sanitary.problem.3": "Inštalácia kuchynského drezu",
    "sanitary.problem.4": "Montáž bidetu a príslušenstva",
    "sanitary.cta": "Dohodnúť termín",

    // 8. Radiátory (Kúrenie)
    "heating.seo.title": "Oprava a výmena radiátorov Bratislava | Kúrenár",
    "heating.seo.description": "Montáž, výmena a oprava radiátorov. Riešenie tečúcich ventilov a odvzdušnenie systému. Kúrenárske práce.",
    "heating.seo.keywords": "výmena radiátora, oprava kúrenia, tečúci radiátor, montáž radiátorov, kúrenár bratislava",
    "heating.hero.title": "Oprava a výmena radiátorov",
    "heating.hero.subtitle": "Aby bolo u vás doma vždy teplo",
    "heating.problem.title": "Problémy s kúrením?",
    "heating.problem.1": "Výmena starého radiátora za nový",
    "heating.problem.2": "Oprava tečúceho ventilu",
    "heating.problem.3": "Radiátor hreje len čiastočne",
    "heating.problem.4": "Presun radiátora pri rekonštrukcii",
    "heating.cta": "Zavolať kúrenára",

    // 9. Bojlery
    "boiler.seo.title": "Montáž a výmena bojlerov Bratislava | Servis",
    "boiler.seo.description": "Profesionálna výmena elektrických bojlerov. Zapojenie vody a elektriny, uvedenie do prevádzky. Odvoz starého bojlera.",
    "boiler.seo.keywords": "výmena bojlera, montáž bojlera, elektrický bojler, zapojenie ohrievača vody, servis bojlerov",
    "boiler.hero.title": "Montáž a výmena bojlerov",
    "boiler.hero.subtitle": "Zabezpečíme vám teplú vodu rýchlo a bezpečne",
    "boiler.problem.title": "Potrebujete nový bojler?",
    "boiler.problem.1": "Bojler tečie alebo neohrieva vodu",
    "boiler.problem.2": "Výmena starého bojlera za úsporný",
    "boiler.problem.3": "Nová inštalácia ohrievača vody",
    "boiler.problem.4": "Kontrola poistného ventilu",
    "boiler.cta": "Vymeniť bojler",

    // 10. Rekonštrukcia rozvodov
    "pipes.seo.title": "Výmena rozvodov vody Bratislava | Rekonštrukcia bytov",
    "pipes.seo.description": "Kompletná výmena vodovodných a odpadových rozvodov v bytoch a domoch. Rekonštrukcia stúpačiek a inštalácií.",
    "pipes.seo.keywords": "výmena rozvodov vody, rekonštrukcia vody, nové potrubie, inštalatérske práce, voda odpad plyn",
    "pipes.hero.title": "Výmena rozvodov vody",
    "pipes.hero.subtitle": "Kompletná rekonštrukcia vodoinštalácie",
    "pipes.problem.title": "Plánujete rekonštrukciu?",
    "pipes.problem.1": "Výmena starých pozinkovaných rúr",
    "pipes.problem.2": "Nové rozvody vody a odpadu v kúpeľni",
    "pipes.problem.3": "Prerábka kuchynskej linky",
    "pipes.problem.4": "Kompletná inštalácia pre novostavby",
    "pipes.cta": "Naceniť rekonštrukciu",
  },
  en: {
    // SEO Specific
    "seo.title": "Good Plumber Bratislava | Emergency Service & Repairs 24/7",
    "seo.description": "Professional plumber in Bratislava. Fast pipe repairs, sanitary installation, drain cleaning and 24/7 emergency service. Call 0944 562 059.",
    "seo.keywords": "plumber bratislava, water repair, emergency plumber, drain cleaning, sanitary installation, good plumber",

    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.work": "Our Work",
    "nav.references": "References",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    // Hero
    "hero.badge": "🔧 With you 24/7",
    "hero.title1": "Good Plumber",
    "hero.title2": "Fast and",
    "hero.title3": "Reliable",
    "hero.description": "Professional installation and repair of plumbing systems. We solve all plumbing problems quickly and reliably.",
    "hero.benefit1": "Emergency calls: 24/7",
    "hero.benefit2": "Regular work MON-FRI 7:00 - 17:00",
    "hero.benefit3": "Bratislava and surroundings",
    "hero.cta.call": "Call Now",
    "hero.cta.services": "Our Services",
    "hero.image.alt": "Professional plumber Bratislava",

    // Stats
    "stats.clients": "Satisfied Clients",
    "stats.years": "Years of Experience",
    "stats.projects": "Completed Projects",
    "stats.service": "Emergency Service",

    // Services
    "services.label": "Our Services",
    "services.title1": "What we can",
    "services.title2": " do for you",
    "services.description": "Professional installation and repair of plumbing systems with emphasis on quality and customer satisfaction.",
    "services.emergency.title": "Emergency Services",
    "services.emergency.1": "Water leak / burst pipe",
    "services.emergency.2": "Leaking, emergency repairs",
    "services.emergency.3": "Fixing faults on cold and hot water pipes",
    "services.emergency.4": "Solving blockages (sink, basin, WC)",
    "services.regular.title": "Installation & Regular Work",
    "services.regular.hours": "MON-FRI 7:00 - 17:00",
    "services.regular.1": "Siphon replacement",
    "services.regular.2": "Faucet replacement (kitchen/bathroom)",
    "services.regular.3": "WC replacement and installation",
    "services.regular.4": "Valve installation and replacement",
    "services.regular.5": "Sanitary equipment installation",
    "services.regular.6": "Water pipe repair",
    "services.regular.7": "Water pipe installation",
    "services.regular.8": "Sewer pipe replacement in apartments and houses",
    "services.regular.9": "Heating installation (radiators, pipes, connections)",
    "services.pricing.title": "Prices are individual",
    "services.pricing.description": "The exact amount depends on the type of work and condition of the equipment. Contact me by phone or message for an exact price.",

    // Our Work
    "work.label": "Our Work",
    "work.title": "Examples of Our Work",
    "work.description": "See some of our completed projects. Quality and precision in every detail.",
    "work.1": "Shower Installation",
    "work.2": "Shower Cabin",
    "work.3": "Modern Bathroom",
    "work.4": "WC Installation",
    "work.5": "Shower System",
    "work.6": "Double Sink",

    // Testimonials
    "testimonials.label": "References",
    "testimonials.title1": "What our",
    "testimonials.title2": " satisfied customers say",
    "testimonials.description": "Real reviews from our customers on Google.",
    "testimonials.source": "Google review",
    "testimonials.1.name": "Bartolomej Proščák",
    "testimonials.1.content": "Profesionálny prístup, dobrá cena a kvalitná práca. Vymenený celý sprchový kút, sprchový systém, termostatická batéria. Demontáž, montáž, odvoz, dovoz. Všetko v poriadku. Určite ak budeme potrebovať, opätovne sa obrátime na Dobrého vodára. Odporúčame.",
    "testimonials.2.name": "Rene",
    "testimonials.2.content": "Perfektny vodar, super sluzba a profesionalita, od zavolania do hodiny sa dostavil a opravil, a to bolo v sobotu. Doporucujem vsetkym.",
    "testimonials.3.name": "Viktor Bab",
    "testimonials.3.content": "S inštalatérskymi službami som maximálne spokojný. Prerábal mi radiátory a práca bola urobená rýchlo, kvalitne a za veľmi rozumnú cenu. Oceňujem profesionálny prístup, spoľahlivosť a detailné spracovanie. Určite odporúčam každému, kto hľadá kvalitného inštalatéra.",
    "testimonials.4.name": "Yaroslava Svitlyk",
    "testimonials.4.content": "Som veľmi spokojná so službami. Prišiel rýchlo, všetko profesionálne vysvetlil a problém vyriešil za chvíľu. Určite odporúčam.",
    "testimonials.5.name": "Miroslava Š.",
    "testimonials.5.content": "Mali sme dlhodobý problém – vlhla nám stena. Nevedeli sme prísť na to, z čoho to je, tak sme zavolali pána. Do 30 minút bola príčina nájdená a problém vyriešený, a hlavne za adekvátnu cenu. Klobúk dole.",
    "testimonials.6.name": "Richard Tekel",
    "testimonials.6.content": "Spokojnosť. Rýchla reakcia, mal som šťastie na skorý termín a havária v stúpačke bola vyriešená bez problémov. Veľmi dobrý prístup.",

    // Contact
    "contact.label": "Contact Us",
    "contact.title1": "Book your",
    "contact.title2": " appointment today",
    "contact.description": "Having plumbing problems? Contact us and we will help you.",
    "contact.form.title": "Write to Us",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.phone": "Phone number",
    "contact.form.message": "Describe your problem or request...",
    "contact.form.submit": "Send Message",
    "contact.toast.title": "Message sent!",
    "contact.toast.description": "Thank you for your message. We will contact you soon.",
    "contact.validation.name": "Please fill out your name.",
    "contact.validation.email": "Please enter a valid email.",
    "contact.validation.message": "Please write your message.",
    "contact.info.phone": "Phone (WhatsApp)",
    "contact.info.regular": "Regular Work",
    "contact.info.emergency": "Emergency Calls",
    "contact.info.area": "Service Area",
    "contact.info.area.value": "Bratislava and surroundings",

    // FAQ
    "faq.label": "FAQ",
    "faq.title1": "Quick answers to",
    "faq.title2": " your questions",
    "faq.description": "Find answers to the most common questions about our plumbing services.",
    "faq.cta": "Didn't find an answer? Contact us at",
    "faq.1.question": "How quickly can you come?",
    "faq.1.answer": "For regular orders, we arrive within 24-48 hours. In urgent situations, we provide emergency service with arrival within 60 minutes.",
    "faq.2.question": "What services do you offer?",
    "faq.2.answer": "We offer comprehensive plumbing services including water pipe repairs, sanitary equipment installation, drain cleaning, heating repairs and boiler installation.",
    "faq.3.question": "Do you provide warranties on your work?",
    "faq.3.answer": "Yes, we provide a minimum 24-month warranty on all our work. For some types of work, we also offer an extended warranty.",
    "faq.4.question": "How much does your service cost?",
    "faq.4.answer": "Prices depend on the type of work. We always provide a free quote before starting work so you know exactly what to expect. No hidden fees.",
    "faq.5.question": "Do you work on weekends?",
    "faq.5.answer": "Yes, we provide services 7 days a week. For emergency services, we are available 24/7 including holidays.",

    // Footer
    "footer.description": "Good Plumber - with you 24/7. Professional plumbing services for your home. Fast and reliable.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.service.1": "Emergency Services 24/7",
    "footer.service.2": "Sanitary Installation",
    "footer.service.3": "Pipe Repairs",
    "footer.service.4": "Drain Cleaning",
    "footer.service.5": "Heating",
    "footer.service.6": "Drain Cleaning",
    "footer.service.7": "Water Filters",
    "footer.hours": "MON-FRI 7:00 - 17:00",
    "footer.emergency": "Emergency: 24/7",
    "footer.copyright": "All rights reserved.",

    // Siphon Page Specific (EN)
    "siphon.seo.title": "Siphon Replacement Bratislava | Repair & Installation",
    "siphon.seo.description": "Professional siphon replacement for kitchen, bathroom and WC. We fix leaking, bad smell and clogged siphons. Fast service in Bratislava.",
    "siphon.seo.keywords": "siphon replacement, siphon repair, siphon installation, sink siphon, bathtub siphon, leaking siphon, plumber bratislava",
    "siphon.hero.title": "Siphon Replacement & Repair",
    "siphon.hero.subtitle": "Professional solutions for your kitchen and bathroom",
    "siphon.problem.title": "Having trouble with your siphon?",
    "siphon.problem.1": "Leaking water under the sink",
    "siphon.problem.2": "Unpleasant smell from the drain",
    "siphon.problem.3": "Clogged or slow draining siphon",
    "siphon.problem.4": "Old and corroded material",
    "siphon.cta": "Book Replacement",

    // 1. WC Repair
    "wc.seo.title": "WC Repair & Installation Bratislava | Leaking Toilet",
    "wc.seo.description": "Fast repair of leaking WC, flush replacement and new toilet installation in Bratislava. Geberit service. Call now.",
    "wc.seo.keywords": "wc repair bratislava, leaking toilet, toilet replacement, geberit installation, plumber wc",
    "wc.hero.title": "WC Repair & Installation",
    "wc.hero.subtitle": "Stop leaking water and malfunctioning flush",
    "wc.problem.title": "Toilet problems?",
    "wc.problem.1": "WC constantly leaking",
    "wc.problem.2": "Malfunctioning or stuck flush",
    "wc.problem.3": "Replacing old WC with new",
    "wc.problem.4": "Installation and service of concealed systems (Geberit)",
    "wc.cta": "Book WC Repair",

    // 2. Faucets
    "faucet.seo.title": "Faucet Replacement & Installation Bratislava",
    "faucet.seo.description": "Professional installation and replacement of faucets. Repair of dripping taps in kitchen and bathroom.",
    "faucet.seo.keywords": "faucet replacement, tap installation, dripping faucet, faucet installation bratislava",
    "faucet.hero.title": "Faucet Installation & Replacement",
    "faucet.hero.subtitle": "Professional installation for your bathroom and kitchen",
    "faucet.problem.title": "When to replace a faucet?",
    "faucet.problem.1": "Faucet drips or leaks",
    "faucet.problem.2": "Difficult or stuck operation",
    "faucet.problem.3": "Aesthetic replacement with new model",
    "faucet.problem.4": "Weak water flow through faucet",
    "faucet.cta": "Replace Faucet",

    // 3. Pipe Repair
    "pipe.seo.title": "Burst Pipe Repair Bratislava | Water Leak",
    "pipe.seo.description": "Emergency water pipe repair. Localization and elimination of water leaks. Fast service in Bratislava.",
    "pipe.seo.keywords": "pipe repair, burst pipe, water leak bratislava, emergency water service, plumber pipe",
    "pipe.hero.title": "Water Pipe Repair",
    "pipe.hero.subtitle": "Quick response for water leaks and burst pipes",
    "pipe.problem.title": "Water emergency?",
    "pipe.problem.1": "Visible water leak or wet wall",
    "pipe.problem.2": "Sudden drop in water pressure",
    "pipe.problem.3": "Old and rusty pipes",
    "pipe.problem.4": "Burst pipe in wall or floor",
    "pipe.cta": "Report Emergency",

    // 4. Shower Cabins
    "shower.seo.title": "Shower Cabin Installation Bratislava | Sanitary Installation",
    "shower.seo.description": "Professional installation of shower cabins, trays and screens. Silicone sealing. Quality work.",
    "shower.seo.keywords": "shower cabin installation, shower installation, shower tray replacement, shower sealing, plumber bratislava",
    "shower.hero.title": "Shower Cabin Installation",
    "shower.hero.subtitle": "Complete installation and sealing of your new shower",
    "shower.problem.title": "Planning a new shower?",
    "shower.problem.1": "New shower cabin installation",
    "shower.problem.2": "Old tray replacement",
    "shower.problem.3": "Leaking water from shower (resealing)",
    "shower.problem.4": "Shower panel installation",
    "shower.cta": "Book Installation",

    // 5. Appliance Connection
    "appliance.seo.title": "Washing Machine & Dishwasher Connection Bratislava",
    "appliance.seo.description": "Professional connection of washing machines, dishwashers and dryers. Water supply and drain adjustment.",
    "appliance.seo.keywords": "washing machine connection, dishwasher installation, appliance installation, water connection, plumber bratislava",
    "appliance.hero.title": "Appliance Connection",
    "appliance.hero.subtitle": "Professional connection of washing machines and dishwashers",
    "appliance.problem.title": "Bought a new appliance?",
    "appliance.problem.1": "Professional washing machine connection",
    "appliance.problem.2": "Dishwasher installation",
    "appliance.problem.3": "Water supply and drain adjustment",
    "appliance.problem.4": "Valve replacement for appliances",
    "appliance.cta": "Book Connection",

    // 6. Corner Valves
    "valve.seo.title": "Corner Valve Replacement Bratislava | Valve Repair",
    "valve.seo.description": "Replacement of non-functional and old corner valves under sink, by WC or washing machine. Prevent flooding.",
    "valve.seo.keywords": "corner valve replacement, valve repair, non-functional valve, plumbing valve, safety valve",
    "valve.hero.title": "Valve Replacement",
    "valve.hero.subtitle": "Safe replacement of old and non-functional valves",
    "valve.problem.title": "Why replace valves?",
    "valve.problem.1": "Valve cannot be closed or opened",
    "valve.problem.2": "Visible corrosion or dripping",
    "valve.problem.3": "Preventive replacement of old valves",
    "valve.problem.4": "Installation of new combined valves",
    "valve.cta": "Replace Valves",

    // 7. Sanitary Installation
    "sanitary.seo.title": "Sanitary Installation Bratislava | Sinks, Bathtubs, Bidets",
    "sanitary.seo.description": "Complete sanitary installation for bathroom and kitchen. Sink, bathtub, bidet and kitchen sink installation.",
    "sanitary.seo.keywords": "sanitary installation, sink installation, bathtub installation, kitchen sink, bathroom renovation",
    "sanitary.hero.title": "Sanitary Installation",
    "sanitary.hero.subtitle": "Precise installation of sinks, bathtubs and drains",
    "sanitary.problem.title": "Furnishing a bathroom?",
    "sanitary.problem.1": "Sink and cabinet installation",
    "sanitary.problem.2": "Bathtub installation and sealing",
    "sanitary.problem.3": "Kitchen sink installation",
    "sanitary.problem.4": "Bidet and accessory installation",
    "sanitary.cta": "Schedule Appointment",

    // 8. Radiators (Heating)
    "heating.seo.title": "Radiator Repair & Replacement Bratislava | Heating",
    "heating.seo.description": "Installation, replacement and repair of radiators. Fixing leaking valves and system venting. Heating work.",
    "heating.seo.keywords": "radiator replacement, heating repair, leaking radiator, radiator installation, heating bratislava",
    "heating.hero.title": "Radiator Repair & Replacement",
    "heating.hero.subtitle": "Keeping your home warm always",
    "heating.problem.title": "Heating problems?",
    "heating.problem.1": "Replacing old radiator with new",
    "heating.problem.2": "Leaking valve repair",
    "heating.problem.3": "Radiator only partially heating",
    "heating.problem.4": "Radiator relocation during renovation",
    "heating.cta": "Call Heating Specialist",

    // 9. Boilers
    "boiler.seo.title": "Boiler Installation & Replacement Bratislava | Service",
    "boiler.seo.description": "Professional electric boiler replacement. Water and electric connection, commissioning. Old boiler removal.",
    "boiler.seo.keywords": "boiler replacement, boiler installation, electric boiler, water heater connection, boiler service",
    "boiler.hero.title": "Boiler Installation & Replacement",
    "boiler.hero.subtitle": "We'll ensure hot water quickly and safely",
    "boiler.problem.title": "Need a new boiler?",
    "boiler.problem.1": "Boiler leaking or not heating water",
    "boiler.problem.2": "Replacing old boiler with energy-efficient",
    "boiler.problem.3": "New water heater installation",
    "boiler.problem.4": "Safety valve inspection",
    "boiler.cta": "Replace Boiler",

    // 10. Pipe Renovation
    "pipes.seo.title": "Water Pipe Replacement Bratislava | Apartment Renovation",
    "pipes.seo.description": "Complete replacement of water and drainage pipes in apartments and houses. Riser and installation renovation.",
    "pipes.seo.keywords": "water pipe replacement, water renovation, new pipes, plumbing work, water drainage gas",
    "pipes.hero.title": "Water Pipe Replacement",
    "pipes.hero.subtitle": "Complete plumbing renovation",
    "pipes.problem.title": "Planning a renovation?",
    "pipes.problem.1": "Replacing old galvanized pipes",
    "pipes.problem.2": "New water and drainage in bathroom",
    "pipes.problem.3": "Kitchen renovation",
    "pipes.problem.4": "Complete installation for new construction",
    "pipes.cta": "Get Renovation Quote",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sk");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

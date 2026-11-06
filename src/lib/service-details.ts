export type ServiceDetailKey = "boiler" | "wc" | "faucet" | "siphon" | "pipes" | "shower";

export const serviceDetails: Record<ServiceDetailKey, { price: string; points: string[] }> = {
  boiler: { price: "Cena podľa typu bojlera a rozsahu práce", points: ["kontrola prípojok", "dohodnutie materiálu", "odskúšanie po montáži"] },
  wc: { price: "od 50 €", points: ["diagnostika poruchy", "výmena napúšťacieho alebo vypúšťacieho ventilu", "kontrola tesnosti"] },
  faucet: { price: "od 50 €", points: ["demontáž starej batérie", "montáž novej batérie", "kontrola spojov a tesnosti"] },
  siphon: { price: "od 40 €", points: ["demontáž sifónu", "čistenie napojenia", "kontrola odtoku a zápachu"] },
  pipes: { price: "od 15 €/bm", points: ["zameranie trasy", "montáž vodovodných alebo odpadových rozvodov", "tlaková a funkčná skúška"] },
  shower: { price: "od 150 €", points: ["osadenie sprchového kúta", "vyrovnanie a utesnenie", "kontrola odtoku a tesnosti"] },
};

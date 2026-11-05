export type PortfolioWork = {
  id: string;
  image: string;
  href: string;
  titleKey: string;
};

export const portfolioWorks: readonly PortfolioWork[] = [
  { id: "installed-kitchen-faucet", image: "/images/portfolio/installed-kitchen-faucet.webp", href: "/montaz-baterie", titleKey: "work.portfolio.kitchenFaucet" },
  { id: "installed-basin-faucet", image: "/images/portfolio/installed-basin-faucet.webp", href: "/montaz-baterie", titleKey: "work.portfolio.basinFaucet" },
  { id: "pullout-kitchen-faucet", image: "/images/portfolio/pullout-kitchen-faucet.webp", href: "/montaz-baterie", titleKey: "work.portfolio.pulloutFaucet" },
  { id: "bath-mixer-installation", image: "/images/portfolio/bath-mixer-installation.webp", href: "/montaz-baterie", titleKey: "work.portfolio.bathMixer" },
  { id: "shower-drain-installation", image: "/images/portfolio/shower-drain-installation.webp", href: "/montaz-sprchy", titleKey: "work.portfolio.showerDrain" },
  { id: "shower-enclosure", image: "/images/portfolio/shower-enclosure.webp", href: "/montaz-sprchy", titleKey: "work.portfolio.showerEnclosure" },
  { id: "bathtub-shower-mixer", image: "/images/portfolio/bathtub-shower-mixer.webp", href: "/montaz-sprchy", titleKey: "work.portfolio.bathtubShowerMixer" },
  { id: "radiator-valve", image: "/images/portfolio/radiator-valve.webp", href: "/oprava-kurenia", titleKey: "work.portfolio.radiatorValve" },
  { id: "radiator-pipework", image: "/images/portfolio/radiator-pipework.webp", href: "/oprava-kurenia", titleKey: "work.portfolio.radiatorPipework" },
  { id: "concealed-pipes-rough-in", image: "/images/portfolio/concealed-pipes-rough-in.webp", href: "/vymena-rozvodov", titleKey: "work.portfolio.concealedPipes" },
  { id: "bathroom-pipework", image: "/images/portfolio/bathroom-pipework.webp", href: "/vymena-rozvodov", titleKey: "work.portfolio.bathroomPipework" },
  { id: "pipe-replacement", image: "/images/portfolio/pipe-replacement.webp", href: "/oprava-potrubia", titleKey: "work.portfolio.pipeReplacement" },
  { id: "wc-installation-frame", image: "/images/portfolio/wc-installation-frame.webp", href: "/oprava-wc", titleKey: "work.portfolio.wcFrame" },
  { id: "water-filtration-installation", image: "/images/portfolio/water-filtration-installation.webp", href: "/filtre-na-vodu", titleKey: "work.portfolio.waterFilter" },
  { id: "bathtub-installation", image: "/images/portfolio/bathtub-installation.webp", href: "/montaz-sanity", titleKey: "work.portfolio.bathtubInstallation" },
  { id: "bathtub-detail", image: "/images/portfolio/bathtub-detail.webp", href: "/montaz-sanity", titleKey: "work.portfolio.bathtubDetail" },
];

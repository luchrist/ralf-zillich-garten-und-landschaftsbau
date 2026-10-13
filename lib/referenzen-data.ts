export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "garten-rasenflaeche",
    title: "Garten mit geschwungener Rasenfläche",
    ort: "Obrigheim (Pfalz)",
    leistung: "Gartenneugestaltung",
    text: "Neue Rasenfläche mit geschwungener Kante, umlaufende Beete mit Rindenmulch und eine junge Heckenpflanzung entlang des Doppelstabmattenzauns. In der Ecke liegt ein Sitzplatz auf dunklem Splitt, vorne sind Stauden und Gräser gepflanzt.",
    afterImage: "/assets/acquisition/projekte/gepflegter-garten-mit-rasenflache-01.jpg",
    alt: "Garten mit geschwungener Rasenfläche, gemulchten Beeten, junger Hecke und Sitzplatz auf Splitt"
  },
  {
    id: "doppelstabmattenzaun",
    title: "Doppelstabmattenzaun mit Sichtschutz",
    ort: "Obrigheim (Pfalz)",
    leistung: "Zaun & Sichtschutz",
    text: "Doppelstabmattenzaun in Anthrazit entlang des Gehwegs, im oberen Feld mit eingeflochtenen Sichtschutzstreifen. Unten bleibt der Zaun offen, so kommt weiter Licht an die Bepflanzung dahinter.",
    afterImage: "/assets/acquisition/projekte/moderner-gartenzaun-mit-sichtschutz-01.jpg",
    alt: "Anthrazitfarbener Doppelstabmattenzaun mit grauen Sichtschutzstreifen an einem gepflasterten Gehweg"
  },
  {
    id: "hangbeet",
    title: "Bepflanztes Hangbeet",
    ort: "Obrigheim (Pfalz)",
    leistung: "Gartenneugestaltung",
    text: "Ein Beet am Hang mit Stauden, Gräsern, Lavendel und Bodendeckern, gegliedert durch einzelne Natursteine. Die Pflanzung ist nach Höhe gestaffelt: Bodendecker vorn, Gräser und Sträucher dahinter.",
    afterImage: "/assets/acquisition/details/vielfaltige-gartenbepflanzung-01.jpg",
    alt: "Hangbeet mit Stauden, Gräsern, Lavendel, Bodendeckern und Natursteinen"
  }
];

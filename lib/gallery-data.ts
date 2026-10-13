export interface GalleryItem {
  src: string;
  alt: string;
}

// Nur Fotos, die weder als Leistungsbild (lib/galabau.ts) noch als Referenz
// (lib/referenzen-data.ts) laufen. Die Galerie filtert Dubletten ohnehin heraus
// und blendet sich aus, sobald weniger als drei eigene Bilder uebrig bleiben.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/baustellen/verlegen-von-pflastersteinen-01.jpg",
    alt: "Mitarbeiter verlegt Pflaster im Mehrformat-Verband und prüft die Ebenheit mit der Wasserwaage"
  }
];

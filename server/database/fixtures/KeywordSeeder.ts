import AbstractSeeder from "./AbstractSeeder";

class KeywordSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "keyword", truncate: true });
  }

  run() {
    const keywords = [
      { name: "Terroir" },
      { name: "Intimiste" },
      { name: "Authentique" },
      { name: "Immersion totale" },
      { name: "Concept unique" },
      { name: "Insolite" },
      { name: "Festif" },
      { name: "Elegant" },
      { name: "Moderne" },
      { name: "Convivial" },
      { name: "Décontracté" },
      { name: "Naturel" },
      { name: "Sensationnel" },
      { name: "Raffiné" },
      { name: "Contemplatif" },
      { name: "Exotique" },
      { name: "Familial" },
      { name: "Traditionnel" },
      { name: "Accueillant" },
      { name: "Prestigieux" },
      { name: "Exclusif" },
      { name: "Chaleureux" },
      { name: "Dynamique" },
      { name: "Centre-ville" },
      { name: "Vignobles" },
      { name: "Design visionnaire" },
      { name: "Contemporain" },
      { name: "Romantique" },
      { name: "Champêtre" },
      { name: "Loft moderne" },
      { name: "Original" },
      { name: "Artistique" },
      { name: "Bord de l'eau" },
      { name: "Atypique" },
      { name: "Luxueux" },
      { name: "Ludique" },
      { name: "Aventure" },
      { name: "Compétitif" },
      { name: "Sensoriel" },
      { name: "Expérientiel" },
      { name: "Créatif" },
      { name: "Technologique" },
      { name: "Relaxant" },
      { name: "Intéractif" },
      { name: "Culturel" },
      { name: "Gastronomique" },
      { name: "Educatif" },
    ];

    for (let i = 0; i < keywords.length; i++) {
      this.insert(keywords[i]);
    }
  }
}

export default KeywordSeeder;

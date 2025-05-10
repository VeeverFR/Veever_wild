import database, { type Rows } from "../client";
import AbstractSeeder from "./AbstractSeeder";
import ChrSeeder from "./ChrSeeder";
import KeywordSeeder from "./KeywordSeeder";

class ChrKeywordSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "chr_keyword",
      truncate: true,
      dependencies: [ChrSeeder, KeywordSeeder],
    });
  }

  async run() {
    const chrKeywords = [
      {
        chr_name: "Spa Vinotherapie LES SOURCES DE CAUDALIE",
        keyword_name: "Naturel",
      },
      {
        chr_name: "Spa Vinotherapie LES SOURCES DE CAUDALIE",
        keyword_name: "Relaxant",
      },
      {
        chr_name: "Spa Vinotherapie LES SOURCES DE CAUDALIE",
        keyword_name: "Luxueux",
      },
      {
        chr_name: "Ivazio Island - Prison Island",
        keyword_name: "Ludique",
      },
      {
        chr_name: "Ivazio Island - Prison Island",
        keyword_name: "Aventure",
      },
      {
        chr_name: "Ivazio Island - Prison Island",
        keyword_name: "Compétitif",
      },
      {
        chr_name:
          "A la Française! - Dégustation de vins en petit groupe dans le Médoc ou à Saint-Émilion et visite des châteaux au départ de Bordeaux",
        keyword_name: "Terroir",
      },
      {
        chr_name:
          "A la Française! - Dégustation de vins en petit groupe dans le Médoc ou à Saint-Émilion et visite des châteaux au départ de Bordeaux",
        keyword_name: "Convivial",
      },
      {
        chr_name:
          "A la Française! - Dégustation de vins en petit groupe dans le Médoc ou à Saint-Émilion et visite des châteaux au départ de Bordeaux",
        keyword_name: "Gastronomique",
      },
      {
        chr_name:
          "A la Française! - Excursion d'une demi-journée à Arcachon au départ de Bordeaux incluant la dune du Pyla et une dégustation d'huîtres",
        keyword_name: "Terroir",
      },
      {
        chr_name:
          "A la Française! - Excursion d'une demi-journée à Arcachon au départ de Bordeaux incluant la dune du Pyla et une dégustation d'huîtres",
        keyword_name: "Naturel",
      },
      {
        chr_name:
          "A la Française! - Excursion d'une demi-journée à Arcachon au départ de Bordeaux incluant la dune du Pyla et une dégustation d'huîtres",
        keyword_name: "Gastronomique",
      },
      {
        chr_name:
          "Bordeaux in Bites - Visite gastronomique et viticole de la vieille ville de Bordeaux",
        keyword_name: "Culturel",
      },
      {
        chr_name:
          "Bordeaux in Bites - Visite gastronomique et viticole de la vieille ville de Bordeaux",
        keyword_name: "Convivial",
      },
      {
        chr_name:
          "Bordeaux in Bites - Visite gastronomique et viticole de la vieille ville de Bordeaux",
        keyword_name: "Gastronomique",
      },
      { chr_name: "Virtual Room", keyword_name: "Ludique" },
      { chr_name: "Virtual Room", keyword_name: "Immersion totale" },
      { chr_name: "Virtual Room", keyword_name: "Technologique" },
      { chr_name: "Sensas Bordeaux", keyword_name: "Ludique" },
      { chr_name: "Sensas Bordeaux", keyword_name: "Sensoriel" },
      { chr_name: "Sensas Bordeaux", keyword_name: "Intéractif" },
      { chr_name: "Wine Beer SPA", keyword_name: "Relaxant" },
      { chr_name: "Wine Beer SPA", keyword_name: "Insolite" },
      { chr_name: "Wine Beer SPA", keyword_name: "Convivial" },
      { chr_name: "Color Room", keyword_name: "Artistique" },
      { chr_name: "Color Room", keyword_name: "Immersion totale" },
      { chr_name: "Color Room", keyword_name: "Créatif" },
      { chr_name: "Rush Action Game", keyword_name: "Aventure" },
      { chr_name: "Rush Action Game", keyword_name: "Ludique" },
      { chr_name: "Rush Action Game", keyword_name: "Compétitif" },
      { chr_name: "Sim Aviation", keyword_name: "Educatif" },
      { chr_name: "Sim Aviation", keyword_name: "Immersion totale" },
      { chr_name: "Sim Aviation", keyword_name: "Technologique" },
      { chr_name: "Sim Factory", keyword_name: "Ludique" },
      { chr_name: "Sim Factory", keyword_name: "Immersion totale" },
      { chr_name: "Sim Factory", keyword_name: "Compétitif" },
      {
        chr_name:
          "Artisante bijoutière - Réalisez vos alliances sur-mesure en duo",
        keyword_name: "Artistique",
      },
      {
        chr_name:
          "Artisante bijoutière - Réalisez vos alliances sur-mesure en duo",
        keyword_name: "Romantique",
      },
      {
        chr_name:
          "Artisante bijoutière - Réalisez vos alliances sur-mesure en duo",
        keyword_name: "Créatif",
      },
      {
        chr_name: "Composition végétale - Réalisez votre kokedama",
        keyword_name: "Artistique",
      },
      {
        chr_name: "Composition végétale - Réalisez votre kokedama",
        keyword_name: "Naturel",
      },
      {
        chr_name: "Composition végétale - Réalisez votre kokedama",
        keyword_name: "Créatif",
      },
      {
        chr_name: "Atelier Signature Olfactive - Assemblez votre parfum",
        keyword_name: "Artistique",
      },
      {
        chr_name: "Atelier Signature Olfactive - Assemblez votre parfum",
        keyword_name: "Sensoriel",
      },
      {
        chr_name: "Atelier Signature Olfactive - Assemblez votre parfum",
        keyword_name: "Expérientiel",
      },
      { chr_name: "Face à Face", keyword_name: "Ludique" },
      { chr_name: "Face à Face", keyword_name: "Aventure" },
      { chr_name: "Face à Face", keyword_name: "Compétitif" },
      {
        chr_name: "Château Lanessan - Visite-dégustation",
        keyword_name: "Terroir",
      },
      {
        chr_name: "Château Lanessan - Visite-dégustation",
        keyword_name: "Authentique",
      },
      {
        chr_name: "Château Lanessan - Visite-dégustation",
        keyword_name: "Culturel",
      },
      { chr_name: "Villa Victor Louis", keyword_name: "Centre-ville" },
      { chr_name: "Villa Victor Louis", keyword_name: "Elégant" },
      { chr_name: "Villa Victor Louis", keyword_name: "Intimiste" },
      {
        chr_name: "Best Western Premier Hotel des Vignes et des Anges",
        keyword_name: "Vignobles",
      },
      {
        chr_name: "Best Western Premier Hotel des Vignes et des Anges",
        keyword_name: "Authentique",
      },
      {
        chr_name: "Best Western Premier Hotel des Vignes et des Anges",
        keyword_name: "Chaleureux",
      },
      {
        chr_name: "Mondrian Bordeaux Les Carmes",
        keyword_name: "Centre-ville",
      },
      {
        chr_name: "Mondrian Bordeaux Les Carmes",
        keyword_name: "Design visionnaire",
      },
      { chr_name: "Mondrian Bordeaux Les Carmes", keyword_name: "Raffiné" },
      { chr_name: "Le 50 Suite & SPA", keyword_name: "Centre-ville" },
      { chr_name: "Le 50 Suite & SPA", keyword_name: "Moderne" },
      { chr_name: "Le 50 Suite & SPA", keyword_name: "Intimiste" },
      { chr_name: "Omira", keyword_name: "Centre-ville" },
      { chr_name: "Omira", keyword_name: "Contemporain" },
      { chr_name: "Omira", keyword_name: "Intimiste" },
      { chr_name: "Les secrets de Marie-Astrid", keyword_name: "Centre-ville" },
      { chr_name: "Les secrets de Marie-Astrid", keyword_name: "Elégant" },
      { chr_name: "Les secrets de Marie-Astrid", keyword_name: "Romantique" },
      {
        chr_name: "Villa 4* à l'esprit loft, contemporain et design",
        keyword_name: "Champêtre",
      },
      {
        chr_name: "Villa 4* à l'esprit loft, contemporain et design",
        keyword_name: "Loft moderne",
      },
      {
        chr_name: "Villa 4* à l'esprit loft, contemporain et design",
        keyword_name: "Raffiné",
      },
      { chr_name: "La Villa Du Bourg", keyword_name: "Centre-ville" },
      { chr_name: "La Villa Du Bourg", keyword_name: "Original" },
      { chr_name: "La Villa Du Bourg", keyword_name: "Artistique" },
      {
        chr_name: "Maison de charme au cœur des vignobles bordelais",
        keyword_name: "Vignobles",
      },
      {
        chr_name: "Maison de charme au cœur des vignobles bordelais",
        keyword_name: "Authentique",
      },
      {
        chr_name: "Maison de charme au cœur des vignobles bordelais",
        keyword_name: "Chaleureux",
      },
      { chr_name: "Domaine Baruteau", keyword_name: "Vignobles" },
      { chr_name: "Domaine Baruteau", keyword_name: "Authentique" },
      { chr_name: "Domaine Baruteau", keyword_name: "Convivial" },
      { chr_name: "La Charmeuse", keyword_name: "Bord de l'eau" },
      { chr_name: "La Charmeuse", keyword_name: "Raffiné" },
      { chr_name: "La Charmeuse", keyword_name: "Chaleureux" },
      {
        chr_name: "Maison flottante - Maisonboat - Baurech Insolite",
        keyword_name: "Bord de l'eau",
      },
      {
        chr_name: "Maison flottante - Maisonboat - Baurech Insolite",
        keyword_name: "Atypique",
      },
      { chr_name: "Hotel Source de Caudalie", keyword_name: "Vignobles" },
      { chr_name: "Hotel Source de Caudalie", keyword_name: "Champêtre" },
      { chr_name: "Hotel Source de Caudalie", keyword_name: "Luxueux" },
      { chr_name: "Le Saint Julien", keyword_name: "Terroir" },
      { chr_name: "Le Saint Julien", keyword_name: "Intimiste" },
      { chr_name: "Le Saint Julien", keyword_name: "Authentique" },
      { chr_name: "Dans le Noir", keyword_name: "Immersion totale" },
      { chr_name: "Dans le Noir", keyword_name: "Concept unique" },
      { chr_name: "Dans le Noir", keyword_name: "Insolite" },
      { chr_name: "Le K Baroque", keyword_name: "Festif" },
      { chr_name: "Le K Baroque", keyword_name: "Concept unique" },
      { chr_name: "Le K Baroque", keyword_name: "Immersion totale" },
      { chr_name: "Son", keyword_name: "Elégant" },
      { chr_name: "Son", keyword_name: "Moderne" },
      { chr_name: "Son", keyword_name: "Convivial" },
      { chr_name: "L'Avenue Carnot", keyword_name: "Elégant" },
      { chr_name: "L'Avenue Carnot", keyword_name: "Décontracté" },
      { chr_name: "L'Avenue Carnot", keyword_name: "Naturel" },
      { chr_name: "Le 7", keyword_name: "Sensationnel" },
      { chr_name: "Le 7", keyword_name: "Raffiné" },
      { chr_name: "Le 7", keyword_name: "Contemplatif" },
      { chr_name: "Le Confidentiel", keyword_name: "Moderne" },
      { chr_name: "Le Confidentiel", keyword_name: "Intimiste" },
      { chr_name: "Le Confidentiel", keyword_name: "Elégant" },
      { chr_name: "Terre d'Émeraude", keyword_name: "Exotique" },
      { chr_name: "Terre d'Émeraude", keyword_name: "Familial" },
      { chr_name: "Terre d'Émeraude", keyword_name: "Convivial" },
      { chr_name: "Le Riad Marrakech", keyword_name: "Authentique" },
      { chr_name: "Le Riad Marrakech", keyword_name: "Familial" },
      { chr_name: "Le Riad Marrakech", keyword_name: "Convivial" },
      { chr_name: "Le Dragon Doré", keyword_name: "Traditionnel" },
      { chr_name: "Le Dragon Doré", keyword_name: "Décontracté" },
      { chr_name: "Le Dragon Doré", keyword_name: "Accueillant" },
      { chr_name: "Okra", keyword_name: "Exotique" },
      { chr_name: "Okra", keyword_name: "Festif" },
      { chr_name: "Okra", keyword_name: "Décontracté" },
      { chr_name: "La Ferme du Petit Argelas", keyword_name: "Terroir" },
      { chr_name: "La Ferme du Petit Argelas", keyword_name: "Concept unique" },
      { chr_name: "La Ferme du Petit Argelas", keyword_name: "Traditionnel" },
      { chr_name: "Les Récoltants", keyword_name: "Terroir" },
      { chr_name: "Les Récoltants", keyword_name: "Décontracté" },
      { chr_name: "Les Récoltants", keyword_name: "Authentique" },
      { chr_name: "Maison Nouvelle", keyword_name: "Raffiné" },
      { chr_name: "Maison Nouvelle", keyword_name: "Prestigieux" },
      { chr_name: "Maison Nouvelle", keyword_name: "Elégant" },
      { chr_name: "Table du Lavoir", keyword_name: "Terroir" },
      { chr_name: "Table du Lavoir", keyword_name: "Naturel" },
      { chr_name: "Table du Lavoir", keyword_name: "Authentique" },
      { chr_name: "La Grand'Vigne", keyword_name: "Elégant" },
      { chr_name: "La Grand'Vigne", keyword_name: "Prestigieux" },
      { chr_name: "La Grand'Vigne", keyword_name: "Exclusif" },
      { chr_name: "Matsa Caffè", keyword_name: "Familial" },
      { chr_name: "Matsa Caffè", keyword_name: "Convivial" },
      { chr_name: "Matsa Caffè", keyword_name: "Chaleureux" },
      { chr_name: "Kalimera", keyword_name: "Festif" },
      { chr_name: "Kalimera", keyword_name: "Décontracté" },
      { chr_name: "Kalimera", keyword_name: "Dynamique" },
      { chr_name: "La Table du Décanteur", keyword_name: "Elégant" },
      { chr_name: "La Table du Décanteur", keyword_name: "Intimiste" },
      { chr_name: "La Table du Décanteur", keyword_name: "Chaleureux" },
    ];

    for (const chrKeyword of chrKeywords) {
      const [chrRows] = await database.query<Rows>(
        `
        SELECT
          id
        FROM
          chr
        WHERE
          name = ?
        `,
        [chrKeyword.chr_name],
      );

      const [keywordRows] = await database.query<Rows>(
        `
        SELECT
          id
        FROM
          keyword
        WHERE
          name = ?
        `,
        [chrKeyword.keyword_name],
      );

      if (chrRows.length > 0 && keywordRows.length > 0) {
        const chrKeywordData = {
          chr_id: chrRows[0].id,
          keyword_id: keywordRows[0].id,
        };

        this.insert(chrKeywordData);
      } else {
        console.error(
          `⚠️ CHR non trouvé : ${chrKeyword.chr_name} ou Keyword non trouvé : ${chrKeyword.keyword_name}`,
        );
      }
    }
  }
}

export default ChrKeywordSeeder;

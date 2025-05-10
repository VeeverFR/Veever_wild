import database, { type Rows } from "../client";
import AbstractSeeder from "./AbstractSeeder";
import ChrSeeder from "./ChrSeeder";

class ActivitySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "activity", truncate: true, dependencies: [ChrSeeder] });
  }

  async run() {
    const activities = [
      { chr_name: "Spa Vinotherapie LES SOURCES DE CAUDALIE", duration: 60 },
      { chr_name: "Ivazio Island - Prison Island", duration: 60 },
      {
        chr_name:
          "A la Française! - Dégustation de vins en petit groupe dans le Médoc ou à Saint-Émilion et visite des châteaux au départ de Bordeaux",
        duration: 270,
      },
      {
        chr_name:
          "A la Française! - Excursion d'une demi-journée à Arcachon au départ de Bordeaux incluant la dune du Pyla et une dégustation d'huîtres",
        duration: 390,
      },
      {
        chr_name:
          "Bordeaux in Bites - Visite gastronomique et viticole de la vieille ville de Bordeaux",
        duration: 180,
      },
      { chr_name: "Virtual Room", duration: 60 },
      { chr_name: "Sensas Bordeaux", duration: 120 },
      { chr_name: "Wine Beer SPA", duration: 60 },
      { chr_name: "Color Room", duration: 60 },
      { chr_name: "Rush Action Game", duration: 60 },
      { chr_name: "Sim Aviation", duration: 60 },
      { chr_name: "Sim Factory", duration: 15 },
      {
        chr_name:
          "Artisante bijoutière - Réalisez vos alliances sur-mesure en duo",
        duration: 90,
      },
      {
        chr_name: "Composition végétale - Réalisez votre kokedama",
        duration: 120,
      },
      {
        chr_name: "Atelier Signature Olfactive - Assemblez votre parfum",
        duration: 150,
      },
      { chr_name: "Face à Face", duration: 60 },
      { chr_name: "Château Lanessan - Visite-dégustation", duration: 90 },
    ];

    for (const activity of activities) {
      const [rows] = await database.query<Rows>(
        `
        SELECT
          id
        FROM
          chr
        WHERE
          name = ?
        `,
        [activity.chr_name],
      );

      if (rows.length > 0) {
        const activityData = {
          chr_id: rows[0].id,
          duration: activity.duration,
        };

        this.insert(activityData);
      } else {
        console.error(`⚠️ CHR non trouvé : ${activity.chr_name}`);
      }
    }
  }
}

export default ActivitySeeder;

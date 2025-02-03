import database, { type Rows } from "../client";
import AbstractSeeder from "./AbstractSeeder";
import ChrSeeder from "./ChrSeeder";

class HotelSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "hotel", truncate: true, dependencies: [ChrSeeder] });
  }

  async run() {
    const hotels = [
      { chr_name: "Villa Victor Louis", type: "Chambres d'hôtes" },
      {
        chr_name: "Best Western Premier Hotel des Vignes et des Anges",
        type: "Hôtel 4 étoiles",
      },
      { chr_name: "Mondrian Bordeaux Les Carmes", type: "Hôtel 5 étoiles" },
      { chr_name: "Le 50 Suite & SPA", type: "Appartement" },
      { chr_name: "Omira", type: "Appartement" },
      { chr_name: "Les secrets de Marie-Astrid", type: "Appartement" },
      {
        chr_name: "Villa 4* à l'esprit loft, contemporain et design",
        type: "Appartement",
      },
      { chr_name: "La Villa Du Bourg", type: "Villa" },
      {
        chr_name: "Maison de charme au cœur des vignobles bordelais",
        type: "Maison d'hôtes",
      },
      { chr_name: "Domaine Baruteau", type: "Maison d'hôtes" },
      { chr_name: "La Charmeuse", type: "Villa" },
      {
        chr_name: "Maison flottante - Maisonboat - Baurech Insolite",
        type: "Gîtes",
      },
      { chr_name: "Hotel Source de Caudalie", type: "Hôtel 5 étoiles" },
    ];

    for (const hotel of hotels) {
      const [rows] = await database.query<Rows>(
        `
        SELECT
          id
        FROM
          chr
        WHERE
          name = ?
        `,
        [hotel.chr_name],
      );

      if (rows.length > 0) {
        const hotelData = {
          chr_id: rows[0].id,
          type: hotel.type,
        };

        this.insert(hotelData);
      } else {
        console.error(`⚠️ CHR non trouvé : ${hotel.chr_name}`);
      }
    }
  }
}

export default HotelSeeder;

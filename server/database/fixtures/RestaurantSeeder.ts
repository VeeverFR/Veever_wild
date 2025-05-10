import database, { type Rows } from "../client";
import AbstractSeeder from "./AbstractSeeder";
import ChrSeeder from "./ChrSeeder";

class RestaurantSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "restaurant", truncate: true, dependencies: [ChrSeeder] });
  }

  async run() {
    const restaurants = [
      { chr_name: "Le Saint Julien", type: "Cuisine française" },
      { chr_name: "Dans le Noir", type: "Cuisine française" },
      { chr_name: "Le K Baroque", type: "Cuisine française" },
      { chr_name: "Son", type: "Cuisine fusion asiatique & française" },
      { chr_name: "L'Avenue Carnot", type: "Cuisine française" },
      { chr_name: "Le 7", type: "Cuisine française" },
      { chr_name: "Le Confidentiel", type: "Cuisine française" },
      { chr_name: "Terre d'Émeraude", type: "Cuisine colombienne" },
      { chr_name: "Le Riad Marrakech", type: "Cuisine marocaine" },
      { chr_name: "Le Dragon Doré", type: "Cuisine asiatique" },
      { chr_name: "Okra", type: "Cuisine afro-fusion" },
      { chr_name: "La Ferme du Petit Argelas", type: "Cuisine française" },
      { chr_name: "Les Récoltants", type: "Cuisine française" },
      { chr_name: "Maison Nouvelle", type: "Cuisine gastronomique" },
      { chr_name: "Table du Lavoir", type: "Cuisine bistronomique" },
      { chr_name: "La Grand'Vigne", type: "Cuisine gastronomique" },
      { chr_name: "Matsa Caffè", type: "Cuisine vegetarienne " },
      { chr_name: "Monkey Mood", type: "Cuisine vegetarienne " },
      { chr_name: "Kalimera", type: "Cuisine grecque" },
      { chr_name: "La Table du Décanteur", type: "Cuisine bistronomique" },
    ];

    for (const restaurant of restaurants) {
      const [rows] = await database.query<Rows>(
        `
        SELECT
          id
        FROM
          chr
        WHERE
          name = ?
        `,
        [restaurant.chr_name],
      );

      if (rows.length > 0) {
        const restaurantData = {
          chr_id: rows[0].id,
          type: restaurant.type,
        };

        this.insert(restaurantData);
      } else {
        console.error(`⚠️ CHR non trouvé : ${restaurant.chr_name}`);
      }
    }
  }
}

export default RestaurantSeeder;

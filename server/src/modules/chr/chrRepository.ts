import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class ChrRepository {
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT
        chr.id,
        chr.name,
        chr.address,
        chr.description,
        chr.average_budget,
        CASE
        WHEN MAX(activity.duration) IS NOT NULL THEN 'activity'
          WHEN MAX(hotel.type) IS NOT NULL THEN 'hotel'
          WHEN MAX(restaurant.type) IS NOT NULL THEN 'restaurant'
        END AS type,
        CASE 
          WHEN MAX(activity.duration) IS NOT NULL THEN CONCAT(MAX(activity.duration))
          WHEN MAX(hotel.type) IS NOT NULL THEN CONCAT(MAX(hotel.type))
          WHEN MAX(restaurant.type) IS NOT NULL THEN CONCAT(MAX(restaurant.type))
        END AS additional_info,
        COALESCE(
          JSON_ARRAYAGG(
            JSON_OBJECT('id', illustration.id, 'link', illustration.link)
          ),
          JSON_ARRAY()
        ) AS images
      FROM chr
      INNER JOIN illustration_chr ON chr.id = illustration_chr.chr_id
      INNER JOIN illustration ON illustration_chr.illustration_id = illustration.id
      LEFT JOIN activity ON activity.chr_id = chr.id
      LEFT JOIN hotel ON hotel.chr_id = chr.id
      LEFT JOIN restaurant ON restaurant.chr_id = chr.id
      WHERE chr.id = ?
      GROUP BY chr.id, chr.name, chr.address, chr.description, chr.average_budget
      `,
      [id],
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT
        chr.id,
        chr.name,
        chr.address,
        chr.description,
        chr.average_budget,
        CASE
        WHEN MAX(activity.duration) IS NOT NULL THEN 'activity'
          WHEN MAX(hotel.type) IS NOT NULL THEN 'hotel'
          WHEN MAX(restaurant.type) IS NOT NULL THEN 'restaurant'
        END AS type,
        CASE 
          WHEN MAX(activity.duration) IS NOT NULL THEN CONCAT(MAX(activity.duration))
          WHEN MAX(hotel.type) IS NOT NULL THEN CONCAT(MAX(hotel.type))
          WHEN MAX(restaurant.type) IS NOT NULL THEN CONCAT(MAX(restaurant.type))
        END AS additional_info,
        COALESCE(
          JSON_ARRAYAGG(
            JSON_OBJECT('id', illustration.id, 'link', illustration.link)
          ),
          JSON_ARRAY()
        ) AS images
      FROM chr
      INNER JOIN illustration_chr ON chr.id = illustration_chr.chr_id
      INNER JOIN illustration ON illustration_chr.illustration_id = illustration.id
      LEFT JOIN activity ON activity.chr_id = chr.id
      LEFT JOIN hotel ON hotel.chr_id = chr.id
      LEFT JOIN restaurant ON restaurant.chr_id = chr.id
      GROUP BY chr.id, chr.name, chr.address, chr.description, chr.average_budget
      `,
    );

    return rows;
  }
}

export default new ChrRepository();

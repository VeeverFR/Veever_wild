import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Illustration, Keyword } from "../../types/keyword/keywordTypes";

class keywordRepository {
  // The C of CRUD - Create operation
  async create(keywordData: Omit<Keyword & Illustration, "id">) {
    const connection = await databaseClient.getConnection();

    try {
      await connection.beginTransaction();
      const [keywordResult] = await connection.execute<Result>(
        `
        INSERT INTO keyword
        (name)
        VALUES
        (?)
        `,
        [keywordData.name],
      );
      const keywordId = keywordResult.insertId;

      if (!keywordId) {
        throw new Error("Insertion échouée dans la table keyword");
      }

      const [illustrationResult] = await connection.query<Result>(
        `
        INSERT INTO illustration
        (link)
        VALUES
        (?)
        `,
        [keywordData.link],
      );
      const illustrationId = illustrationResult.insertId;

      if (!illustrationId) {
        throw new Error("Insertion échouée dans la table illustration");
      }

      const [keywordIllustration] = await connection.query<Result>(
        `
        INSERT INTO illustration_keyword
        (keyword_id, illustration_id)
        VALUES
        (?, ?)`,
        [keywordId, illustrationId],
      );

      const keywordIllustrationId = keywordIllustration.insertId;

      if (!keywordIllustrationId) {
        throw new Error("Insertion échouée dans la table illustration_keyword");
      }

      await connection.commit();

      return keywordId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
  // The Rs of CRUD - Read operations
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT keyword.id, keyword.name, illu.link
      FROM illustration_keyword as ilKey
      INNER JOIN keyword
      ON keyword.id = ilKey.keyword_id
      INNER JOIN illustration illu
      ON illu.id = ilKey.illustration_id
      `,
    );

    return rows;
  }

  async read(keywordId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT keyword.id, keyword.name, illu.link
      FROM illustration_keyword as ilKey
      INNER JOIN keyword
      ON keyword.id = ilKey.keyword_id
      INNER JOIN illustration illu
      ON illu.id = ilKey.illustration_id
      WHERE keyword.id = ?
      `,
      [keywordId],
    );

    return rows[0];
  }
  // The U of CRUD - Update operations
  async update(keywordData: Keyword & Illustration) {
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();

      const [keywordResult] = await connection.execute<Result>(
        `
        UPDATE keyword
        SET name = ?
        WHERE id = ?
        `,
        [keywordData.name, keywordData.id],
      );

      const [illustrationResult] = await connection.execute<Result>(
        `
        UPDATE illustration
        SET link = ?
        WHERE id = (
          SELECT illustration_id
          FROM illustration_keyword
          WHERE keyword_id = ?
        )
        `,
        [keywordData.link, keywordData.id],
      );

      const updatedKeyword = keywordResult.affectedRows > 0;
      const updatedIllustration = illustrationResult.affectedRows > 0;

      if (!updatedKeyword || !updatedIllustration) {
        throw new Error(
          `Modification partielle détectée: ${!updatedKeyword ? "Keyword" : "Illustration"} non mis à jour`,
        );
      }
      await connection.commit();

      return updatedKeyword && updatedIllustration;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // The D of CRUD - Delete operation
  async destroy(keywordId: number) {
    const [result] = await databaseClient.execute<Result>(
      `
      DELETE keyword, illustration_keyword
      FROM keyword
      LEFT JOIN illustration_keyword
      ON keyword.id = illustration_keyword.keyword_id
      WHERE keyword.id = ?
      `,
      [keywordId],
    );

    return result.affectedRows > 0;
  }
}

export default new keywordRepository();

import type { CatalogRecapProps } from "../../../types/Catalog/CatalogTypes";
import "./CatalogRecap.css";

export default function CatalogRecap({ data }: CatalogRecapProps) {
  const date = new Date();

  return (
    <>
      <ul className="catalog-filter-section">
        {data.map((item) => (
          <li key={item.name}>
            <hgroup>
              <h2>{item.name}</h2>
              <p className="emoji">{item.emoji}</p>
              <p>{item.count}</p>
            </hgroup>
          </li>
        ))}
      </ul>
      <p className="date-card">
        Date :{" "}
        {date.toLocaleDateString("fr-FR", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </>
  );
}

import type { CatalogBoxesProps } from "../../../types/Catalog/CatalogTypes";
import "./Catalog-Boxes.css";
import type { CheckboxItem } from "../../../types/Catalog/CatalogTypes";
import { CatalogCheckbox } from "./CatalogCheckbox";
const checkboxItems: CheckboxItem[] = [
  { id: "all", label: "Tous", emoji: "/src/assets/images/heart.svg" },
  {
    id: "hotels",
    label: "Hôtels",
    emoji: "/src/assets/images/hotel.svg",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    emoji: "/src/assets/images/restaurant.svg",
  },
  {
    id: "activities",
    label: "Activités",
    emoji: "/src/assets/images/activity.svg",
  },
];

export default function CatalogBoxes({
  filters,
  onFilterChange,
  data = [],
}: CatalogBoxesProps) {
  const date = new Date();

  return (
    <section>
      <p className="date-card">
        Date :{" "}
        {date.toLocaleDateString("fr-FR", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <h1 className="catalog-title">Mon catalogue personnalisé</h1>
      <form className="catalog-boxes-form" action="">
        {checkboxItems.map((item) => (
          <CatalogCheckbox
            key={item.id}
            id={`catalog-${item.id}`}
            label={`${data?.find((d) => d.type === item.id)?.count || 0}`}
            emoji={item.emoji}
            checked={filters[item.id]}
            onChange={() => onFilterChange(item.id)}
          />
        ))}
      </form>
    </section>
  );
}

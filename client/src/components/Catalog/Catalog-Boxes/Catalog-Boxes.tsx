import type { CatalogBoxesProps } from "../../../types/Catalog/CatalogTypes";
import "./Catalog-Boxes.css";
import { CatalogCheckbox } from "../../../services/Catalog/CatalogCheckbox";
import type { CheckboxItem } from "../../../types/Catalog/CatalogTypes";

const checkboxItems: CheckboxItem[] = [
  { id: "all", label: "Tous" },
  { id: "hotels", label: "Hôtels" },
  { id: "restaurants", label: "Restaurants" },
  { id: "activities", label: "Activités" },
];

export default function CatalogBoxes({
  filters,
  onFilterChange,
}: CatalogBoxesProps) {
  return (
    <section>
      <h1 className="catalog-title">Mon catalogue personnalisé</h1>
      <form className="catalog-boxes-form" action="">
        {checkboxItems.map((item) => (
          <CatalogCheckbox
            key={item.id}
            id={`catalog-${item.id}`}
            label={item.label}
            checked={filters[item.id]}
            onChange={() => onFilterChange(item.id)}
          />
        ))}
      </form>
    </section>
  );
}

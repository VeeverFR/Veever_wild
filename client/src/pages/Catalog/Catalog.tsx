import CatalogBoxes from "../../components/Catalog/Catalog-Boxes/Catalog-Boxes";
import CatalogCards from "../../components/Catalog/Catalog-Cards/Catalog-Cards";
import CatalogRecap from "../../components/Catalog/Catalog-Recap/CatalogRecap";
import useCatalogLogic from "../../services/Catalog/CatalogFilterLogic";

export default function Catalog() {
  const { filters, handleFilterChange, filteredCards, filteredRecapData } =
    useCatalogLogic();

  return (
    <main>
      <CatalogRecap data={filteredRecapData} />
      <CatalogBoxes filters={filters} onFilterChange={handleFilterChange} />
      <CatalogCards saveCards={filteredCards} />
    </main>
  );
}

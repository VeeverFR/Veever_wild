import type { CatalogCheckboxProps } from "../../types/Catalog/CatalogTypes";
export const CatalogCheckbox = ({
  id,
  label,
  checked,
  onChange,
}: CatalogCheckboxProps) => {
  return (
    <label htmlFor={id} className="catalog-boxes">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

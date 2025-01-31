import { system } from "@chakra-ui/react/preset";
import "./Catalog-Cards.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { CatalogueProps } from "../../../types/Catalog/CatalogTypes";
import ChrMiddleCard from "./Chr-Middle-Card";

export default function CatalogCards({ saveCards }: CatalogueProps) {
  return (
    <article className="chr-full-card">
      <ChakraProvider value={system}>
        <ChrMiddleCard saveCards={saveCards} />
      </ChakraProvider>
    </article>
  );
}

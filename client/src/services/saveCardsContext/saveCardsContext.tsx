import { createContext, useContext, useState } from "react";
import type {
  ChrCardProps,
  Props,
  SaveCardsContextType,
} from "../../types/Catalog/CatalogTypes";

const SaveCardsContext = createContext<SaveCardsContextType | undefined>(
  undefined,
);

export function SaveCardsProvider({ children }: Props) {
  const [saveCards, setSaveCards] = useState<ChrCardProps[]>([]);

  const addCard = (card: ChrCardProps) => {
    setSaveCards((prevCards) => {
      if (!prevCards.some((c) => c.id === card.id)) {
        return [...prevCards, card];
      }
      return prevCards;
    });
  };

  const removeCard = (cardId: number) => {
    setSaveCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const isCardSaved = (cardId: number) => {
    return saveCards.some((card) => card.id === cardId);
  };

  const value = {
    saveCards,
    setSaveCards,
    addCard,
    removeCard,
    isCardSaved,
  };

  return (
    <SaveCardsContext.Provider value={value}>
      {children}
    </SaveCardsContext.Provider>
  );
}

export function useSaveCards() {
  const context = useContext(SaveCardsContext);

  if (!context) {
    throw new Error(
      "useSaveCards doit être utilisé à l'intérieur de SaveCardsProvider",
    );
  }

  return context;
}

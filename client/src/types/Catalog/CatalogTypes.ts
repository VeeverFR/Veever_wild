export type CheckBoxProps = {
  all: boolean;
  hotel: boolean;
  restaurant: boolean;
  activity: boolean;
};

export type RecapChrProps = {
  name: string;
  emoji: string;
  count: number;
  type: "all" | "hotel" | "restaurant" | "activity";
};

export type CatalogBoxesProps = {
  filters: { [K in CheckboxItem["id"]]: boolean };
  onFilterChange: (id: CheckboxItem["id"]) => void;
  data: RecapChrProps[];
};

export type CatalogRecapProps = {
  data: RecapChrProps[];
};
export type ChrCardProps = {
  count: number;
  id: number;
  images: { link: string }[];
  name: string;
  average_budget: number;
  category: string;
  address: string;
  keywords: string[];
  type: "hotel" | "restaurant" | "activity";
};

export type ChrCardsProps = {
  id: number;
  images: { link: string }[];
  name: string;
  average_budget: number;
  address: string;
  category: string;
  keywords: string[];
  cards: ChrCardProps[];
  type: string;
  setCards: (cards: ChrCardProps[]) => void;
};

export type Card = {
  count: number;
  id: number;
  images: { link: string }[];
  name: string;
  average_budget: number;
  address: string;
  type: "hotel" | "restaurant" | "activity";
};

export type Props = {
  children: React.ReactNode;
};

export type SaveCardsContextType = {
  saveCards: ChrCardProps[];
  addCard: (card: ChrCardProps) => void;
  removeCard: (cardId: number) => void;
  isCardSaved: (cardId: number) => boolean;
};

export type CatalogueProps = {
  saveCards: ChrCardProps[];
};

export type CheckboxItem = {
  id: "all" | "hotel" | "restaurant" | "activity";
  label: string;
  emoji: string;
};

export interface CatalogCheckboxProps {
  id: string;
  label: string;
  emoji: string;
  checked: boolean;
  onChange: () => void;
}

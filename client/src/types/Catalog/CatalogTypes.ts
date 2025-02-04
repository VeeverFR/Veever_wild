export type CheckBoxProps = {
  all: boolean;
  hotels: boolean;
  restaurants: boolean;
  activities: boolean;
};

export type RecapChrProps = {
  name: string;
  emoji: string;
  count: number;
  type: "all" | "hotels" | "restaurants" | "activities";
};

export type CatalogBoxesProps = {
  filters: CheckBoxProps;
  onFilterChange: (filterName: keyof CheckBoxProps) => void;
};

export type CatalogRecapProps = {
  data: RecapChrProps[];
};
export type ChrCardProps = {
  count: number;
  id: number;
  illustration_link: string;
  name: string;
  description: string;
  average_budget: number;
  category: string;
  address: string;
  type: "hotels" | "restaurants" | "activities";
};

export type ChrCardsProps = {
  id: number;
  name: string;
  type: string;
  average_budget: number;
  description: string;
  address: string;
  illustration_link: string;
  category: string;
  cards: ChrCardProps[];
  setCards: (cards: ChrCardProps[]) => void;
};

export type Props = {
  children: React.ReactNode;
};

export type SaveCardsContextType = {
  saveCards: ChrCardProps[];
  setSaveCards: React.Dispatch<React.SetStateAction<ChrCardProps[]>>;
  addCard: (card: ChrCardProps) => void;
  removeCard: (cardId: number) => void;
  isCardSaved: (cardId: number) => boolean;
};

export type CatalogueProps = {
  saveCards: ChrCardProps[];
};

export type CheckboxItem = {
  id: "all" | "hotels" | "restaurants" | "activities";
  label: string;
};

export type CatalogCheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
};

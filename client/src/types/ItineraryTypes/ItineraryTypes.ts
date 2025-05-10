export type ItineraryStatus = "pending" | "validated";

export type ItineraryCard = {
  id: number;
  title: string;
  date: string;
  status: string;
  totalPrice: number;
  items: {
    id: number;
    name: string;
    type: "hotel" | "restaurants" | "activites";
  }[];
};

export type ItineraryCardsProps = {
  itineraries: ItineraryCard[];
};

export type ItineraryFilterProps = {
  filters: {
    all: boolean;
    pending: boolean;
    validated: boolean;
  };
  onFilterChange: (filterName: "all" | "pending" | "validated") => void;
};

export type ItineraryRecapProps = {
  data: {
    name: string;
    count: number;
    type: "all" | "pending" | "validated";
    emoji: string;
  }[];
};

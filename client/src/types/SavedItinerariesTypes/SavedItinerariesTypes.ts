export type ViewMode = "list" | "calendar";

export type ItineraryStatus = "created" | "reserved" | "completed";

export type ItineraryFilter = {
  label: string;
  value: ItineraryStatus;
  count: number;
};

export interface Itinerary {
  id: number;
  title: string;
  status: ItineraryStatus;
  startDate: Date;
  endDate: Date;
  activities: Array<{
    id: number;
    name: string;
    type: "hotel" | "restaurant" | "activity";
  }>;
}

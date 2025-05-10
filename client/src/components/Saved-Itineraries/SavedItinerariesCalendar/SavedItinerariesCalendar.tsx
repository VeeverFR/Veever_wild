import { format } from "date-fns";
import { startOfWeek } from "date-fns";
import { getDay } from "date-fns/getDay";
import { fr } from "date-fns/locale/fr";
import { parse } from "date-fns/parse";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { Itinerary } from "../../../types/SavedItinerariesTypes/SavedItinerariesTypes";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./SavedItinerariesCalendar.css";

interface ItineraryCalendarProps {
  itineraries: Itinerary[];
}

const locales = {
  fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function ItineraryCalendar({
  itineraries,
}: ItineraryCalendarProps) {
  const events = itineraries.map((itinerary) => ({
    title: itinerary.title,
    start: itinerary.startDate,
    end: itinerary.endDate,
    resource: itinerary,
  }));

  return (
    <section className="itinerary-calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={["month", "week"]}
        defaultView="month"
        messages={{
          next: "Suivant",
          previous: "Précédent",
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
        }}
      />
    </section>
  );
}

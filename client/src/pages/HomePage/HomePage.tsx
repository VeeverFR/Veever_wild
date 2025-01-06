import Discovery from "../../components/Discovery/Discovery";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PreHeader from "../../components/PreHeader/PreHeader";
import ItinerarySection from "../../components/itinerarySection/itinerarySection";

export default function HomePage() {
  return (
    <>
      <PreHeader />
      <Discovery />
      <ItinerarySection />
      <NewsLetter />
    </>
  );
}

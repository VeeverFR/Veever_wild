import Discovery from "../../components/Discovery/Discovery";
import ItinerarySection from "../../components/ItinerarySection/ItinerarySection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PreHeader from "../../components/PreHeader/PreHeader";

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

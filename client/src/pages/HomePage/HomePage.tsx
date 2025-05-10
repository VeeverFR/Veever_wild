import Discovery from "../../components/Discovery/Discovery";
import ItinerarySection from "../../components/ItinerarySection/ItinerarySection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PreHeader from "../../components/PreHeader/PreHeader";
import Logout from "../../components/logout/Logout";

export default function HomePage() {
  return (
    <>
      <Logout />
      <PreHeader />
      <Discovery />
      <ItinerarySection />
      <NewsLetter />
    </>
  );
}

import VersusCard from "../../components/VersusCard/VersusCard";
import UseVersusLogic from "../../components/VersusCard/VersusLogic";

// export the VersusPage component and limit the number of cards to 2
export default function VersusPage() {
  const { versusCards, handleValidationVersus, handleRewind } =
    UseVersusLogic();

  const versusCardsSlice = versusCards();
  return (
    <VersusCard
      versusCards={versusCardsSlice}
      handleValidationVersus={handleValidationVersus}
      handleRewind={handleRewind}
    />
  );
}

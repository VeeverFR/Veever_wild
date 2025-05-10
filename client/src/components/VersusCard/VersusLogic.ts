import { useState } from "react";
import { useSaveCards } from "../../services/saveCardsContext/saveCardsContext";

export default function UseVersusLogic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentType, setCurrentType] = useState<
    "hotel" | "restaurant" | "activity"
  >("hotel");
  const [seenCards, setSeenCards] = useState<{ [key: string]: number[] }>({
    hotel: [],
    restaurant: [],
    activity: [],
  });
  const { saveCards } = useSaveCards();

  const versusCards = () => {
    const filteredCards = saveCards
      .filter(
        (card) =>
          card.type === currentType &&
          !seenCards[currentType].includes(card.id),
      )
      .slice(currentIndex, currentIndex + 2);

    return filteredCards;
  };

  const handleValidationVersus = (cardId: number) => {
    setSeenCards((prevSeenCards) => ({
      ...prevSeenCards,
      [currentType]: [...prevSeenCards[currentType], cardId],
    }));

    if (currentType === "hotel") {
      setCurrentType("restaurant");
    } else if (currentType === "restaurant") {
      setCurrentType("activity");
    } else if (currentType === "activity") {
      setCurrentType("hotel");
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const handleRewind = () => {
    setSeenCards((prevSeenCards) => ({
      ...prevSeenCards,
      [currentType]: [],
    }));

    if (currentType === "restaurant") {
      setCurrentType("hotel");
    } else if (currentType === "activity") {
      setCurrentType("restaurant");
    } else if (currentType === "hotel" && currentIndex >= 2) {
      setCurrentType("activity");
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  return { versusCards, handleValidationVersus, handleRewind, currentType };
}

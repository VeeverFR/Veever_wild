import { animate, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { useSaveCards } from "../../../services/saveCardsContext/saveCardsContext";
import type { ChrCardProps } from "../../../types/Catalog/CatalogTypes";

export default function useSwiper(
  cards: ChrCardProps[],
  setCards: (cards: ChrCardProps[]) => void,
  id: number,
) {
  const [, setIsAnimated] = useState(false);
  const { addCard } = useSaveCards();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);

  const handleDragEnd = (id: number) => {
    const currentX = x.get();
    if (currentX > 50) {
      const swippedCards = cards.find((card) => card.id === id);
      if (swippedCards) {
        setCards(cards.filter((card) => card.id !== id));
        addCard(swippedCards);
      }
    } else if (currentX < -50) {
      setCards(cards.filter((card) => card.id !== id));
    }
  };

  const handleLike = (id: number) => {
    setIsAnimated(true);

    animate(x, 150, {
      duration: 0.5,
      onComplete: () => {
        const swippedCards = cards.find((card) => card.id === id);
        if (swippedCards) {
          addCard(swippedCards);
        }
        setCards(cards.filter((card) => card.id !== id));
        setIsAnimated(false);
      },
    });
  };

  const handleDislike = (id: number) => {
    setIsAnimated(true);
    animate(x, -150, {
      duration: 0.5,
      onComplete: () => {
        setCards(cards.filter((card) => card.id !== id));
        setIsAnimated(false);
      },
    });
  };
  const currentIndex = cards.findIndex((card) => card.id === Number(id));

  return {
    handleDislike,
    handleDragEnd,
    handleLike,
    currentIndex,
    opacity,
    rotate,
    x,
  };
}

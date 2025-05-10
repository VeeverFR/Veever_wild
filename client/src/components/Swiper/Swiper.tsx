import { useState } from "react";
import "./Swiper.css";
import { useLoaderData } from "react-router-dom";
import type { ChrCardProps } from "../../types/Catalog/CatalogTypes";
import Cardz from "./SwiperCard";
import SwiperHeader from "./Swiperheader";

export default function Swiper() {
  const Loadcards = useLoaderData() as ChrCardProps[];
  const shuffleArray = (array: ChrCardProps[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const [cards, setCards] = useState<ChrCardProps[]>(shuffleArray(Loadcards));
  return (
    <>
      <SwiperHeader />
      <article className="card-map">
        {cards.map((card) => (
          <Cardz
            key={`${card.id}-${card.name}`}
            {...card}
            cards={cards}
            setCards={setCards}
          />
        ))}
      </article>
    </>
  );
}

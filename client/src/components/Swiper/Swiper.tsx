import { useEffect, useState } from "react";
import "./Swiper.css";
import type { ChrCardProps } from "../../types/Catalog/CatalogTypes";
import Cardz from "./SwiperCard";
import SwiperHeader from "./Swiperheader";

export default function Swiper() {
  const [cards, setCards] = useState<ChrCardProps[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/chr`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

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

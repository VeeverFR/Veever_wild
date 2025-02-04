import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DislikeIcon } from "../../assets/images/DislikeIcone";
import { LikeIcon } from "../../assets/images/LikeIcone";
import type { ChrCardsProps } from "../../types/Catalog/CatalogTypes";
import useSwiper from "../Hooks/Swiper/useSwiper";

export default function Cardz({
  id,
  illustration_link,
  name,
  cards,
  setCards,
}: ChrCardsProps) {
  const {
    handleDislike,
    handleDragEnd,
    handleLike,
    currentIndex,
    opacity,
    rotate,
    x,
  } = useSwiper(cards, setCards, id.toString());

  return (
    <main className="swiper-container" id={`swiper-${id.toString()}`}>
      <article
        className={`swiper-card swiper-card-${cards[currentIndex].type}`}
      >
        <motion.img
          className="img-swiper"
          src={illustration_link}
          alt={name}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, opacity, rotate }}
          onDragEnd={() => handleDragEnd(id)}
        />
        <footer className="button-container">
          <button
            className="swiper-btn"
            onClick={() => handleDislike(id)}
            type="button"
          >
            <DislikeIcon />
          </button>
          <button
            className="swiper-btn"
            onClick={() => handleLike(id)}
            type="button"
          >
            <LikeIcon />
          </button>
          <Link to="/prestataire">+ d'infos</Link>
        </footer>
      </article>
    </main>
  );
}

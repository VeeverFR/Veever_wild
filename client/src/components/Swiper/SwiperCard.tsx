import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ChrCardsProps } from "../../types/Catalog/CatalogTypes";
import useSwiper from "../Hooks/Swiper/useSwiper";

export default function Cardz({ id, name, cards, setCards }: ChrCardsProps) {
  const {
    handleDislike,
    handleDragEnd,
    handleLike,
    currentIndex,
    opacity,
    rotate,
    x,
  } = useSwiper(cards, setCards, id);

  return (
    <main className="swiper-container">
      <motion.article
        className="swiper-card"
        dragConstraints={{ left: 0, right: 0 }}
        drag="x"
        style={{ x, opacity, rotate }}
        onDragEnd={() => handleDragEnd(id)}
      >
        <h1>{cards[currentIndex].name}</h1>

        <figure className="tag-img-container">
          <img
            className="img-swiper"
            src={`http://localhost:3310/${cards[currentIndex].images[1].link}`}
            alt={name}
          />
          <figcaption className="tag-container">
            <p>{cards[currentIndex].type}</p>
            <p>{cards[currentIndex].address}</p>
            <p>Prix moyen: {cards[currentIndex].average_budget}$</p>
          </figcaption>
        </figure>
        <footer className="button-container">
          <button
            className="swiper-btn"
            onClick={() => handleDislike(id)}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fb7a3f"
              width="60"
              height="60"
              viewBox="0 0 612.043 612.043"
            >
              <title>J'aime pas</title>
              <g>
                <g id="cross">
                  <g>
                    <path
                      d="M397.503,306.011l195.577-195.577c25.27-25.269,25.27-66.213,0-91.482c-25.269-25.269-66.213-25.269-91.481,0
				L306.022,214.551L110.445,18.974c-25.269-25.269-66.213-25.269-91.482,0s-25.269,66.213,0,91.482L214.54,306.033L18.963,501.61
				c-25.269,25.269-25.269,66.213,0,91.481c25.269,25.27,66.213,25.27,91.482,0l195.577-195.576l195.577,195.576
				c25.269,25.27,66.213,25.27,91.481,0c25.27-25.269,25.27-66.213,0-91.481L397.503,306.011z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button
            className="swiper-btn"
            onClick={() => handleLike(id)}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="80"
              fill="#7BB471"
              viewBox="0 0 426.668 426.668"
            >
              <title>J'aime</title>
              <path
                d="M401.788,74.476c-63.492-82.432-188.446-33.792-188.446,49.92
	c0-83.712-124.962-132.356-188.463-49.92c-65.63,85.222-0.943,234.509,188.459,320.265
	C402.731,308.985,467.418,159.698,401.788,74.476z"
              />
            </svg>
          </button>
          <button
            className="swiper-btn"
            type="button"
            aria-labelledby={cards[currentIndex].type}
          >
            <Link to="/prestataire">Voir + d'infos</Link>
          </button>
        </footer>
      </motion.article>
    </main>
  );
}

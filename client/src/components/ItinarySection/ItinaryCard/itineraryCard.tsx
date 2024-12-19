interface CardProps {
    title: string;
    imageSrc: string;
    onReserve: () => void;
}

const Card = ({ title, imageSrc, onReserve }: CardProps) => {
    return (
        <article className="card">
            <img src={imageSrc} alt={title} className="card__image" />
            <h3 className="card-title">{title}</h3>
            <button className="reserve-button" onClick={onReserve}>
                Réserver
            </button>
        </article>
    );
};

export default Card;
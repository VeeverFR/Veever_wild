import Card from "./itineraryCard/itineraryCard.tsx";

const itineraries = [
  {
    id: 1,
    title: "Escapade chill",
    imageSrc: "src/assets/images/AppartHotel.jpg",
  },
  {
    id: 2,
    title: "Week-end romantique",
    imageSrc: "src/assets/images/HotelBedroom.jpg",
  },
  {
    id: 3,
    title: "Séjour en famille",
    imageSrc: "src/assets/images/rock-climbing.jpg",
  },
];

const ItinerarySection = () => {
  const handleReserve = (title: string) => {
    console.info(`Réservation de l'itinéraire ${title}`);
  };

  return (
    <section className="itineraries-section">
      <h2 className="section-title">Nos Itinéraires du Moment</h2>
      <article className="cards-container">
        {itineraries.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            onReserve={() => handleReserve(item.title)}
          />
        ))}
      </article>
    </section>
  );
};

export default ItinerarySection;

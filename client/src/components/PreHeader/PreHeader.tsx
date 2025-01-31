import "./PreHeader.css";
export default function PreHeader() {
  return (
    <section className="preheader-section">
      <select name="city" className="city-select">
        <option value="">Choisir une ville</option>
        <option value="bordeaux">❤️ Bordeaux</option>
      </select>
      <img className="logo" src="src/assets/images/logo.svg" alt="logo" />
    </section>
  );
}

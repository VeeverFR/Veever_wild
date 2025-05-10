import "./PreHeader.css";
export default function PreHeader() {
  return (
    <section className="preheader-section">
      <div className="logobox">
        <img className="logo" src="public/assets/images/logo.png" alt="logo" />
      </div>
      <select name="city" className="city-select">
        <option value="">Choisir une ville</option>
        <option value="bordeaux">❤️ Bordeaux</option>
      </select>
    </section>
  );
}

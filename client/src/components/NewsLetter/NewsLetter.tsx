import useNewsLetterService from "../../services/NewsLetter/NewsLetterService";
import "./NewsLetter.css";

export default function NewsLetter() {
  const { handleInput, handleSubmit, isEmailValid, email } =
    useNewsLetterService();

  return (
    <article className="newsLetter-container">
      <h2>Rejoignez l'aventure!</h2>
      <h3>Recevez en avant-première nos meilleurs offres</h3>
      <p className="offerNewsLetter">Offre Exclusive !</p>
      <p className="offerNewsLetter">Accès anticipé au nouveauté !</p>
      <p className="offerNewsLetter">-10% sur votre première réservation !</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newsLetterEmail">Votre adresse email :</label>
        <input
          type="email"
          name="newsLetterEmail"
          id="newsLetterEmail"
          value={email}
          onChange={handleInput}
        />
        {!isEmailValid && (
          <p style={{ color: "red" }}>
            Veuillez entrer une adresse email valide.
          </p>
        )}
        <button className="newsLetter-btn" type="submit">
          Rejoins l'aventure Veever !
        </button>
      </form>
    </article>
  );
}

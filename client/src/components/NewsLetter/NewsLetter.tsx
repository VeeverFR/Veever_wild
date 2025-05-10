import useFormValidation from "../../services/Form/FormValidation";
import InputEmail from "../FormSignUp/InputForm/InputEmail";
import "./NewsLetter.css";

export default function NewsLetter() {
  const { email, handleEmailCheckChange, errors } = useFormValidation();
  return (
    <article className="newsLetter-container">
      <h2>Rejoignez l'aventure!</h2>
      <h3>Recevez en avant-première nos meilleurs offres</h3>
      <div className="newsLetter-box">
        <InputEmail
          email={email}
          handleEmailCheckChange={handleEmailCheckChange}
          errors={errors}
        />
        <button className="newsLetter-btn" type="submit">
          Je m'inscris
        </button>
        <p>
          <span className="material-symbols-outlined">favorite</span> Offres Vos
          données sont protégées, désabonnement en 1 seul clic.
        </p>
      </div>
      <p className="offerNewsLetter">
        <span className="material-symbols-outlined">favorite</span> Offres
        Exclusives
      </p>
      <p className="offerNewsLetter">
        <span className="material-symbols-outlined">favorite</span> Accès
        anticipé aux nouveautés
      </p>
      <p className="offerNewsLetter">
        <span className="material-symbols-outlined">favorite</span> -10% sur
        votre première réservation
      </p>
    </article>
  );
}

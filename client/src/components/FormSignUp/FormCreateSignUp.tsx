import "./Form.css";
import "react-datepicker/dist/react-datepicker.css";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../Styles/StyledButton";
import useFormData from "../../services/Form/FormData";
import useFormValidation from "../../services/Form/FormValidation";
import HeaderForm from "./HeaderForm";
import InputCheckCGU from "./InputForm/InputCheckCGU";
import InputCheckContact from "./InputForm/InputCheckContact";
import InputDate from "./InputForm/InputDate";
import InputEmail from "./InputForm/InputEmail";
import InputFirstName from "./InputForm/InputFirstName";
import InputGender from "./InputForm/InputGender";
import InputLastName from "./InputForm/InputLastName";
import InputPassword from "./InputForm/InputPassword";
import InputPhone from "./InputForm/InputPhone";
import InputUsername from "./InputForm/InputUsername";

export default function FormCreateSignUp() {
  const {
    email,
    password,
    errors,
    confirmPassword,
    isSamePassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleEmailCheckChange,
    validateContact,
  } = useFormValidation();
  const { handleChange, formData } = useFormData();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [contactErrors, setContactErrors] = useState<string | null>(null);

  const handleClose = () => {
    setShowSnackbar(false);
  };
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0 || !isSamePassword) {
      setShowSnackbar(true);
    }
    const contactError = validateContact(formData);
    if (contactError) {
      setContactErrors(contactError);
      return;
    }
    navigate("/login");
  };

  return (
    <>
      <HeaderForm />
      <form onSubmit={handleSubmit} className="createForm">
        <InputUsername
          handleChange={handleChange("username")}
          value={formData.username}
        />
        <InputLastName
          handleChange={handleChange("lastname")}
          value={formData.lastname}
        />
        <InputFirstName
          handleChange={handleChange("firstname")}
          value={formData.firstname}
        />
        <InputEmail
          handleEmailCheckChange={handleEmailCheckChange}
          email={email}
          errors={errors}
        />
        <InputPassword
          password={password}
          confirmPassword={confirmPassword}
          errors={errors}
          isSamePassword={isSamePassword}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
        />
        <InputGender
          handleChange={handleChange("gender")}
          value={formData.gender}
        />
        <InputDate handleChange={handleChange("date")} value={formData.date} />
        <InputPhone
          handleChange={handleChange("phone")}
          value={formData.phone}
        />
        <InputCheckContact
          handleChange={handleChange("checkContact")}
          value={formData.checkContact}
        />
        {contactErrors && <p style={{ color: "red" }}>{contactErrors}</p>}
        <InputCheckCGU
          handleChange={handleChange("checkCGU")}
          value={formData.checkCGU}
        />
        <StyledButton
          className="btnAcceptForm"
          type="submit"
          variant="contained"
        >
          Crée mon compte
        </StyledButton>

        {showSnackbar && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={true}
            onClose={handleClose}
            transitionDuration={700}
            message={contactErrors}
          />
        )}
      </form>
    </>
  );
}

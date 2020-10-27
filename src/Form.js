import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";
const Form = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  function submitForm() {
    setIsSubmit(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmit ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;

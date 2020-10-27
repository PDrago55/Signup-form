//custom react HOOK
import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    //destructure e.target
    const { name, value } = e.target;
    setValues({
      ...values,
      //labeled name under each input on FORM.js
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, "here");
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;

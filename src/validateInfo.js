export default function validateInfo(values) {
  let errors = {};
  //username check
  if (!values.username.trim()) {
    errors.username = "Username Required";
  }

  //emails check

  if (!values.email) {
    errors.email = "Email Required";
    //regex for email validation
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Not a Valid Email";
  }

  //password check
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}

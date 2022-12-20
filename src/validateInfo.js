export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email Address required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email Address is invalid";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "password needs to be 6 characters long";
  }

  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password !== values.password2) {
    errors.password2 = "Password is incorrect";
  }

  return errors;
}

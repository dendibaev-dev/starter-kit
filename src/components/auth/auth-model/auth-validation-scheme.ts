import * as yup from "yup";

const authValidationScheme = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

export default authValidationScheme;

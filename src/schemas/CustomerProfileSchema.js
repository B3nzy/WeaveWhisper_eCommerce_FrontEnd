import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

export const CustomerProfileSchema = yup.object().shape({
  name: yup.string().min(5).required("Required"),
  email: yup.string().email("Please enter valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message: "Please create a stronger password",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
  type: yup.string().required("Required"),
});

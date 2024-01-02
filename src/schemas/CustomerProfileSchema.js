import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

export const CustomerProfileSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(5, "Name must be at least 5 characters")
    .required("Required"),
  email: yup.string().email("Please enter valid email").required("Required"),
  phoneNumber: yup.number().typeError("Phone number must be digits only"),
  password: yup
    .string()
    .min(8, "Password length must be 8")
    .matches(passwordRules, {
      message: "Please create a stronger password",
    })
    .required("Required"),
  type: yup.string().required("Required"),
});

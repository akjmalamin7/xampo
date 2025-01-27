import * as yup from "yup";

export const REGISTRATION_SCHEMA = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters long")
    .max(50, "Full name cannot exceed 50 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(11, "Phone number must be at least 10 digits"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
export const LOGIN_SCHEMA = yup.object().shape({
  email:yup.string().email("Invalid email address").required("Email is required"),
  password: yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters long"),
})
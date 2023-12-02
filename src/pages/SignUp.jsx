import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signupValidation";

export default function SignUp() {
  const onSubmit = () => {
    console.log("submiited");
  };
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: signUpSchema,
      onSubmit,
    });

  return (
    <div className="max-w-lg mx-auto items-center p-3">
      <h1 className="my-7 font-semibold text-2xl text-center">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className={[
            "border p-3 rounded-lg focus:outline-orange-200",
            errors.username &&
              touched.username &&
              " border-red-600 border-[1.5px]",
          ].join("")}
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && (
          <p className="text-red-500 mt-[-12px] text-xs ml-2">
            {errors.username}
          </p>
        )}
        <input
          className={[
            "border p-3 rounded-lg focus:outline-orange-200",
            errors.email && touched.email && " border-red-600 border-[1.5px]",
          ].join("")}
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 mt-[-12px] text-xs ml-2">{errors.email}</p>
        )}
        <input
          className={[
            "border p-3 rounded-lg focus:outline-orange-200",
            errors.password &&
              touched.password &&
              " border-red-600 border-[1.5px]",
          ].join("")}
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className="text-red-500 mt-[-12px] text-xs ml-2">
            {errors.password}
          </p>
        )}
        <input
          className={[
            "border p-3 rounded-lg focus:outline-orange-200",
            errors.confirm_password &&
              touched.confirm_password &&
              " border-red-600 border-[1.5px]",
          ].join("")}
          type="password"
          placeholder="confirm password"
          id="confirm_password"
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirm_password && touched.confirm_password && (
          <p className="text-red-500 mt-[-12px] text-xs ml-2">
            {errors.confirm_password}
          </p>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-black text-white p-3 uppercase rounded-lg hover:opacity-90 disabled:opacity-80"
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-2 justify-center mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"} className="text-green-700 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}

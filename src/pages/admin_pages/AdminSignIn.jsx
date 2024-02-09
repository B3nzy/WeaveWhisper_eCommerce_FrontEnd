/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  signInFaliure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice";
import axios from "axios";
import { useFormik } from "formik";
import { signInSchema } from "../../schemas/signinValidation";

export default function AdminSignIn() {
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    try {
      setLoading(true);
      dispatch(signInStart());
      const res = await axios.post("/api/admin/login", values);
      console.log(res);
      if (res.status !== 200) {
        setLoading(false);
        setUserError(res.response.data.message);
        dispatch(signInFaliure());
        return;
      }
      setLoading(false);
      setUserError(null);
      console.log(res.data);
      dispatch(signInSuccess(res.data));
    } catch (err) {
      console.log("test");
      setLoading(false);
      dispatch(signInFaliure());
      if (err.request.status === 403) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setUserError(err.response.data.message);
      }
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    console.log(currentUser);
    // if (currentUser !== null && currentUser.type === "ADMIN") {
    //   navigate("/admin");
    // }
  }, [currentUser]);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signInSchema,
      onSubmit,
    });

  return (
    <>
      <ToastContainer newestOnTop={true} className="top-16 w-fit" />
      <div className="max-w-lg mx-auto items-center p-3">
        <h1 className="my-7 font-semibold text-2xl text-center">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className={[
              "border p-3 rounded-lg focus:outline-orange-200",
              errors.email && touched.email && " border-red-600 border-[1.5px]",
            ].join("")}
            type="text"
            placeholder="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.email}
            </p>
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
          <button
            type="submit"
            onSubmit={handleSubmit}
            disabled={loading}
            className="bg-black text-white p-3 uppercase rounded-lg hover:opacity-90 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign in"}
          </button>
        </form>
        {userError && (
          <p className="text-red-600 mt-1 text-xs ml-3">{userError}</p>
        )}
      </div>
    </>
  );
}

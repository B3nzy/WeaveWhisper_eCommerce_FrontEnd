import { useFormik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CustomerProfileSchema } from "../schemas/CustomerProfileSchema";

export default function CustomerProfile() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const [showPassword, setShowPassword] = useState(true);
  const [disable, setDisable] = useState(true);

  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        name: currentUser.name,
        email: currentUser.email,
        password: currentUser.password,
        confirmPassword: currentUser.password,
        type: currentUser.type,
        // userName: currentUser.user_name,
        userName: "sumitmandal",
        // phoneNumber: currentUser.phone_number,
        phoneNumber: 1234567890,
        // address: currentUser.address,
        address:
          "Ravet Village Rd, near Vicky's Corner, Shinde Vasti, Ravet, Pimpri-Chinchwad, Maharashtra 411044, India",
      },
      validationSchema: CustomerProfileSchema,
    });

  return (
    <div className="max-w-6xl mx-auto p-3 my-10 flex flex-col">
      <h1 className="font-bold text-4xl">My details</h1>
      <div className="my-5">
        <h2 className="font-semibold text-xl">Personal information </h2>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-slate-400" />
        <div className="my-5 flex flex-col sm:flex-row justify-around gap-3 max-w-4xl mx-auto">
          <label className="w-full flex flex-col whitespace-nowrap gap-1">
            <p className="">Your name</p>
            <input
              className={[
                "w-full p-3 border rounded-lg ",
                errors.name && touched.name
                  ? " border-red-600 border"
                  : " border-slate-300",
              ].join("")}
              type="text"
              name="name"
              placeholder="your name..."
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disable}
            />
            {errors.name && touched.name && (
              <div className="text-sm text-red-500">{"*" + errors.email}</div>
            )}
          </label>
          <label className="w-full flex flex-col whitespace-nowrap gap-1">
            <p className="">Your phone number</p>
            <input
              className={[
                "w-full p-3 border rounded-lg ",
                errors.phoneNumber && touched.phoneNumber
                  ? " border-red-600 border"
                  : " border-slate-300",
              ].join("")}
              type="text"
              name="phoneNumber"
              placeholder="your phone number..."
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disable}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <div className="text-sm text-red-500">{"*" + errors.email}</div>
            )}
          </label>
        </div>
        <div className="justify-around gap-3 sm:max-w-sm mx-auto">
          <label className="w-full flex flex-col whitespace-nowrap gap-1">
            <p className="">Your username</p>
            <input
              className={[
                "w-full p-3 border rounded-lg ",
                errors.userName && touched.userName
                  ? " border-red-600 border"
                  : " border-slate-300",
              ].join("")}
              type="text"
              name="userName"
              placeholder="your user name..."
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disable}
            />
            {errors.userName && touched.userName && (
              <div className="text-sm text-red-500">{"*" + errors.email}</div>
            )}
          </label>
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-semibold text-xl">Account information </h2>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-slate-400" />
        <div className="my-10 flex flex-col sm:flex-row justify-around gap-3 max-w-4xl mx-auto">
          <label className="w-full flex flex-col whitespace-nowrap gap-1">
            <p className="">Your email</p>
            <input
              className={[
                "w-full p-3 border rounded-lg ",
                errors.email && touched.email
                  ? " border-red-600 border"
                  : " border-slate-300",
              ].join("")}
              type="text"
              name="email"
              placeholder="your email..."
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled="disable"
            />
            {errors.email && touched.email && (
              <div className="text-sm text-red-500">{"*" + errors.email}</div>
            )}
          </label>

          <label className="w-full flex flex-col whitespace-nowrap gap-1">
            <p className="">Your password :</p>
            <div
              className={[
                "w-full p-3 border rounded-lg flex flex-row justify-between ",
                errors.password && touched.password
                  ? " border-red-600 border"
                  : " border-slate-300",
                disable ? "bg-stone-100" : "bg-white",
              ].join(" ")}
            >
              <input
                className={[
                  "w-full outline-none",
                  disable ? "bg-stone-100" : "bg-white",
                ].join(" ")}
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder="type password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disable}
              />
              <button
                disabled={disable}
                onClick={() => setShowPassword(!showPassword)}
              >
                Show
              </button>
            </div>
            {errors.password && touched.password && (
              <div className="text-sm text-red-500">
                {"*" + errors.password}
              </div>
            )}
          </label>
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-semibold text-xl">Shipping details </h2>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-slate-400" />
        <div className="my-5 flex flex-col sm:flex-row justify-around gap-3 max-w-4xl mx-auto whitespace-nowrap items-center">
          <label className="w-full flex flex-col whitespace-nowrap gap-1">
            <p className="">Your address</p>
            <textarea
              className={[
                "w-full p-3 border rounded-lg h-40 ",
                errors.address && touched.address
                  ? " border-red-600 border"
                  : " border-slate-300",
              ].join("")}
              type="text"
              name="address"
              placeholder="your address..."
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disable}
            />
            {errors.address && touched.address && (
              <div className="text-sm text-red-500">{"*" + errors.email}</div>
            )}
          </label>
          <button
            disabled={disable}
            className="bg-slate-600 text-white p-3 rounded-lg hover:shadow-md hover:opacity-90 disabled:opacity-70 disabled:shadow-none"
          >
            Add current address
          </button>
        </div>
      </div>
      {disable ? (
        <button
          onClick={() => setDisable(false)}
          className="bg-slate-600 text-white p-3 rounded-lg hover:shadow-lg hover:opacity-90 w-80 mx-auto"
        >
          Edit
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row gap-10 max-w-2xl justify-around mx-auto ">
          <button
            //   onClick={}
            className="bg-slate-600 text-white p-3 rounded-lg hover:shadow-lg hover:opacity-90 w-80"
          >
            Save
          </button>
          <button
            onClick={() => setDisable(true)}
            className="bg-slate-600 text-white p-3 rounded-lg hover:shadow-lg hover:opacity-90 w-80"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

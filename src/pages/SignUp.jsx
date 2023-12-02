import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-lg mx-auto items-center p-3">
      <h1 className="my-7 font-semibold text-2xl text-center">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg focus:outline-orange-200"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg focus:outline-orange-200"
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg focus:outline-orange-200"
          type="text"
          placeholder="password"
          id="password"
        />
        <button className="bg-black text-white p-3 uppercase rounded-lg hover:opacity-90 disabled:opacity-80">
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

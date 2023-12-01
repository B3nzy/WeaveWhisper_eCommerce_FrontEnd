import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white shadow-md p-4 flex flex-row items-center justify-between">
      <Link to={"/"} className="font-bold sm:ml-10 sm:text-xl">
        <span className="text-pink-800">Weave</span>
        <span className="text-slate-700">Whisper</span>
      </Link>
      <div className="font-bold flex gap-8 text-xs text-slate-700">
        <p className="hidden md:inline hover:underline hover:underline-offset-8">
          MEN
        </p>
        <p className="hidden md:inline hover:underline">WOMEN</p>
        <p className="hidden md:inline hover:underline">KIDS</p>
      </div>
      <form className="px-4 p-2  md:w-[400px] flex items-center justify-between bg-gray-100 rounded-md focus-within:bg-transparent focus-within:border">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-full"
        />
        <IoSearch className="text-slate-400 text-xl" />
      </form>
      <div className="flex gap-6 sm:mr-10 text-center">
        <Link
          to={"sign-in"}
          className="hover:underline hover:underline-offset-8"
        >
          <ul className=" flex flex-col items-center ">
            <BsPerson className="text-2xl" />
            <li className="text-xs font-semibold">Signin</li>
          </ul>
        </Link>

        <ul className=" flex flex-col items-center">
          <CiHeart className="text-2xl" />
          <li className="text-xs font-semibold">Wishlist</li>
        </ul>
        <ul className=" flex flex-col items-center">
          <LiaShoppingBagSolid className="text-2xl" />
          <li className="text-xs font-semibold">Bag</li>
        </ul>
      </div>
    </div>
  );
}

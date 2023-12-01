import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="bg-white shadow-md p-4 flex flex-row items-center justify-between">
      <p className="font-bold sm:ml-10">
        <span className="text-pink-800">Weave</span>
        <span>Whisper</span>
      </p>
      <div className="font-semibold flex gap-6">
        <p className="hidden md:inline">Men</p>
        <p className="hidden md:inline">women</p>
        <p className="hidden md:inline">Kids</p>
      </div>
      <form className="border p-2 focus-within:border-gray-500 md:w-80 flex items-center justify-between">
        <input type="text" placeholder="Search..." className="outline-none" />
        <IoIosSearch className="text-slate-400" />
      </form>
      <ul className="flex gap-2 sm:mr-10">
        <li>Signin</li>
        <li>Wishlist</li>
        <li>Bag</li>
      </ul>
    </div>
  );
}

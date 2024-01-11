/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function DeleteBrandModal({ closeModalAction }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <>
      <div className="absolute top-0 z-40 w-full h-full bg-gray-800 blur opacity-40"></div>
      <div className="absolute transition-all open:duration-300 p-6 w-fit shadow-lg flex flex-col gap-3 m-auto top-0 left-0 right-0 bottom-0 h-fit z-50 bg-white rounded-md border ">
        <div className="flex flex-row justify-between items-center">
          <span>Delete account</span>
          <IoClose
            onClick={closeModalAction}
            className="text-4xl hover:text-green-500 hover:cursor-pointer"
          />
        </div>

        <hr />
        <div className="text-slate-700 flex flex-col gap-1">
          <span>Are you sure to delete your account permanently?</span>
          <span>
            This will delete all your listing along with your account details
          </span>
        </div>
        <div className="flex gap-6 justify-end w-full my-3">
          <button
            onClick={closeModalAction}
            className="border p-2 rounded-md uppercase w-fit hover:text-green-500 hover:border-green-500 hover:cursor-pointer transition-all duration-200"
          >
            Cancel
          </button>
          <button className="border p-2 rounded-md uppercase w-fit hover:bg-red-600 hover:text-white transition-all duration-200">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

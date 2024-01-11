/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrandSuccess } from "../redux/user/userSlice";

export default function DeleteBrandModal({ closeModalAction }) {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDeleteBrand = async () => {
    try {
      const res = await axios.delete(`/api/users/delete/${currentUser.id}`);
      if (res.status !== 200) {
        console.log(res.response.data.message);
        return;
      }
      dispatch(deleteBrandSuccess());
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <>
      <div className="absolute top-0 z-40 w-full h-full bg-gray-800 blur opacity-40"></div>
      <div className="absolute p-6 md:max-w-xl max-w-sm shadow-lg flex flex-col gap-3 m-auto top-0 left-0 right-0 bottom-0 h-fit z-50 bg-white rounded-md border ">
        <div className="flex flex-row justify-between items-center">
          <span className="text-red-600 text-xl font-semibold">
            Delete account
          </span>
          <IoClose
            onClick={closeModalAction}
            className="text-4xl hover:text-green-500 hover:cursor-pointer"
          />
        </div>

        <hr />
        <div className="text-slate-700 flex flex-col gap-1">
          <span className="text-slate-600">
            Are you sure to delete your account permanently. This will delete
            all your listing along with your account details. This step cant not
            be undone.
          </span>
        </div>
        <div className="flex gap-6 justify-end w-full my-3">
          <button
            onClick={closeModalAction}
            className="border p-2 rounded-md uppercase w-fit hover:text-green-500 hover:border-green-500 hover:cursor-pointer transition-all duration-200 hover:shadow-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteBrand}
            className="border border-red-500 text-red-500 p-2 rounded-md uppercase w-fit hover:bg-red-600 hover:text-white transition-all duration-200 hover:shadow-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

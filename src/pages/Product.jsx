/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BsHandbagFill } from "react-icons/bs";
import { FaTruckArrowRight } from "react-icons/fa6";

export default function Product() {
  const images = [
    "https://images.pexels.com/photos/5255159/pexels-photo-5255159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [displayImg, setDisplayImg] = useState(images[0]);

  return (
    <div className="my-14 mx-10 flex flex-col md:flex-row gap-4 justify-between">
      <div className="p-3 flex flex-row flex-1 gap-4">
        <div className="flex flex-col gap-2">
          {images.map((image, id) => (
            <img
              key={id}
              src={image}
              alt="product image"
              className="h-32 object-fit w-24 cursor-pointer"
            />
          ))}
        </div>
        <div>
          <img
            src={images[0]}
            alt="product image"
            className="h-[600px] w-[500px]"
          />
        </div>
      </div>
      <div className="flex flex-col p-4 gap-1 flex-1">
        <h1 className="text-xl font-semibold">Brand Name</h1>
        <p className="text-lg text-gray-400">Product Name</p>
        <hr />
        <p className="txet-lg text-gray-500 line-through">MRP $0000</p>
        <p className="text-green-500 font-semibold">inclusive of all taxes</p>
        <p className="my-4 font-semibold">SELECT SIZE</p>
        <ul className="flex items-center gap-4 uppercase">
          <li className=" border rounded-full h-12 w-12 flex items-center justify-center font-semibold text-slate-600 cursor-pointer hover:border-pink-500 hover:text-pink-500">
            s
          </li>
          <li className=" border rounded-full h-12 w-12 flex items-center justify-center font-semibold text-slate-600 cursor-pointer hover:border-pink-500 hover:text-pink-500">
            m
          </li>
          <li className=" border rounded-full h-12 w-12 flex items-center justify-center font-semibold text-slate-600 cursor-pointer hover:border-pink-500 hover:text-pink-500">
            l
          </li>
          <li className=" border rounded-full h-12 w-12 flex items-center justify-center font-semibold text-slate-600 cursor-pointer hover:border-pink-500 hover:text-pink-500">
            xl
          </li>
        </ul>
        <div className="flex gap-4 my-5">
          <button className="flex items-center uppercase font-bold text-sm p-3 bg-pink-500 text-white w-full max-w-md hover:opacity-90 rounded-md gap-2 justify-center">
            <BsHandbagFill className="text-lg" />
            Add to bag
          </button>

          <button className="uppercase font-bold text-sm p-3 flex items-center gap-2 border rounded-md w-40 text-slate-600 hover:border-pink-600 justify-center">
            <CiHeart className="text-2xl" />
            Wishlist
          </button>
        </div>
        <hr />
        <div className="text-slate-500 flex gap-4 items-center my-5">
          <FaTruckArrowRight className="text-4xl " />
          <p className="font-semibold">
            Easy 14 days return & exchange available
          </p>
        </div>
        <p className="text-slate-600">100% Original Products</p>
        <p className="text-slate-500 text-sm mt-3">
          <span className="uppercase font-bold">Description : </span>
        </p>
        <p className="text-slate-500 text-sm mt-3">
          <span className="uppercase font-bold">Material : </span>
        </p>
        <p className="text-slate-500 text-sm mt-3">
          <span className="uppercase font-bold">Vendor : </span>
        </p>
      </div>
    </div>
  );
}

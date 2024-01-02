import React from "react";
import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { TbMinusVertical } from "react-icons/tb";

export default function ProductCard({ listing }) {
  console.log(listing);
  const discount = Math.floor(
    ((listing.actualPrice - listing.sellingPrice) / listing.actualPrice) * 100
  );
  return (
    <div className="bg-white hover:shadow-lg transition-shadow overflow-hidden w-full sm:w-[250px] my-5 rounded-md">
      <Link to={`/product/${listing.id}`}>
        <div className="relative">
          <img
            src={"/api/storage/view/" + listing.imageNames[0]}
            alt="product cover"
            className="h-[350px] sm:h-[280px] w-full object-cover hover:scale-105 transition-scale duration-300"
          />
          <div className="absolute bottom-1 left-2 gap-1 flex flex-row items-center text-black bg-white opacity-70 px-2 w-fit rounded-sm text-sm">
            <RiStarSFill className="text-md text-green-700" />
            <TbMinusVertical />5
          </div>
        </div>

        <div className="p-3 flex flex-col w-full mx-auto">
          <div className="flex flex-row items-center justify-between">
            <p className="truncate text-md font-semibold text-slate-900">
              {listing.brandName}
            </p>
            <CiHeart className="text-2xl hover:text-pink-500" />
          </div>
          <p className="truncate text-md text-slate-500">{listing.name}</p>
          <p className="truncate text-sm text-slate-700 font-bold flex gap-2 place-items-baseline ">
            Rs. {listing.sellingPrice}{" "}
            {listing.sellingPrice !== listing.actualPrice && (
              <>
                <span className="line-through text-xs font-normal text-gray-500">
                  Rs. {listing.actualPrice}
                </span>
                <span className="text-xs font-normal text-red-400">
                  {" "}
                  ({discount}% OFF)
                </span>
              </>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}

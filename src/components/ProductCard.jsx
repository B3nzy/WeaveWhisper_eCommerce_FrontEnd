import React from "react";
import { Link } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function ProductCard({ listing }) {
  console.log(listing);
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full sm:w-[270px] my-5">
      <Link to={`/product/${listing.id}`}>
        <img
          //   src={listing.imageUrls[0]}
          src="https://images.pexels.com/photos/2767159/pexels-photo-2767159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="product cover"
          className="h-[400px] sm:h-[300px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-1 w-full my-2 mx-auto text-center">
          <p className="truncate text-md font-medium text-yellow-500 capitalize">
            {listing.brandName}
          </p>
          <p className="truncate text-md font-light text-slate-700">
            {listing.name}
          </p>
          <p className="truncate text-sm text-slate-600 font-bold flex gap-2 items-center mx-auto">
            <FaIndianRupeeSign className="text-sm" /> {listing.actualPrice}
          </p>
          <p className="flex gap-2 items-center truncate text-xs text-green-600 font-semibold mx-auto">
            Offer price <FaIndianRupeeSign className="text-xs" />{" "}
            {listing.sellingPrice}
          </p>
        </div>
      </Link>
    </div>
  );
}

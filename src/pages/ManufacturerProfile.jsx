import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiShirtFoldedLight } from "react-icons/pi";
import { useSelector } from "react-redux";

export default function () {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const handleChange = () => {};
  const handleDeleteBrand = () => {};
  const handleListingDelete = () => {};
  const handleShowListings = () => {};
  const handleSignOut = () => {};
  const handleSubmit = () => {};
  console.log(currentUser);
  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col sm:flex-row gap-2">
      <div className="p-3 flex flex-col flex-1">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <PiShirtFoldedLight className="mx-auto text-6xl bg-gray-100 rounded-full p-3" />
          <input
            type="text"
            placeholder="brandName"
            defaultValue={currentUser.brandName}
            id="brandName"
            className=" border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            defaultValue={currentUser.email}
            id="email"
            className=" border p-3 rounded-lg"
            onChange={handleChange}
          />
          {/* <input
            type="password"
            placeholder="password"
            id="password"
            className=" border p-3 rounded-lg"
            onChange={handleChange}
          /> */}
          <button
            disabled={loading}
            className=" bg-slate-900 text-white rounded-lg p-3 uppercase hover:opacity-95  disabled:opacity-80"
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <span
            onClick={handleDeleteBrand}
            className="text-red-700 cursor-pointer hover:underline"
          >
            Delete account
          </span>
          <span
            onClick={handleSignOut}
            className="text-red-700 cursor-pointer hover:underline"
          >
            Sign out
          </span>
        </div>
        <p className="text-red-700 mt-5"></p>
        <p className="text-green-700 mt-5">
          {/* {updateSuccess ? "Profile is updated successfully!" : ""} */}
        </p>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <Link
          className="border border-[#379237] text-[#379237] hover:bg-[#379237] hover:text-white p-3 rounded-lg uppercase text-center my-4"
          to={"/create-product-listing"}
        >
          Create Listing
        </Link>
        <button
          onClick={handleShowListings}
          className="bg-green-700 w-full rounded-lg p-3 uppercase text-white hover:shadow-md hover:opacity-90 disabled:opacity-75 mb-3"
        >
          Show Listings
        </button>
        {/* <p className="text-red-700 mt-5">
          {showListingsError ? "Error showing listings" : ""}
        </p> */}
        {/* {show && userListings && userListings.length < 1 && ( */}
        <p className="text-red-600 text-xs">*No listing to show</p>
        {/* )} */}
        {/* {userListings && userListings.length > 0 && ( */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-center my-4">
            Your Listings
          </h1>
          {/* {userListings.map((listingItem) => ( */}
          <div
            // key={listingItem._id}
            className="border p-3 shadow-sm flex  items-center justify-between gap-4"
          >
            {/* <Link to={`/listing/${listingItem._id}`}>
                  <img
                    src={listingItem.imageUrls[0]}
                    alt="listing cover"
                    className="h-16 object-contain rounded-sm hover:shadow-md"
                  />
                </Link>
                <Link
                  to={`/listing/${listingItem._id}`}
                  className="text-slate-700 font-semibold hover:underline truncate w-full flex-1"
                >
                  <p>{listingItem.name}</p>
                </Link> */}

            <div className="flex flex-col items-center gap-1">
              <button
                // onClick={() => handleListingDelete(listingItem._id)}
                className="w-20 bg-red-600 text-white p-1 rounded-md hover:opacity-90"
              >
                Delete
              </button>
              {/* <Link to={`/update-listing/${listingItem._id}`}> */}
              <button className="w-20 border border-yellow-600 p-1 rounded-md text-yellow-600 hover:text-white hover:bg-yellow-600">
                Edit
              </button>
              {/* </Link> */}
            </div>
          </div>
          {/* ))} */}
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

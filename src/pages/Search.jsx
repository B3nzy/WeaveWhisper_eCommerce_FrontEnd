/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Search() {
  const [price, setPrice] = useState(1000);
  const [categoryClick, setCategoryClick] = useState(false);
  const [brandClick, setBrandClick] = useState(false);
  const [colorClick, setColorClick] = useState(false);
  console.log(price);
  const SIZEENUM = ["S", "M", "L", "XL"];
  const COLORENUM = [
    "Red",
    "Blue",
    "Orange",
    "Black",
    "White",
    "Pink",
    "Green",
    "Yellow",
    "Purple",
  ];
  const CATEGORYENUM = [
    "pant",
    "shirt",
    "t-shirt",
    "dress",
    "saree",
    "sweater",
    "hoodie",
    "jacket",
    "top",
    "jeans",
  ];
  const handleCategoryClick = () => {
    setCategoryClick(!categoryClick);
  };
  const handleColorClick = () => {
    setColorClick(!colorClick);
  };
  const handleBrandClick = () => {
    setBrandClick(!brandClick);
  };
  return (
    <div className="flex flex-col md:flex-row">
      {/* <div className=" border-b-2 md:min-h-screen md:sticky md:top-20 md:h-screen"> */}
      <div className=" border-b-2 ">
        <form className="flex flex-col gap-8">
          {/* <div className=" flex items-center gap-2 mx-5 mt-5">
            <label className="whitespace-nowrap font-semibold">
              Search Term :{" "}
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-2 w-full"
            />
          </div> */}
          <div className="flex justify-between ml-5 mr-3 mb-[-15px] mt-5">
            <h1 className="font-bold">FILTERS</h1>
            <button className="text-xs font-semibold text-red-400">
              CLEAR ALL
            </button>
          </div>
          <hr />
          <div className=" flex flex-col gap-2 my-[-15px] mx-5 text-sm font-semibold text-slate-800">
            <label className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                id="gender"
                className="w-[16px] accent-black"
              />
              <p>Men</p>
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                id="gender"
                className="w-[16px] accent-black"
              />
              <p>Women</p>
            </label>
          </div>

          <hr />
          <div className=" flex flex-col gap-2 my-[-15px] mx-5">
            <div
              className="font-bold text-[13px] text-gray-800 mb-2 flex justify-between cursor-pointer"
              onClick={handleBrandClick}
            >
              BRAND <span className="text-lg">+</span>
            </div>
            {brandClick && (
              <>
                {" "}
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gender"
                    id="gender"
                    className="w-4 accent-black"
                  />
                  <p className="text-xs">Xyz</p>
                </label>
              </>
            )}
          </div>
          <hr />
          <div className="relative flex flex-col gap-2 mt-[-15px] mx-5 mb-3">
            <p className="font-bold text-[13px] text-gray-800 mb-2">
              PRICE <span className="ml-3 text-gray-500">100 - {price}</span>
            </p>
            <input
              name="price"
              value={price}
              type="range"
              min="100"
              max="9000"
              className="cursor-pointer w-full outline-none focus:outline-none "
              // style={{ WebkitAppearance: "none" }}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span className="text-xs text-gray-500 absolute start-0 -bottom-6">
              Rs. 100
            </span>
            <span className="text-xs text-gray-500 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              3000
            </span>
            <span className="text-xs text-gray-500 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              6000
            </span>
            <span className="text-xs text-gray-500 absolute end-0 -bottom-6">
              9000
            </span>
          </div>
          <hr />
          <div className=" flex flex-col gap-2 my-[-15px] mx-5">
            <div
              className="font-bold text-[13px] text-gray-800 mb-2 flex justify-between items-center cursor-pointer"
              onClick={handleCategoryClick}
            >
              CATEGORY <span className="text-lg">+</span>
            </div>
            {categoryClick &&
              CATEGORYENUM.map((item) => (
                <>
                  <label className="flex gap-3 cursor-pointer" key={item}>
                    <input
                      type="checkbox"
                      name="category"
                      id="category"
                      className="w-4 accent-black"
                    />
                    <p className="text-[13px] capitalize">{item}</p>
                  </label>
                </>
              ))}
          </div>
          <hr />
          <div className=" flex flex-wrap gap-6 my-[-15px] mx-5 items-center">
            <p className="font-bold text-[13px] text-gray-800">SIZE</p>
            {SIZEENUM.map((item) => (
              <>
                <label
                  className="flex gap-1 cursor-pointer items-center whitespace-nowrap"
                  key={item}
                >
                  <input
                    type="checkbox"
                    name="size"
                    id="size"
                    className="w-4 h-4 accent-black"
                  />
                  <p className="text-[13px] capitalize">{item}</p>
                </label>
              </>
            ))}
          </div>

          <hr />
          <div className=" flex flex-col gap-2 my-[-15px] mx-5">
            <div
              className="font-bold text-[13px] text-gray-800 mb-2 flex justify-between cursor-pointer"
              onClick={handleColorClick}
            >
              COLOR <span className="text-lg">+</span>
            </div>
            {colorClick &&
              COLORENUM.map((item) => (
                <>
                  <label className="flex gap-3 cursor-pointer" key={item}>
                    <input
                      type="checkbox"
                      name="category"
                      id="category"
                      className="w-4 accent-black"
                    />
                    <p className="text-[13px] capitalize">{item}</p>
                  </label>
                </>
              ))}
          </div>
          <hr />

          <button className="bg-black text-white uppercase hover:opacity-90 m-2 p-3 disabled:opacity-75">
            Search
          </button>
        </form>
      </div>
      <div className="flex-1 md:border-l-2 overflow-y-auto">
        <div className="border-b p-3 mt-3 flex flex-row items-center justify-between">
          <h1 className="text-3xl font-semibold  text-slate-700 ">
            Listing Results:
          </h1>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort By :</label>
            <select
              id="sort_order"
              className="border rounded-lg p-2 text-gray-700"
            >
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col md:flex-row gap-3">
    //   <div className="flex flex-col md:max-w-xs w-full bg-slate-100 p-3 gap-2">
    //     <p className="text-lg font-semibold">Sizes : </p>
    //     <div className="flex flex-row w-60 justify-between gap-3">
    //       <label className="flex items-center gap-1">
    //         <input
    //           type="checkbox"
    //           name="sizes"
    //           className="h-4 w-4"
    //           value={"s"}
    //         />
    //         <span>S</span>
    //       </label>
    //       <label className="flex items-center gap-1">
    //         <input
    //           type="checkbox"
    //           name="sizes"
    //           className="h-4 w-4"
    //           value={"m"}
    //         />
    //         <span>M</span>
    //       </label>
    //       <label className="flex items-center gap-1">
    //         <input
    //           type="checkbox"
    //           name="sizes"
    //           className="h-4 w-4"
    //           value={"l"}
    //         />
    //         <span>L</span>
    //       </label>
    //       <label className="flex items-center gap-1">
    //         <input
    //           type="checkbox"
    //           name="sizes"
    //           className="h-4 w-4"
    //           value={"xl"}
    //         />
    //         <span>XL</span>
    //       </label>
    //     </div>
    //   </div>
    //   <div className="w-full p-3">
    //     <div>
    //       <span className="text-xl">Results : </span>
    //       <span className="text-xl">10345 matches found</span>
    //       <br />
    //       <span className="text-sm">
    //         Check each product page for other buying options.
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
}

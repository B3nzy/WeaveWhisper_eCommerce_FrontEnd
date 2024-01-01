/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/products");
        if (res.status !== 200) {
          setLoading(false);
          setErrors(true);
          console.log(res);
        }
        setLoading(false);
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);
  console.log(products);
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
              BRAND <span className="text-lg">{brandClick ? "-" : "+"}</span>
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
              CATEGORY{" "}
              <span className="text-lg">{categoryClick ? "-" : "+"}</span>
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
              COLOR <span className="text-lg">{colorClick ? "-" : "+"}</span>
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
        <div className="p-3 flex gap-7 mx-5 flex-wrap">
          {!loading && products.length === 0 && (
            <p className="text-2xl text-slate-400 text-center mt-36 w-full">
              Sorry!! Nothing found!
            </p>
          )}
          {loading && (
            <p className="text-xl text-slate-600 text-center w-full">
              Loading...
            </p>
          )}

          {!loading &&
            products &&
            products.map((product) => {
              return <ProductCard key={product.id} listing={product} />;
            })}
        </div>
      </div>
    </div>
  );
}

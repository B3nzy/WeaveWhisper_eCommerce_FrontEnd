/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsHandbagFill } from "react-icons/bs";
import { FaTruckArrowRight } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import PopUpMessage from "../components/PopUpMessage";

export default function Product() {
  const location = useLocation();
  const toastEffectRan = useRef(false);

  const images = [
    "https://images.pexels.com/photos/5255159/pexels-photo-5255159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [displayImg, setDisplayImg] = useState(images[0]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const params = useParams();
  console.log(productDetails);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/products/get/${params.productId}`);
        if (res.status !== 200) {
          setLoading(false);
          setErrors(true);
          return;
        }
        setProductDetails(res.data);
        setErrors(false);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErrors(true);
      }
    };
    fetchProduct();
  }, [params.productId]);
  const handleAddToCart = () => {
    const product = {
      id: productDetails.id,
      name: productDetails.name,
    };
  };
  return (
    <>
      <div className="my-14 mx-10 flex flex-col md:flex-row gap-4 justify-between relative">
        {loading && (
          <p className="text-center my-20 text-2xl mx-auto font-semibold text-black">
            Loading...
          </p>
        )}
        {errors && (
          <p className="text-center my-20 text-2xl mx-auto font-semibold text-gray-500">
            Something went wrong!
          </p>
        )}
        {productDetails && !errors && !loading && (
          <>
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
              <h1 className="text-xl font-semibold capitalize">
                {productDetails.name}
              </h1>
              <p className="text-md text-gray-400 ">
                {productDetails.brandName}
              </p>
              <hr />
              {productDetails.sellingPrice !== productDetails.actualPrice ? (
                <p className="txet-lg text-gray-500">
                  MRP
                  <span className="line-through mx-2">
                    Rs. {productDetails.actualPrice}
                  </span>
                  <span className="text-black">
                    {productDetails.sellingPrice}
                  </span>
                </p>
              ) : (
                <p className="txet-lg text-gray-500">
                  MRP Rs.{productDetails.actualPrice}
                </p>
              )}

              <p className="text-green-500 font-semibold">
                inclusive of all taxes
              </p>
              <p className="my-4 font-semibold">SELECT SIZE</p>
              <ul className="flex items-center gap-4 uppercase">
                {productDetails.sizes.map((size) => (
                  <li
                    key={size}
                    className=" border rounded-full h-12 w-12 flex items-center justify-center font-semibold text-slate-600 cursor-pointer hover:border-pink-500 hover:text-pink-500"
                  >
                    {size}
                  </li>
                ))}
              </ul>
              <ul className="flex items-center gap-4 mt-2 flex-wrap">
                {productDetails.colors.map((color) => (
                  <li
                    key={color}
                    className="capitalize border rounded-lg p-1 flex items-center justify-center font-semibold text-slate-600 cursor-pointer hover:border-pink-500 hover:text-pink-500 bg-green-50"
                  >
                    {color}
                  </li>
                ))}
              </ul>
              {productDetails.inventoryCount < 6 && (
                <div className="text-red-600">
                  Hurry! Only {productDetails.inventoryCount} products left
                </div>
              )}
              <div className="flex gap-4 my-5">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center uppercase font-bold text-sm p-3 bg-pink-500 text-white w-full max-w-md hover:opacity-90 rounded-md gap-2 justify-center"
                >
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
                <span className="uppercase font-bold mr-3">Description :</span>
                {productDetails.description}
              </p>
              <p className="text-slate-500 text-sm mt-3">
                <span className="uppercase font-bold mr-3">Vendor :</span>
                {productDetails.brandName}
              </p>
            </div>
          </>
        )}
      </div>
      {productDetails && !errors && !loading && (
        <div className="flex justify-centers mx-auto   mb-10 w-full flex-col max-w-lg md:max-w-4xl">
          <div className="border rounded-lg p-3 mt-5">
            <p className="text-lg text-gray-800 font-semibold mb-5">Reviews</p>
            <div>
              <div className="flex gap-2 items-center mb-2">
                <BsPerson className="text-xl rounded-full bg-blue-200 h-8 w-8 p-1 text-gray-500" />
                <p className="capitalize text-sm font-medium text-gray-600">
                  name name
                </p>
              </div>
              <ul className="flex gap-1">
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
              </ul>
              <p className="text-gray-500 text-sm ">Review message</p>
              <hr className="my-5" />
            </div>
            <div>
              <div className="flex gap-2 items-center mb-2">
                <BsPerson className="text-xl rounded-full bg-blue-200 h-8 w-8 p-1 text-gray-500" />
                <p className="capitalize text-sm font-medium text-gray-600">
                  name name
                </p>
              </div>
              <ul className="flex gap-1">
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
                <li>
                  <RiStarSFill className="text-xl text-yellow-500" />
                </li>
              </ul>
              <p className="text-gray-500 text-sm ">Review message</p>
              <hr className="my-5" />
            </div>
          </div>
          <div className="border rounded-lg p-3 mt-5">
            <form>
              <input
                className=" border-b-2 w-full hover:outline-none outline-none mt-3 focus:border-blue-200"
                type="textarea"
                placeholder="write a review....."
              />
              <div className="flex items-center justify-between">
                <label className="flex gap-4 items-center mt-3">
                  <p className="text-gray-500 font-medium">Rating : </p>
                  <select
                    name="rating"
                    id="rating"
                    className="border rounded-lg p-1 outline-gray-200 cursor-pointer"
                  >
                    <option className="text-slate-500">choose rating</option>
                    <option value="ONE">1 </option>
                    <option value="TWO">2</option>
                    <option value="THREE">3</option>
                    <option value="FOUR">4</option>
                    <option value="FIVE">5</option>
                  </select>
                </label>
                <button className="uppercase text-blue-500 border p-1 font-semibold border-blue-500 hover:shadow-md rounded-md w-20">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

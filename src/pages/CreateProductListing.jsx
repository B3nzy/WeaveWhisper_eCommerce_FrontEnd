import React from "react";
import { MdFileUpload } from "react-icons/md";

export default function CreateProductListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto ">
      <h1 className="text-center font-semibold text-3xl my-7 text-pink-500">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4 mx-3">
        <div className="flex flex-col flex-1 gap-4">
          <div>
            <p className="text-slate-800">Product name</p>
            <input
              type="text"
              placeholder="product name"
              className="p-3 border rounded-lg w-full"
            />
          </div>
          <div>
            <p className="text-slate-800">Description</p>
            <textarea
              type="text"
              placeholder="decription"
              className="p-3 border rounded-lg w-full"
            />
          </div>
          <div className="flex gap-6 text-slate-800">
            <p className="">Gender : </p>
            <div className="flex gap-2">
              <input type="radio" name="gender" />
              <label>Male</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="gender" />
              <label>Female</label>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <label className=" text-slate-800">Inventory count : </label>
            <input
              type="number"
              placeholder="0"
              className="p-3 border rounded-lg w-36"
            />
          </div>
          <div className="flex flex-wrap items-center gap-6 text-slate-800">
            <p>Sizes : </p>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="s" className="h-4 w-4" />
              <p>S</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="m" className="h-4 w-4" />
              <p>M</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="l" className="h-4 w-4" />
              <p>L</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="xl" className="h-4 w-4" />
              <p>XL</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-slate-800">
            <p className="mr-3">Color : </p>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="red" className="h-4 w-4" />
              <p>Red</p>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="green" className="h-4 w-4" />
              <p>Green</p>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="blue" className="h-4 w-4" />
              <p>Blue</p>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="yellow" className="h-4 w-4" />
              <p>Yellow</p>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="black" className="h-4 w-4" />
              <p>Black</p>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="white" className="h-4 w-4" />
              <p>White</p>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="orange" className="h-4 w-4" />
              <p>Orange</p>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <input type="checkbox" name="purple" className="h-4 w-4" />
              <p>Purple</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>Category : </p>
            <select name="category" className="border rounded-lg p-3">
              <option className="text-slate-500">--select category--</option>
              <option value="pant">Pant</option>
              <option value="shirt">Shirt</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="dress">Dress</option>
              <option value="saree">Saree</option>
              <option value="sweater">Sweater</option>
              <option value="hoodie">Hoodie</option>
              <option value="jacket">Jacket</option>
              <option value="top">Top</option>
              <option value="jeans">Jeans</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <label className=" text-slate-800">Price : </label>
            <input
              type="number"
              placeholder="0"
              className="p-3 border rounded-lg w-36"
            />
          </div>
          <div className="flex gap-4 items-center">
            <label className=" text-slate-800">Selling price : </label>
            <input
              type="number"
              placeholder="0"
              className="p-3 border rounded-lg w-36"
            />
            <input type="checkbox" name="orange" className="h-3 w-3 ml-5" />
            <p className="ml-[-5px]">same as price</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 4)
            </span>
          </p>
          <div className="flex gap-4">
            <input type="file" className="p-3 border rounded-md w-full" />
            <button className="flex items-center gap-2 p-3 border border-green-600 rounded-md text-green-600 uppercase hover:shadow-lg">
              <MdFileUpload className="text-xl" />
              Upload
            </button>
          </div>
          <button className="p-3 my-5 bg-pink-400 text-white uppercase font-semibold hover:opacity-90 disabled:opacity-80 rounded-lg">
            Create listing
          </button>
        </div>
      </form>
      <hr className="my-7" />
    </main>
  );
}

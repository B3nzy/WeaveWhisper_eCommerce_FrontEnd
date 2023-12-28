/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { MdFileUpload } from "react-icons/md";
import { productSchema } from "../schemas/productValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProductListing() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    console.log("submitted");
    console.log(values);
    setLoading(true);
    try {
      const res = await axios.post("/api/products/add", values);
      if (res.status !== 201) {
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log(res.data);
      navigate("/product");
    } catch (err) {
      setLoading(false);
      console.log(err.response.data.message);
    }
  };
  const [sellingPriceDisabled, setSellingPriceDisabled] = useState(false);
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
    "tshirt",
    "dress",
    "saree",
    "sweater",
    "hoodie",
    "jacket",
    "top",
    "jeans",
  ];
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      actualPrice: 0,
      sellingPrice: 0,
      inventoryCount: 0,
      colors: [],
      sizes: [],
      gender: "",
      imageUrls: [],
      category: "",
    },
    validationSchema: productSchema,
    onSubmit,
  });
  const handleSellingPrice = (e) => {
    if (e.target.checked) {
      setSellingPriceDisabled(true);
      setFieldValue("sellingPrice", values.actualPrice);
    } else {
      setSellingPriceDisabled(false);
    }
  };
  console.log(values);
  useEffect(() => {
    if (sellingPriceDisabled) {
      setFieldValue("sellingPrice", values.actualPrice);
    }
  }, [values.actualPrice]);
  return (
    <main className="p-3 max-w-4xl mx-auto ">
      <h1 className="text-center font-semibold text-3xl my-7 text-pink-500">
        Create a Listing
      </h1>
      <form
        className="flex flex-col sm:flex-row gap-4 mx-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col flex-1 gap-4">
          <div>
            <p className="text-slate-800">Product name</p>
            <input
              type="text"
              placeholder="product name"
              className="p-3 border rounded-lg w-full"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && touched.name && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.name}
            </p>
          )}
          <div>
            <p className="text-slate-800">Description</p>
            <textarea
              type="text"
              placeholder="decription"
              className="p-3 border rounded-lg w-full"
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.description && touched.description && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.description}
            </p>
          )}
          <div className="flex gap-6 text-slate-800">
            <p className="">Gender : </p>
            <div className="flex gap-2">
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value={"MEN"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Male
              </label>
            </div>
            <div className="flex gap-2">
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value={"WOMEN"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Female
              </label>
            </div>
          </div>
          {errors.gender && touched.gender && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.gender}
            </p>
          )}
          <div className="flex gap-4 items-center">
            <label className=" text-slate-800">Inventory count : </label>
            <input
              type="number"
              placeholder="0"
              className="p-3 border rounded-lg w-36"
              id="inventoryCount"
              name="inventoryCount"
              value={values.inventoryCount}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.inventoryCount && touched.inventoryCount && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.inventoryCount}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-6 text-slate-800">
            <p>Sizes : </p>
            {SIZEENUM &&
              SIZEENUM.map((item) => (
                <label
                  className="flex items-center gap-1 whitespace-nowrap"
                  key={item}
                >
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    value={item}
                    checked={values.sizes.includes(item)}
                    name="sizes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span>{item}</span>
                </label>
              ))}
          </div>
          {errors.sizes && touched.sizes && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.sizes}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2 text-slate-800">
            <p className="mr-3">Color : </p>
            {COLORENUM.map((item) => (
              <label
                className="flex items-center gap-1 mr-3 whitespace-nowrap"
                key={item.toUpperCase()}
              >
                <input
                  type="checkbox"
                  name="colors"
                  className="h-4 w-4"
                  value={item.toUpperCase()}
                  checked={values.colors.includes(item.toUpperCase())}
                  onChange={handleChange}
                />
                <p>{item}</p>
              </label>
            ))}
          </div>
          {errors.colors && touched.colors && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.colors}
            </p>
          )}
          <div className="flex gap-4 items-center">
            <p>Category : </p>
            <select
              name="category"
              id="category"
              className="border rounded-lg p-3 capitalize"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option className="text-slate-500">--select category--</option>
              {CATEGORYENUM.map((item) => (
                <option
                  value={item.toUpperCase()}
                  key={item.toUpperCase()}
                  className="capitalize text-slate-600"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          {errors.category && touched.category && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.category}
            </p>
          )}
          <div className="flex gap-4 items-center">
            <label className=" text-slate-800">Price : </label>
            <input
              type="number"
              placeholder="0"
              className="p-3 border rounded-lg w-36"
              name="actualPrice"
              id="actualPrice"
              value={values.actualPrice}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.actualPrice && touched.actualPrice && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.actualPrice}
            </p>
          )}
          <div className="flex gap-4 items-center">
            <label className=" text-slate-800">Selling price : </label>
            <input
              type="number"
              placeholder="0"
              className="p-3 border rounded-lg w-36"
              name="sellingPrice"
              id="sellingPrice"
              value={values.sellingPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={sellingPriceDisabled}
            />
            <label className="ml-4 flex flex-row whitespace-nowrap gap-1 items-center">
              <input
                type="checkbox"
                name="sellingPrice"
                className="h-4 w-4"
                onClick={handleSellingPrice}
              />
              <span>same as price</span>
            </label>
          </div>
          {errors.sellingPrice && touched.sellingPrice && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.sellingPrice}
            </p>
          )}
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 4)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              type="file"
              className="p-3 border rounded-md w-full"
              accept="image/*"
              multiple
              name="imageUrls"
              id="imageUrls"
              value={values.imageUrls}
              onChange={handleChange}
            />

            <button className="flex items-center gap-2 p-3 border border-green-600 rounded-md text-green-600 uppercase hover:shadow-lg">
              <MdFileUpload className="text-xl" />
              Upload
            </button>
          </div>
          {errors.imageUrls && touched.imageUrls && (
            <p className="text-red-500 mt-[-12px] text-xs ml-2">
              {errors.imageUrls}
            </p>
          )}
          <button
            onSubmit={handleSubmit}
            disabled={loading}
            type="submit"
            className="p-3 my-5 bg-pink-400 text-white uppercase font-semibold hover:opacity-90 disabled:opacity-80 rounded-lg"
          >
            Create listing
          </button>
        </div>
      </form>
      <hr className="my-7" />
    </main>
  );
}

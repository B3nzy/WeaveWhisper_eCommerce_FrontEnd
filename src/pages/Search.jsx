/* eslint-disable no-unused-vars */
import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="flex flex-col md:max-w-xs w-full bg-slate-100 p-3 gap-2">
        <p className="text-lg font-semibold">Sizes : </p>
        <div className="flex flex-row w-60 justify-between gap-3">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="sizes"
              className="h-4 w-4"
              value={"s"}
            />
            <span>S</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="sizes"
              className="h-4 w-4"
              value={"m"}
            />
            <span>M</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="sizes"
              className="h-4 w-4"
              value={"l"}
            />
            <span>L</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="sizes"
              className="h-4 w-4"
              value={"xl"}
            />
            <span>XL</span>
          </label>
        </div>
      </div>
      <div className="w-full p-3">
        <div>
          <span className="text-xl">Results : </span>
          <span className="text-xl">10345 matches found</span>
          <br />
          <span className="text-sm">
            Check each product page for other buying options.
          </span>
        </div>
      </div>
    </div>
  );
}

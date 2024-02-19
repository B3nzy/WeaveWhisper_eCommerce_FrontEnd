import React from "react";
import { RiBillLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ManufacturerDashboard() {
  return (
    <div className="min-h-screen">
      <div className="p-6 m-10 mt-14 ">
        <p className="text-slate-500 font-semibold text-2xl flex items-center gap-1">
          <RiBillLine className="text-4xl text-cyan-200" /> My Dashboard
        </p>
        <hr />
        <div className="flex w-full flex-col md:flex-row gap-10 my-6 mx-auto p-3 items-center ">
          <div className="bg-cyan-50 p-3 w-full flex flex-col items-center mx-auto justify-center gap-2 py-2 h-72">
            <FaShippingFast className="text-9xl text-cyan-200" />
            <Link
              to="/brand-dashboard/update-ordertracking"
              className="border-2 p-3 rounded-sm outline-none hover:bg-cyan-300 border-cyan-300 hover:text-white font-semibold uppercase text-cyan-500"
            >
              Update Order Tracking
            </Link>
          </div>
          <div className="bg-purple-50 p-3 w-full flex flex-col items-center mx-auto justify-center gap-2 py-7 h-72">
            <TbTruckReturn className="text-9xl text-purple-200" />
            <Link
              to="/brand-dashboard/update-orderreturn-status"
              className="border-2 p-3 rounded-sm outline-none hover:bg-purple-300 border-purple-300 hover:text-white font-semibold uppercase text-purple-500"
            >
              Update Return Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdminHomePage() {
  return (
    <div className="min-h-screen">
      <div className="p-6 m-10 mt-14 ">
        <p className="text-slate-500 font-semibold text-2xl flex items-center gap-3">
          <MdAdminPanelSettings className="text-4xl" /> Admin Dashboard
        </p>
        <hr />
        <div className="flex w-full flex-col md:flex-row gap-10 my-6 mx-auto p-3 items-center ">
          <div className="bg-yellow-50 p-3 w-full flex flex-col items-center mx-auto justify-center gap-6">
            <MdOutlineManageHistory />
            <Link to="/admin-verify-manufacturer">Pending Manufacturers</Link>
          </div>
          <div className="bg-green-50 p-3 w-full flex flex-col items-center mx-auto justify-center gap-6">
            <MdOutlineManageHistory />
            <Link to="/admin-list-manufacturer">Delete Manufacturers</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

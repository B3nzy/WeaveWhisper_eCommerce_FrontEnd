/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PendingManufacturerCard from "../components/PendingManufacturerCard";

export default function AdminHomePage() {
  const [manufacturerList, setManufacturerList] = useState([]);

  const fetchPendingManufacturerRegistration = async () => {
    try {
      const res = await axios.get(
        "/api/admin/getrequestedmanufacturerregistration"
      );
      if (res.status !== 200) {
        console.log(res);
        return;
      }
      console.log(res.data);
      setManufacturerList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPendingManufacturerRegistration();
  }, []);

  const registrationRequestsubmit = async (val) => {
    const res = await axios.post(
      "/api/admin/changemanufactureraccountstatus",
      val
    );
    console.log(res);
    if (res.status !== 200) {
      console.log(res);
      return;
    }
    toast.success(res.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setManufacturerList((prev) =>
      prev.filter((item) => item.id !== val.manufacturerId)
    );
  };

  return (
    <>
      <ToastContainer newestOnTop={true} className="top-16 w-fit" />
      <div className="flex flex-col gap-3 max-w-6xl mx-auto items-center">
        <span className="p-6 font-semibold text-slate-700 text-2xl">
          Pending Manufacturer Registration
        </span>
        <hr className="w-full" />
        <div className="flex flex-col max-w-4xl gap-3 ">
          {manufacturerList &&
            manufacturerList.map((item, index) => (
              <PendingManufacturerCard
                registrationRequestsubmit={registrationRequestsubmit}
                item={item}
                key={index}
              />
            ))}
        </div>
      </div>
    </>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function PendingManufacturerCard({
  item,
  registrationRequestsubmit,
}) {
  console.log(item);
  return (
    <div className="border w-full flex flex-row p-3 gap-3">
      <div className="flex flex-col gap-2">
        <span>Manufacturer Email : {item.email}</span>
        <span>Manufacturer Brand name : {item.brandName}</span>
        <span>Manufacturer Pan Number : {item.panNumber}</span>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <button
          className="p-3 border text-green-600 border-green-600"
          onClick={() => {
            registrationRequestsubmit({
              manufacturerId: item.id,
              accountStatus: "ACCEPTED",
            });
          }}
        >
          Accept
        </button>
        <button
          className="p-3 border text-red-600 border-red-600"
          onClick={() => {
            registrationRequestsubmit({
              manufacturerId: item.id,
              accountStatus: "REJECTED",
            });
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

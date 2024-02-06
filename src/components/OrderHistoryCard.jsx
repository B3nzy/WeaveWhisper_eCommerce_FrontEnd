import React from "react";
import { Link } from "react-router-dom";
import { PiPackageDuotone } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

export default function OrderHistoryCard({
  orderItem,
  cancelOrder,
  customerId,
}) {
  console.log(orderItem);
  const cancelDetails = {
    customerId: customerId,
    orderId: orderItem.orderHistoryId,
    productId: orderItem.productId,
  };
  console.log(cancelDetails);

  return (
    <div className="p-3 border rounded-sm bg-gray-50">
      <div className="flex flex-row gap-2 items-center">
        <PiPackageDuotone className="border rounded-full text-3xl text-amber-700 bg-white opacity-50" />
        <div className="flex flex-col uppercase text-xs text-slate-700 gap-1">
          <p className="font-semibold">
            <span>Order Status: </span>
            <span>{orderItem.orderStatus}</span>
          </p>
          <p className="font-semibold text-slate-400 capitalize">
            <span>Order Placed </span>
            <span className="lowercase">on {orderItem.orderDate}</span>
          </p>
        </div>
        <p className="ml-auto text-xs text-slate-700">
          <span className="uppercase font-semibold">Receipt Id: </span>{" "}
          {orderItem.receipt}
        </p>
      </div>
      <div className="border p-3 flex flex-row gap-2 bg-white mt-3">
        <div className="w-32 md:ml-5">
          <Link to={`/product/${orderItem.productId}`}>
            <img
              className="cursor-pointer max-h-36 object-contain hover:shadow-lg"
              src={"/api/storage/view/" + orderItem.imageName}
              alt="product cover"
            />
          </Link>
        </div>

        <div className="p-1">
          <div className="flex flex-row justify-between items-center ">
            <div className="">
              <p className="font-semibold truncate w-full text-slate-800">
                {orderItem.brandName}
              </p>
              <p className="text-md text-slate-700 truncate w-full">
                {orderItem.name}
              </p>
              <div className="my-2 flex flex-row items-center gap-4 text-sm">
                <p className="border p-1 rounded-sm px-3 text-center">
                  Size: {orderItem.size}
                </p>
                <p className="border p-1 rounded-sm px-3 text-center ">
                  Color: <span className="lowercase">{orderItem.color}</span>
                </p>
                <div className="border p-1 rounded-sm px-3 flex justify-center ">
                  Qty: 1
                </div>
              </div>
            </div>

            <div className="">
              {orderItem.orderStatus === "PROCESSING" && (
                <button
                  onClick={() => {
                    cancelOrder(cancelDetails);
                  }}
                  className="uppercase text-sm font-semibold text-red-600 border-red-600 border p-1 rounded-sm px-3 flex justify-center hover:bg-red-600 hover:text-white "
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
          <div className="gap-1 font-semibold flex flex-row text-xs text-gray-500 items-start sm:text-sm">
            <TbTruckDelivery className="text-lg" />
            <p>
              <span className="uppercase"> Shipping Details - </span>
              {orderItem.address} |
              <span> Contact - {orderItem.phoneNumber}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

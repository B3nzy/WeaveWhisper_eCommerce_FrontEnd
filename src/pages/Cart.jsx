/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CartProductCard from "../components/CartProductCard";
import { useSelector } from "react-redux";
import axios from "axios";
import RemoveFromCartModal from "../components/RemoveFromCartModal";
import { ToastContainer, toast } from "react-toastify";
import { FaIndianRupeeSign } from "react-icons/fa6";
const APIkey = import.meta.env.VITE_OPENCAGE_API_KEY;

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [totalMrp, setTotalMrp] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [address, setAddress] = useState(currentUser.address);
  const [showChangeAddress, setShowChangeAddress] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [count, setCount] = useState(0);
  const [showAddShippingButton, setShowAddShippingButton] = useState(
    currentUser && currentUser.address ? true : false
  );
  console.log(currentUser);

  const handleChangeAddress = () => {
    setShowChangeAddress(true);
  };
  const handleRemoveFromCart = (item) => {
    setCartItem(item);
    setShowModal(true);
  };

  const handleMoveToWishList = async () => {
    const customerId = currentUser.id;
    const productId = cartItem.productId;
    try {
      const res = await axios.post("/api/wishlists/add", {
        customerId,
        productId,
      });

      removeFromCart();
      closeModalAction();
    } catch (err) {
      console.log(err);
      console.log(err.request.status);
      if (err.request.status === 409) {
        removeFromCart();
      }
      closeModalAction();
    }
  };
  const removeFromCart = async () => {
    try {
      const res = await axios.delete(
        `/api/cart/${cartItem.cartId}/customer/${currentUser.id}`
      );
      if (res.status !== 200) {
        console.log(res);
        return;
      }
      closeModalAction();
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const closeModalAction = () => {
    setShowModal(false);
  };
  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/cart/${currentUser.id}`);
      console.log(res);
      if (res.status !== 200) {
        setLoading(false);
        console.log(res);
        return;
      }
      setLoading(false);
      setCartItems(res.data);
      calculateMrps(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  const calculateMrps = (cartItems) => {
    let totalPrice = 0;
    let totalSellingPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].actualPrice;
      if (cartItems[i].sellingPrice) {
        totalSellingPrice += cartItems[i].sellingPrice;
      }
    }
    let totalDiscount = totalPrice - totalSellingPrice;
    setTotalMrp(totalPrice);
    setTotalDiscount(totalDiscount);
  };

  const getLocationInfo = (latitude, longitude) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status.code === 200) {
          console.log("results:", data.results);
          setNewAddress(data.results[0].formatted);
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  };
  const success = (pos) => {
    console.log(pos);
    let crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    getLocationInfo(crd.latitude, crd.longitude);
  };

  const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const handleAddress = () => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        console.log(result);
        if (result.state === "granted") {
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "prompt") {
          //If prompt then the user will be asked to give permission
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
      });
    } else {
      console.log("Geolocation not supported");
    }
  };

  useEffect(() => {
    if (address === "" || address === null) {
      setShowAddShippingButton(false);
    }
  }, [address, count]);

  return (
    <>
      <ToastContainer newestOnTop={true} className="top-16 w-fit" />
      {showModal && (
        <RemoveFromCartModal
          item={cartItem}
          customerId={currentUser.id}
          closeModalAction={closeModalAction}
          removeFromCart={removeFromCart}
          handleMoveToWishList={handleMoveToWishList}
        />
      )}
      <div className="p-3 max-w-6xl mx-auto mb-10">
        {loading ? (
          "Loading....."
        ) : (
          <>
            <h1 className="text-center font-semibold text-3xl my-7 text-black">
              My Bag
            </h1>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col flex-1 gap-4 ">
                {!loading &&
                  cartItems &&
                  cartItems.map((item, index) => (
                    <CartProductCard
                      key={index}
                      cartItem={item}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  ))}
              </div>
              <div className="flex flex-col flex-1 gap-2 p-3 text-slate-600 pl-4 sm:border-l ">
                <div className="border p-3 mb-5 gap-2 flex flex-row items-center">
                  {showAddShippingButton ? (
                    <>
                      <div className="flex flex-col gap-2 w-full">
                        <p>
                          Deliver to:{" "}
                          <span className="font-semibold">
                            {currentUser.fullName}
                          </span>
                        </p>
                        {!showChangeAddress && (
                          <p>
                            Address:{" "}
                            <span className="font-semibold text-slate-500">
                              {address}
                            </span>
                          </p>
                        )}
                        {showChangeAddress && (
                          <textarea
                            value={newAddress}
                            onChange={(e) => setNewAddress(e.target.value)}
                            className="w-full border outline-none h-28"
                          />
                        )}
                      </div>
                      <div className=" flex flex-col gap-2">
                        {showChangeAddress ? (
                          <>
                            <button
                              onClick={() => {
                                setAddress(newAddress);
                                console.log(address);
                                console.log(newAddress);
                                setNewAddress("");
                                setCount(count + 1);
                                setShowChangeAddress(false);
                              }}
                              className="rounded-sm border uppercase text-xs p-2 font-semibold text-green-400 border-green-400 cursor-pointer hover:shadow-md"
                            >
                              Save
                            </button>
                            <button
                              onClick={handleAddress}
                              className="rounded-sm border uppercase text-xs p-2 font-semibold text-green-400 border-green-400 cursor-pointer hover:shadow-md"
                            >
                              Current Location
                            </button>
                            <button
                              onClick={() => {
                                setNewAddress("");
                                setShowChangeAddress(false);
                                if (address === "" || address === null) {
                                  setShowAddShippingButton(false);
                                }
                              }}
                              className="rounded-sm border uppercase text-xs p-2 font-semibold text-red-400 border-red-400 cursor-pointer hover:bg-red-500 hover:text-white"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={handleChangeAddress}
                            className="border uppercase text-xs p-2 font-semibold text-orange-400 border-orange-400 cursor-pointer hover:shadow-md"
                          >
                            Change Address
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setShowAddShippingButton(true);
                        setShowChangeAddress(true);
                      }}
                      className="border mx-auto w-full uppercase text-sm p-2 font-semibold text-orange-400 border-orange-400 cursor-pointer hover:shadow-md"
                    >
                      Add Shipping Address
                    </button>
                  )}
                </div>
                <hr />
                {cartItems && cartItems.length > 0 && (
                  <>
                    <p className="uppercase font-bold">
                      Price Details (
                      <span className="lowercase">
                        {cartItems.length} items
                      </span>
                      )
                    </p>
                    <div className="flex flex-row justify-between">
                      <p>Total MRP</p>
                      <p className="flex flex-row items-center">
                        <FaIndianRupeeSign className="text-xs" />
                        {totalMrp}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Discount on MRP</p>
                      <p className="text-green-500 flex flex-row items-center">
                        -<FaIndianRupeeSign className="ml-1 text-xs" />
                        {totalDiscount}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Platform Fee</p>
                      <p className="text-green-500">FREE</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Shipping Fee</p>
                      <p className="text-green-500">FREE</p>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between font-bold">
                      <p>Total Amount</p>
                      <p className="flex flex-row items-center">
                        <FaIndianRupeeSign className="text-xs" />
                        {totalMrp - totalDiscount}
                      </p>
                    </div>
                    <button className="uppercase p-3 bg-pink-600 rounded-sm text-white font-semibold hover:opacity-90">
                      place order
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

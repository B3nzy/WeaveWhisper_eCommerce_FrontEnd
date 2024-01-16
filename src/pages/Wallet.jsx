/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useRazorpay from "react-razorpay";
import { MdAccountBalanceWallet } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const [Razorpay] = useRazorpay();

  const [amount, setAmount] = useState();

  const handlePayment = async () => {
    const res = await axios.post("/api/balance/addrequest", {
      id: currentUser.id,
      amount,
    });

    console.log(res);
    if (res.status !== 200) {
      console.log(res);
      return;
    }

    const options = {
      key: razorpayKeyId,
      amount: amount * 100,
      currency: "INR",
      name: "WeaveWhisper",
      description: "Add balance to WeaveWhisper wallet.",
      order_id: res.data.orderId,
      handler: async function (response) {
        const res = await axios.post("api/balance/addsuccess", response);
        console.log(res);
        if (res.status === 400) {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (res.status !== 200) {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_RIGHT,
          });
          const res = await axios.post("/api/balance/addfailure", response);
          console.log(res);
        } else {
          fetchWalletBalance();
          setAmount(0);
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      },
      prefill: {
        name: res.data.fullName,
        email: res.data.email,
        contact: res.data.phoneNumber,
      },
      notes: {
        address: res.data.address,
      },
      theme: {
        // color: "#3399cc",
        color: "#272829",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {});

    rzp1.open();
  };

  const fetchWalletBalance = async () => {
    try {
      const res = await axios.get(`/api/balance/user/${currentUser.id}`);
      if (res.status !== 200) {
        console.log(res.response.error);
        return;
      }
      console.log(res.data);
      setBalance(res.data.balance);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchWalletBalance();
  }, []);
  return (
    <>
      <ToastContainer newestOnTop={true} className="top-16 w-fit" />
      <div>
        <div className="bg-blue-50 p-6 m-10 rounded-sm">
          <p className="text-blue-800 font-bold text-2xl flex items-center gap-3">
            <MdAccountBalanceWallet className="text-4xl" /> My Wallet
          </p>
          <hr />
          <div className="flex w-full flex-row gap-6 my-6 mx-auto p-3 items-center ">
            <div className="bg-blue-200 p-3 w-full flex flex-col h-56 items-center mx-auto justify-center gap-6">
              <HiCurrencyRupee className="text-6xl text-green-700" />
              <div className="capitalize p-3 bg-green-100 font-bold text-green-600 text-xl">
                Wallet balance : {balance}
              </div>
            </div>
            <div className="bg-blue-200 p-3 w-full flex flex-col h-56 items-center mx-auto justify-center gap-6">
              <label className="flex items-center flex-row flex-wrap gap-4">
                <span className="capitalize p-3 font-bold text-blue-600 text-xl">
                  Add Amount{" "}
                </span>
                <input
                  type="number"
                  placeholder="amount..."
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="outline-none p-3  rounded-lg"
                />
              </label>
              <button
                onClick={handlePayment}
                className="uppercase p-3 font-bold text-white bg-blue-700 rounded-lg"
              >
                Add Balance
              </button>
            </div>
          </div>
        </div>
        {/* <div>Wallet balance : {balance}</div>
      <label>
        <span>Add custom amount : </span>
        <input
          type="number"
          placeholder="amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button onClick={handlePayment}>Add Balance</button> */}
      </div>
    </>
  );
}

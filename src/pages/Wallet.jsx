/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useRazorpay from "react-razorpay";

const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const [Razorpay] = useRazorpay();

  const createOrder = async () => {
    return await fetch("http://localhost:8080/payment/" + 1000 * 100, {
      mode: "no-cors",
      method: "GET",
    });
  };

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
        if (res.status !== 200) {
          console.log(res);
        } else {
          fetchWalletBalance();
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
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

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
    <div>
      <div>Wallet balance : {balance}</div>
      <label>
        <span>Add custom amount : </span>
        <input
          type="number"
          placeholder="amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button onClick={handlePayment}>Add Balance</button>
    </div>
  );
}

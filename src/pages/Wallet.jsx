import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        const res = await axios.get(
          `/api/users/balance/user/${currentUser.id}`
        );
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
    fetchWalletBalance();
  }, []);
  return <div>Wallet balance : {balance}</div>;
}

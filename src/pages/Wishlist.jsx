/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { currentUser } = useSelector((state) => state.user);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productIdsInWIshlist, setProductIdsInWIshlist] = useState([]);

  const navigate = useNavigate();

  const populateWishListedProductIdForCustomer = async () => {
    if (currentUser !== null && currentUser.type === "CUSTOMER") {
      try {
        const res = await axios.get(
          `/api/wishlists/getproductids/customer/${currentUser.id}`
        );
        if (res.status !== 200) {
          console.log(res);
        }
        console.log(res.data);
        setProductIdsInWIshlist(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    populateWishListedProductIdForCustomer();
  }, []);

  const addWishList = async (productId) => {
    if (currentUser === null) {
      navigate("/sign-in");
      return;
    } else if (currentUser.type === "CUSTOMER") {
      try {
        const res = await axios.post("/api/wishlists/add", {
          customerId: currentUser.id,
          productId,
        });
        if (res.status !== 200) {
          console.log(res.response.error.message);
        }
        populateWishListedProductIdForCustomer();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteWishList = async (productId) => {
    if (currentUser === null) {
      navigate("/sign-in");
      return;
    } else if (currentUser.type === "CUSTOMER") {
      try {
        const res = await axios.post("/api/wishlists/delete", {
          customerId: currentUser.id,
          productId,
        });
        console.log(res);
        if (res.status !== 200) {
          console.log(res);
        }
        populateWishListedProductIdForCustomer();
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const fetchWishlistedItems = async () => {
      setLoading(true);
      const res = await axios.get(`/api/wishlists/customer/${currentUser.id}`);
      if (res.status !== 200) {
        setErrors(true);
        setLoading(false);
        console.log(res.response.message);
        return;
      }
      setProducts(res.data);
      setErrors(false);
      setLoading(false);
    };

    fetchWishlistedItems();
  }, []);
  return (
    <div className="p-3 mt-10 max-w-6xl mx-auto">
      <h1 className="uppercase text-lg font-bold text-slate-700 mb-2 ml-1">
        My Wishlist{" "}
        <span className="lowercase font-normal ml-1">
          {products.length} items
        </span>
      </h1>
      <hr />
      <div className="flex flex-wrap justify-evenly mt-2">
        {products &&
          products.length > 0 &&
          products.map((item, id) => {
            return (
              <ProductCard
                addWishListAction={addWishList}
                deleteWishListAction={deleteWishList}
                productIds={productIdsInWIshlist}
                listing={item}
                key={id}
              />
            );
          })}
      </div>
    </div>
  );
}

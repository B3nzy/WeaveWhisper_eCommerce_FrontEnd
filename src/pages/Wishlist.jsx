import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { currentUser } = useSelector((state) => state.user);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

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
    <div className="p-3">
      <div className="flex flex-wrap justify-evenly">
        {products &&
          products.length > 0 &&
          products.map((item) => {
            return <ProductCard listing={item} key={item} />;
          })}
      </div>
    </div>
  );
}

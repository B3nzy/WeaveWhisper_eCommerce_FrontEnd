import React, { useEffect, useState } from "react";
import CartProductCard from "../components/CartProductCard";
import { useSelector } from "react-redux";
import axios from "axios";
import RemoveFromCartModal from "../components/RemoveFromCartModal";
import { ToastContainer, toast } from "react-toastify";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const handleRemoveFromCart = (item) => {
    setCartItem(item);
    setShowModal(true);
  };
  console.log(cartItem);

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
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

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
      <div className="p-3 max-w-6xl mx-auto ">
        {loading ? (
          "Loading....."
        ) : (
          <>
            <h1 className="text-center font-semibold text-3xl my-7 text-black">
              My Bag
            </h1>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col flex-1 gap-4">
                {!loading &&
                  cartItems &&
                  cartItems.map((item) => (
                    <CartProductCard
                      key={item}
                      cartItem={item}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  ))}
              </div>
              <div className="flex flex-col flex-1 gap-2"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

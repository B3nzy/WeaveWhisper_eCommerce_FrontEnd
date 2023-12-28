/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ManufacturerSignUp from "./pages/ManufacturerSignUp";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import CreateProductListing from "./pages/CreateProductListing";
import AllowAddress from "./components/AllowAddress";
import LoggedOutRoute from "./components/LoggedOutRoute";
import PrivateRouteCustomer from "./components/PrivateRouteCustomer";
import Cart from "./pages/Cart";
import CustomerProfile from "./pages/CustomerProfile";
import PrivateRouteManufacturer from "./components/PrivateRouteManufacturer";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import ManufacturerProfile from "./pages/ManufacturerProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/address" element={<AllowAddress />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/brand" element={<ManufacturerProfile />} />

        <Route element={<LoggedOutRoute />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/manufacturers/sign-up"
            element={<ManufacturerSignUp />}
          />
        </Route>

        <Route element={<PrivateRouteCustomer />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<CustomerProfile />} />
        </Route>

        <Route element={<PrivateRouteManufacturer />}>
          <Route
            path="/create-product-listing"
            element={<CreateProductListing />}
          />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

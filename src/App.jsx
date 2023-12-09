import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import CreateProductListing from "./pages/CreateProductListing";
import AllowAddress from "./components/AllowAddress";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/address" element={<AllowAddress />} />
        <Route
          path="/create-product-listing"
          element={<CreateProductListing />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/atoms";
import { Product, ProductDetail } from "../views";
const Router = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} exact />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

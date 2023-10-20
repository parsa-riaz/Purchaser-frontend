import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/homepage/Home.js";
import Products from "./components/products/Products.js";
import Login from "./components/auth/Login.js";
import SignUp from "./components/auth/SignUp.js";
import ForgetPass from "./components/auth/ForgetPass";
import ChangePass from "./components/auth/ChangePass";

export default function RouteComponent() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="forgetPassword" element={<ForgetPass />} />
          <Route path="changePassword" element={<ChangePass />} />
        </Routes>
      </Router>
    </>
  );
}

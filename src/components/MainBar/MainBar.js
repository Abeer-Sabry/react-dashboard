import React from "react";
import MainBarStyles from "./MainBarStyles";
import Home from "./Pages/Home/Home";
import User from "../MainBar/Pages/Users/User";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./Pages/Users/UsersList/UserDetails/UserDetails";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";


const MainBar = () => {
  return (
    <MainBarStyles>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </MainBarStyles>
  );
};

export default MainBar;

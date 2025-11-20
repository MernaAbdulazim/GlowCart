import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ShopProvider } from "./context/ShopContext";

import HomePage from "./pages/HomePage";
import MakeupPage from "./pages/MakeupPage";
import SkincarePage from "./pages/SkincarePage";
import HaircarePage from "./pages/HaircarePage";
import BestSellingPage from "./pages/BestSellingPage";
import HotDiscountsPage from "./pages/HotDiscountsPage";
import AboutPage from "./pages/AboutPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";



function App() {
  return (
    <ShopProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/skincare" element={<SkincarePage />} />
          <Route path="/haircare" element={<HaircarePage />} />
          <Route path="/bestselling" element={<BestSellingPage />} />
          <Route path="/hotdiscounts" element={<HotDiscountsPage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Layout>
    </ShopProvider>
  );
}

export default App;
import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection/CategorySection";
import ProductWiseSection from "../components/ProductWiseSection/ProductWiseSection";

export default function HomePage() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <NavBar cartItems={cartItems} />
      <HeroSection />
      <CategorySection />
      <ProductWiseSection cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

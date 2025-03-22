import React, { useState } from "react";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import NavBar from "../components/NavBar/NavBar";

export default function DetailsPage() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <NavBar cartItems={cartItems} />
      <DetailsSection cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

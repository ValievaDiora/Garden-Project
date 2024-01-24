import React, { useEffect, useState } from "react";
import CartDiv from "../CartDiv";
import { useSelector } from "react-redux";

export default function CartParent() {
  const cartState = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <div>
      <CartDiv cartItems={cartState} />
    </div>
  );
}

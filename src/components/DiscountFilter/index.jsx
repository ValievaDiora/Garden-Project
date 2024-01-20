import React, { useState } from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { discountedProducts } from "../../store/slices/allProductsSlices";

export default function DiscountFilter() {
  const dispatch = useDispatch();

  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleChanged = () => {
    setCheckboxChecked(!checkboxChecked);
  };
  const getDiscountedProducts = (e) => {
    dispatch(discountedProducts(e.target.checked));
  };

  return (
    <div className={s.main}>
      <p className={s.sortText}>Discounted items</p>
      <input
        className={s.checkbox}
        type="checkbox"
        checked={checkboxChecked}
        onChange={handleChanged}
        onClick={getDiscountedProducts}
      />
    </div>
  );
}

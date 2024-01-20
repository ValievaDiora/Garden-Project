import React, { useState } from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { filterProduct } from "../../store/slices/allProductsSlices";

export default function PriceFilter() {
  const dispatch = useDispatch();

  const [minValue, setMinValue] = useState(0);

  const [maxValue, setMaxValue] = useState(Infinity);

  const handleChange = (min, max) => {
    dispatch(filterProduct({ minValue: min, maxValue: max }));
    console.log(min, max);
  };

  const handleMinValueChange = (e) => {
    let value = +e.target.value || 0;
    if (value < 0) value = 0;
    setMinValue(value);
    handleChange(value, maxValue);
  };

  const handleMaxValueChange = (e) => {
    let value = +e.target.value || Infinity;
    if (value < 0) value = 0;
    setMaxValue(value);
    handleChange(minValue, value);
  };

  return (
    <div className={s.mainContainer}>
      <p className={s.sortText}>Price</p>

      <input
        className={s.inputMin}
        type="number"
        placeholder="min"
        value={minValue === 0 ? "" : minValue}
        onChange={handleMinValueChange}
      />

      <input
      className={s.inputMax}
        type="number"
        placeholder="max"
        value={maxValue === Infinity || maxValue === 0 ? "" : maxValue}
        onChange={handleMaxValueChange}
      />
    </div>
  );
}

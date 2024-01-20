import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import PriceFilter from "../PriceFilter";
import DiscountFilter from "../DiscountFilter";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../store/slices/allProductsSlices";

export default function AllSalesDiv() {
  const dispatch = useDispatch();
  const sortedProducts = (e) => {
    dispatch(sortProducts(e.target.value));
  };
  return (
    <div>
      <div className={s.allProductsSwitchMenu}>
        <Link to="/" className={s.linkP}>
          <button className={s.switchToMenu}>Main Page</button>
        </Link>

        <div className={s.switchHr}></div>
        <button className={s.stayDiscountedPrices}>Discounted items</button>
      </div>

      <div className={s.allProductsFilter}>
        <p className={s.allProductsText}>Discounted items</p>
      </div>
      <div className={s.sortProducts}>
        <PriceFilter />
        <div className={s.sortedFilter}>
          <p className={s.sortText}>Sorted</p>

          <select onInput={sortedProducts} defaultValue="none" name="" id="">
            <option value="none">by default</option>
            <option value="title">By alphabet</option>
            <option value="asc">Price asc</option>
            <option value="desc">Price desc</option>
          </select>
        </div>
      </div>
    </div>
  );
}

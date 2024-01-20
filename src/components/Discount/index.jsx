import React from "react";
import s from "./index.module.css";
import MainBanner from "./assets/main.svg";
import { Link } from "react-router-dom";

export default function Discount() {
  return (
    <div>
      <div className={s.discount}>
        <img className={s.discountImg} src={MainBanner} alt="MainImg" />
        <div className={s.discountTextAndBtn}>
          <p className={s.discountText}>
            Amazing Discounts on Garden Products!
          </p>
          <Link to="/AllSales" className={s.linkP}>
            <button className={s.discountBtn}>Check Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

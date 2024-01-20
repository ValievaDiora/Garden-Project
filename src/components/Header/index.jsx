import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import Logo from "./assets/logo.svg";
import Logo2 from "./assets/basket=empty.svg";

export default function Header() {
  return (
    <div>
      <div className={s.header}>
        <Link to="/">
          <img src={Logo} className={s.logo} alt="logo" />
        </Link>
        <div className={s.headerMenu}>
          <Link to="/" className={s.linkP}>
            <p className={s.headerMenuP}>Main Page</p>
          </Link>

          <Link to="/Categories" className={s.linkP}>
            <p className={s.headerMenuP}>Categories</p>
          </Link>
          <Link to="/AllProducts" className={s.linkP}>
            <p className={s.headerMenuP}>All Products</p>
          </Link>
          <Link to="/AllSales" className={s.linkP}>
            <p className={s.headerMenuP}>All Sales</p>
          </Link>
        </div>

        <div>
          <Link to="/Cart" className={s.linkP}>
            <img src={Logo2} className={s.headerBasket} alt="Basket" />
          </Link>
        </div>
      </div>
    </div>
  );
}

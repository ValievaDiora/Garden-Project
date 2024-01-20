import React from "react";
import AllProductsItem from "../AllProductsItem";
import s from "./index.module.css";

export default function AllProductsJson({ products }) {
  return (
    <div className={s.allProducts}>
      <div className={s.allProductsContainers}>
        {products
          ?.filter((el) => el.showProduct && el.showFilterProduct)
          .map((el) => (
            <AllProductsItem key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
}

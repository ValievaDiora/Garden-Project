import React, { useEffect } from "react";
import Discount from "../../components/Discount";
import GetDiscount from "../../components/GetDiscount";
import { getAllCategories } from "../../requests/categoriesRequest";
import { useDispatch, useSelector } from "react-redux";
import CategoriesJson from "../../components/CategoriesJson";
import { getAllProducts } from "../../requests/allProductsRequest";
import AllProductsJson from "../../components/AllProductsJson";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.allProducts.list);

  const filterProducts = products.filter((el) => el.discont_price).slice(0, 4);
  console.log(filterProducts);
  return (
    <div>
      <Discount />

      <CategoriesJson />

      <GetDiscount />

      <div className={s.categoriesHR}>
        <p className={s.categoriesText}>Sale</p>
        <hr className={s.categoriesLine}></hr>
        <Link to="/AllProducts" className={s.linkP}>
          <button className={s.allCategoriesBtn}>All Sales</button>
        </Link>
      </div>
      <AllProductsJson products={filterProducts} />
    </div>
  );
}

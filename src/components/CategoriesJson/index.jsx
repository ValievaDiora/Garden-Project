import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CategoriesJson() {
  const categories = useSelector((state) => state.categories.list);

  return (
    <div className={s.mainContainer}>
      <div className={s.categoriesHR}>
        <p className={s.categoriesText}>Categories</p>
        <hr className={s.categoriesLine}></hr>
        <Link to="/Categories" className={s.linkP}>
          <button className={s.allCategoriesBtn}>All Categories</button>
        </Link>
      </div>

      <div className={s.categories}>
        {categories.map((el) => (
          <CategoryItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

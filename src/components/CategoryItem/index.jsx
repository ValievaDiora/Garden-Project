import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CategoryItem({ title, image, id }) {
  return (
    <div>
      <div className={s.categoriesContainer}>
        <div className={s.categoriesImgAndTitle}>
          <div
            className={s.categoryImg}
            style={{
              backgroundImage: `url(http://localhost:3333/${image})`,
            }}
          ></div>
          <Link to={`/Categories/${id}`} className={s.linkP}>
            <p className={s.categoryTitle}>{title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

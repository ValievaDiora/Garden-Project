import React from "react";
import s from "./index.module.css";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function AllProductsItem({
  id,
  title,
  image,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();

  const product = {
    id,
    title,
    image,
    price,
    discont_price,
    quantity: 1,
  };

  const discountCalculation = (price, discont_price) => {
    if (discont_price === null) {
      return 0;
    }
    return Math.floor(((price - discont_price) / price) * 100);
  };

  const sale = discountCalculation(price, discont_price);

  return (
    <div>
      <div className={s.allProductsContainer}>
        <div className={s.allProductsImgAndTitle}>
          <div
            className={s.allProductsImg}
            style={{
              backgroundImage: `url(http://localhost:3333/${image})`,
            }}
          ></div>
          <button
            className={s.addToCard}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

          <Link to={`/AllProducts/${id}`} className={s.linkP}>
            <p className={s.allProductsTitle}>{title}</p>
          </Link>
          <div className={s.discountPrice}>
            {discont_price ? (
              <>
                <p className={s.allProductsPrice}>${price}</p>
                <p className={s.allProductsDiscount}>{discont_price}</p>
                <p className={s.allProductsProcent}>-{sale}%</p>
              </>
            ) : (
              <p className={s.allProductsPrice}>${price}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

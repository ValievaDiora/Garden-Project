import React, { useState } from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment } from "../../store/slices/cartSlice";

export default function ProductItem({ product }) {
  const { id, image, title, description, price } = product;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);

  const handleIncrement = () => {
    setCount((currentValue) => currentValue + 1);
  };

  const handleDecrement = () => {
    setCount((currentValue) =>
      currentValue > 1 ? currentValue - 1 : currentValue
    );
  };

  const add_to_cart = () => {
    const productInCart = cartState.find((el) => el.id === id);
    if (productInCart) {
      dispatch(
        increment({
          id,
          quantity: count,
        })
      );
    } else {
      dispatch(
        addToCart({
          ...product,
          quantity: count,
        })
      );
    }
  };

  return (
    <div className={s.mainDiv}>
      <div className={s.allProductsSwitchMenu}>
        <Link to="/" className={s.linkP}>
          <button className={s.switchToMenu}>Main page</button>
        </Link>

        <div className={s.switchHr}></div>
        <Link to="/AllProducts" className={s.linkP}>
          <button className={s.switchToAllProducts}>All Products</button>
        </Link>

        <div className={s.switchHr}></div>
        <button className={s.stayProduct}>{title}</button>
      </div>

      <div className={s.divWithProduct}>
        <div
          className={s.allProductsImg}
          style={{
            backgroundImage: `url(http://localhost:3333/${image})`,
          }}
        ></div>
        <div className={s.totalDiv}>
          <div className={s.titleAndPrice}>
            <p className={s.title}>{title}</p>
            <p className={s.price}>${price}</p>
          </div>

          <div className={s.buttons}>
            <button className={s.increment} onClick={handleIncrement}>
              +
            </button>
            <p className={s.quantity}>{count}</p>
            <button className={s.decrement} onClick={handleDecrement}>
              -
            </button>
            <button onClick={add_to_cart} className={s.addToCard}>
              Add to card
            </button>
          </div>

          <div className={s.descriptionDiv}>
            <p className={s.description1}>Description</p>
            <p className={s.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

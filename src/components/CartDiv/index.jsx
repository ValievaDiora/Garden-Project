import React, { useState } from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import OrderBtn from "../OrderBtn";

export default function CartDiv({ cartItems }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (inputName, value) => {
    if (inputName === "name") {
      setName(value);
    } else if (inputName === "phoneNumber") {
      setPhoneNumber(value);
    } else if (inputName === "email") {
      setEmail(value);
    }

    const allFieldsFilled =
      name.trim() !== "" && phoneNumber.trim() !== "" && email.trim() !== "";
    setIsButtonDisabled(!allFieldsFilled);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <p className={s.zeroItems}>
          Looks like you have no items in your basket currently.
        </p>
        <Link to="/AllProducts" className={s.linkP}>
          <button className={s.button}>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={s.main}>
      <div className={s.mainContainer}>
        <div className={s.mainText}>
          <p className={s.text}>Shopping Cart</p>
          <hr className={s.textLine}></hr>
          <Link to="/AllProducts" className={s.linkP}>
            <button className={s.allProductsBtn}>Back to the store</button>
          </Link>
        </div>

        <div className={s.classFor2Divs}>
          <div className={s.cardsAndTotal}>
            <ul className={s.mainProductCarts}>
              {cartItems &&
                cartItems.map((item, index) => (
                  <li className={s.productCarts} key={index}>
                    <img
                      className={s.productImg}
                      src={`http://localhost:3333/${item.image}`}
                      alt={item.title}
                    />

                    <div className={s.div}>
                      <div className={s.titleAndX}>
                        <p className={s.productTitle}>{item.title}</p>
                        <button
                          className={s.remove}
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          x
                        </button>
                      </div>

                      <div className={s.calcItem}>
                        <button
                          className={s.increment}
                          onClick={() => dispatch(increment(item.id))}
                        >
                          +
                        </button>

                        <p className={s.quantity}>{item.quantity}</p>

                        <button
                          className={s.decrement}
                          onClick={() => dispatch(decrement(item.id))}
                        >
                          -
                        </button>

                        <p className={s.productPrice}>
                          {(item.price * item.quantity).toFixed(2)}$
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          {/* ---------------------------------------------------------------------------------------- */}
          <div className={s.totalQuantity}>
            <div className={s.priceTotal}>
              <p className={s.orderText}>Order details</p>
              <p className={s.totalText}>{totalQuantity} items</p>
              <div className={s.totalDiv}>
                <p className={s.totalTotal}>Total </p>
                <p className={s.totalPrice}>{totalAmount.toFixed(2)}$</p>
              </div>
            </div>

            <div className={s.divWithInputs}>
              <input
                placeholder="Name"
                className={s.input}
                type="text"
                value={name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              <input
                placeholder="Phone number  "
                className={s.input}
                type="number"
                value={phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
              <input
                placeholder="Email"
                className={s.input}
                type="text"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <OrderBtn
                name={name}
                phoneNumber={phoneNumber}
                email={email}
                isButtonDisabled={isButtonDisabled}
              />
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
}

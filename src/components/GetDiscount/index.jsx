import React, { useState } from "react";
import s from "./index.module.css";
import Hands from "./assets/hands.svg";
import GetDiscountBtn from "../GetDiscountBtn";

export default function GetDiscount() {
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

    // Проверка заполненности всех полей
    const allFieldsFilled =
      name.trim() !== "" && phoneNumber.trim() !== "" && email.trim() !== "";
    setIsButtonDisabled(!allFieldsFilled);
  };

  return (
    <div>
      <div className={s.getDiscount}>
        <h1 className={s.getDiscountH1}>5% off on the first order</h1>
        <div className={s.getDiscountContent}>
          <div className={s.getDiscountImg}>
            <img src={Hands} alt="Hands" />
          </div>
          <div className={s.getDiscountBtns}>
            <input
              className={s.getDiscountNameBtn}
              placeholder="Name"
              value={name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            ></input>

            <input
              className={s.getDiscountPhoneBtn}
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            ></input>
            <input
              className={s.getDiscountEmailBtn}
              placeholder="Email"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            ></input>

            <GetDiscountBtn
              name={name}
              phoneNumber={phoneNumber}
              email={email}
              isButtonDisabled={isButtonDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/orderSlices";
import s from "./index.module.css";

const OrderBtn = ({ name, phoneNumber, email, isButtonDisabled }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);

  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    const url = "http://localhost:3333/order/send";
    const requestData = {
      name,
      phoneNumber,
      email,
    };
    dispatch(fetchData(url, requestData));

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div>
      {showNotification && (
        <div className={s.notification}>
          <div className={s.divWithBtn}>
            <p className={s.text1}>Congratulations!</p>
            <button className={s.closeBtn}>x</button>
          </div>
          <p className={s.text2}>
            Your order has been successfully placed on the website.
            <br />
            <br />
            A manager will contact you shortly to confirm your order.
          </p>
        </div>
      )}
      <div className={s.mainDiv}>
        <button
          onClick={handleButtonClick}
          disabled={status === isButtonDisabled}
          className={s.orderButton}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderBtn;

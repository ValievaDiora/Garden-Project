import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/getDiscountSlice";
import s from "./index.module.css";

const GetDiscountBtn = ({ name, phoneNumber, email, isButtonDisabled }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);

  const handleButtonClick = () => {
    const url = "http://localhost:3333/sale/send";
    const requestData = {
      name,
      phoneNumber,
      email,
    };

    dispatch(fetchData(url, requestData));
  };

  return (
    <div>
      <div className={s.mainDiv}>
        <button
          onClick={handleButtonClick}
          disabled={status === isButtonDisabled}
          className={s.getDiscountBtn}
        >
          Get a Discount
        </button>
      </div>
      {status === "loading" && <p className={s.loading}>Loading...</p>}
      {status === "succeeded" && <p className={s.succeeded}>Succeeded!</p>}
      {status === "failed" && <p className={s.failed}>Error!</p>}
    </div>
  );
};

export default GetDiscountBtn;

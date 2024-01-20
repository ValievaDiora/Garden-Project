import { createAsyncThunk } from "@reduxjs/toolkit";

export const order = createAsyncThunk("order/fetchData", async () => {
  const response = await fetch("http://localhost:3333/order/send");
  const data = await response.json();
  return data;
});

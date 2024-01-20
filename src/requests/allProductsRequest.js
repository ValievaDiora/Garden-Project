import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
    const data = await response.json();
    return data;
  }
);

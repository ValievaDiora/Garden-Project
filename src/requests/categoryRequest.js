import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (id) => {
    const response = await fetch(`http://localhost:3333/categories/${id}`);
    const data = await response.json();
    return data;
  }
);

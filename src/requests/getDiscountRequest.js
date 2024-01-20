import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDiscount = createAsyncThunk(
  "discount/fetchDiscount",
  async () => {
    try {
      const response = await axios.post("http://localhost:3333/sale/send");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

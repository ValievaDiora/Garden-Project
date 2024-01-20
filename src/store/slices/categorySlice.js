import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../../requests/categoryRequest";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    list: {
      data: [],
    },
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.status = "ready";
        const { data } = action.payload;
        state.list.data = data.map((el) => ({
          ...el,
          showProduct: true,
          showFilterProduct: true,
        }));
      })
      .addCase(getCategory.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default categorySlice.reducer;

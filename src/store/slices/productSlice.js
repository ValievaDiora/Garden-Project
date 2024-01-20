import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../requests/productRequest";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    status: "",
  },
  reducers: {
    incrementProductQuantity: (state, action) => {
      const product = state.find((el) => el.id === +action.payload);
      if (product) {
        product.quantity++;
      }
    },
    decrementProductQuantity: (state, action) => {
      const product = state.find((el) => el.id === +action.payload);
      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        const index = state.findIndex((el) => el.id === action.payload);

        if (index !== -1) {
          state.splice(index, 1);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "ready";
        state.list = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { incrementProductQuantity, decrementProductQuantity } =
  productSlice.actions;

export default productSlice.reducer;

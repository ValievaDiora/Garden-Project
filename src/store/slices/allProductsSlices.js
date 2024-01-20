import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../requests/allProductsRequest";

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    list: [],
    status: "",
  },
  reducers: {
    sortProducts(state, action) {
      if (action.payload === "title") {
        state.list.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === "asc") {
        state.list.sort((a, b) => a.price - b.price);
      } else if (action.payload === "desc") {
        state.list.sort((a, b) => b.price - a.price);
      } else {
        state.list.sort((a, b) => a.id - b.id);
      }
    },
    discountedProducts(state, action) {
      if (action.payload) {
        state.list.map((el) => {
          if (el.discont_price === null) {
            el.showProduct = false;
          }

          return el;
        });
      } else {
        state.list.map((el) => {
          el.showProduct = true;
          return el;
        });
      }
    },
    filterProduct(state, action) {
      const { minValue, maxValue } = action.payload;

      state.list.map((el) => {
        let actualPrice = el.discont_price || el.price;
        if (actualPrice >= minValue && actualPrice <= maxValue) {
          el.showFilterProduct = true;
        } else {
          el.showFilterProduct = false;
        }
        return el;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "ready";
        state.list = action.payload.map((el) => ({
          ...el,
          showProduct: true,
          showFilterProduct: true,
        }));
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default allProductsSlice.reducer;
export const { sortProducts, discountedProducts, filterProduct } =
  allProductsSlice.actions;

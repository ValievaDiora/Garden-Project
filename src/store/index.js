import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import allProductsSlices from "./slices/allProductsSlices";
import dataSlice from "./slices/getDiscountSlice";
import cartSlice from "./slices/cartSlice";
import orderSlices from "./slices/orderSlices";
import productSlice from "./slices/productSlice";
import categorySlice from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    allProducts: allProductsSlices,
    data: dataSlice,
    cart: cartSlice,
    order: orderSlices,
    product: productSlice,
    category: categorySlice
  },
});

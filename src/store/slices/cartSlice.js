import { createSlice } from "@reduxjs/toolkit";

let initialState = JSON.parse(localStorage.getItem("cartItems")) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = state.find((el) => el.id === +action.payload.id);
      if (!product) {
        state.push(action.payload);
      } else {
        product.quantity++;
      }

      localStorage.setItem("cartItems", JSON.stringify(state));
    },

    increment(state, action) {
      const product = state.find((el) => el.id === +action.payload);
      if (product) {
        product.quantity++;
      }
    },

    decrement(state, action) {
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

    removeFromCart(state, action) {
      const index = state.findIndex((el) => el.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;

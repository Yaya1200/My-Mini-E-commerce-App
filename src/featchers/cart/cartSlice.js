import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const existing = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.quantity += 1;
        existing.totalPrice += product.price;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.totalPrice;
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== id
        );
      }
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

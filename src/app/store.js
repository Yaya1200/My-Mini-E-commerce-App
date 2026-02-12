import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../featchers/products/productApi";
import cartReducer from "../featchers/cart/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath] : productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

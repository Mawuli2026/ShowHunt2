import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import flashSalesReducer from "./slices/flashSalesSlice";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    products: productsReducer,
    flashSales: flashSalesReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
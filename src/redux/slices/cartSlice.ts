import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
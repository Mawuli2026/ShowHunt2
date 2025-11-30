import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlashSale {
  id: string;
  productId: string;
  productName: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  endsAt: string; // ISO timestamp
  quantity: number;
}

interface FlashSalesState {
  flashSales: FlashSale[];
  loading: boolean;
  error: string | null;
}

const initialState: FlashSalesState = {
  flashSales: [],
  loading: false,
  error: null,
};

const flashSalesSlice = createSlice({
  name: "flashSales",
  initialState,
  reducers: {
    fetchFlashSalesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFlashSalesSuccess: (state, action: PayloadAction<FlashSale[]>) => {
      state.flashSales = action.payload;
      state.loading = false;
    },
    fetchFlashSalesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateFlashSaleQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const sale = state.flashSales.find((sale) => sale.id === action.payload.id);
      if (sale) {
        sale.quantity = action.payload.quantity;
      }
    },
  },
});

export const { fetchFlashSalesStart, fetchFlashSalesSuccess, fetchFlashSalesFailure, updateFlashSaleQuantity } =
  flashSalesSlice.actions;
export default flashSalesSlice.reducer;
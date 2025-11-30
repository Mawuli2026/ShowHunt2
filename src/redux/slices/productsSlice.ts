import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  discount?: number;
}

interface ProductsState {
  allProducts: Product[];
  trendingProducts: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  allProducts: [],
  trendingProducts: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setTrendingProducts: (state, action: PayloadAction<Product[]>) => {
      state.trendingProducts = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, setTrendingProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
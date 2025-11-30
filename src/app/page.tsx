"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchFlashSalesSuccess } from "@/redux/slices/flashSalesSlice";
import { setTrendingProducts } from "@/redux/slices/productsSlice";
import { fetchCategoriesSuccess } from "@/redux/slices/categoriesSlice";
import FlashSalesSection from "@/components/sections/FlashSalesSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import TrendingProductsSection from "@/components/sections/TrendingProductsSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { flashSales } = useSelector((state: RootState) => state.flashSales);
  const { trendingProducts } = useSelector((state: RootState) => state.products);
  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    // Mock data - Replace with API calls later
    const mockFlashSales = [
      {
        id: "1",
        productId: "p1",
        productName: "Laptop X",
        originalPrice: 9000,
        salePrice: 4500,
        discount: 50,
        image: "/products/laptop.jpg",
        endsAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        quantity: 10,
      },
      {
        id: "2",
        productId: "p2",
        productName: "Sneakers Pro",
        originalPrice: 350,
        salePrice: 280,
        discount: 20,
        image: "/products/sneakers.jpg",
        endsAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        quantity: 15,
      },
      {
        id: "3",
        productId: "p3",
        productName: "Smartphone Z",
        originalPrice: 4000,
        salePrice: 2800,
        discount: 30,
        image: "/products/phone.jpg",
        endsAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        quantity: 8,
      },
    ];

    const mockTrendingProducts = [
      {
        id: "t1",
        name: "Wireless Headphones",
        price: 450,
        image: "/products/headphones.jpg",
        category: "Electronics",
        rating: 4.5,
        discount: 15,
      },
      {
        id: "t2",
        name: "Designer Watch",
        price: 800,
        image: "/products/watch.jpg",
        category: "Fashion",
        rating: 4.8,
      },
      {
        id: "t3",
        name: "Gaming Chair",
        price: 1200,
        image: "/products/chair.jpg",
        category: "Home",
        rating: 4.6,
        discount: 10,
      },
    ];

    const mockCategories = [
      { id: "1", name: "Electronics", icon: "💻" },
      { id: "2", name: "Fashion", icon: "👗" },
      { id: "3", name: "Home", icon: "🏠" },
      { id: "4", name: "Beauty", icon: "💄" },
      { id: "5", name: "Sports", icon: "⚽" },
      { id: "6", name: "Gaming", icon: "🎮" },
    ];

    dispatch(fetchFlashSalesSuccess(mockFlashSales));
    dispatch(setTrendingProducts(mockTrendingProducts));
    dispatch(fetchCategoriesSuccess(mockCategories));
  }, [dispatch]);

  return (
    <div className="bg-white">
      {/* Hero / Ad Board Section */}
      <HeroSection categories={categories} />

      {/* Flash Sales Section */}
      {flashSales.length > 0 && <FlashSalesSection flashSales={flashSales} />}

      {/* Top Categories Section */}
      {categories.length > 0 && <CategoriesSection categories={categories} />}

      {/* Trending Products Section */}
      {trendingProducts.length > 0 && <TrendingProductsSection products={trendingProducts} />}

      {/* Newsletter Signup */}
      <NewsletterSection />
    </div>
  );
}

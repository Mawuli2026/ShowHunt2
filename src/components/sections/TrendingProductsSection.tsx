"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  discount?: number;
}

interface TrendingProductsSectionProps {
  products: Product[];
}

export default function TrendingProductsSection({ products }: TrendingProductsSectionProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      })
    );
  };

  const visibleProducts = products.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-darkText mb-2 flex items-center gap-2">
          🔥 Trending Products
        </h2>
        <p className="text-gray-600 mb-8">Shop what's hot right now</p>

        <div className="relative">
          {/* Previous Button */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-navy hover:bg-navy/90 text-white p-2 rounded-full z-10 transition-all md:flex hidden"
              aria-label="Previous products"
            >
              <FiChevronLeft size={24} />
            </button>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{product.discount}%
                    </div>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 left-2 bg-white/90 hover:bg-white p-2 rounded-full transition-all"
                    aria-label="Add to wishlist"
                  >
                    <FiHeart
                      size={20}
                      className={wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-darkText"}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.category}</p>
                  <h3 className="font-semibold text-darkText mb-2 line-clamp-2 h-14">{product.name}</h3>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-orange">₵{product.price}</span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-teal hover:bg-teal/90 text-white font-medium py-2 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <FiShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-navy hover:bg-navy/90 text-white p-2 rounded-full z-10 transition-all md:flex hidden"
              aria-label="Next products"
            >
              <FiChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-orange w-6" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";

interface FlashSale {
  id: string;
  productId: string;
  productName: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  endsAt: string;
  quantity: number;
}

interface FlashSalesSectionProps {
  flashSales: FlashSale[];
}

export default function FlashSalesSection({ flashSales }: FlashSalesSectionProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      if (flashSales.length > 0) {
        const endsAt = new Date(flashSales[0].endsAt).getTime();
        const now = Date.now();
        const diff = endsAt - now;

        if (diff > 0) {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTimeRemaining(
            `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`
          );
        }
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [flashSales]);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("flash-sales-carousel");
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAddToCart = (sale: FlashSale) => {
    dispatch(
      addToCart({
        id: sale.productId,
        name: sale.productName,
        price: sale.salePrice,
        quantity: 1,
        image: sale.image,
      })
    );
  };

  return (
    <section className="py-12 bg-gradient-to-b from-orange/5 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-darkText flex items-center gap-2">
              ⚡ Flash Sales – Limited Time Offers
            </h2>
            <p className="text-gray-600 mt-1">Grab these deals before they're gone!</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Ends in</p>
            <p className="text-2xl font-bold text-orange">{timeRemaining}</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-navy hover:bg-navy/90 text-white p-2 rounded-full z-10 transition-all"
            aria-label="Scroll left"
          >
            <FiChevronLeft size={24} />
          </button>

          <div
            id="flash-sales-carousel"
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
          >
            {flashSales.map((sale) => (
              <div
                key={sale.id}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden scroll-snap-align-start"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={sale.image}
                    alt={sale.productName}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                    {sale.discount}% OFF
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-darkText mb-2 line-clamp-2">{sale.productName}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-orange">₵{sale.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">₵{sale.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(sale)}
                    className="w-full btn-primary text-center"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-navy hover:bg-navy/90 text-white p-2 rounded-full z-10 transition-all"
            aria-label="Scroll right"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Category {
  id: string;
  name: string;
  icon?: string;
}

interface HeroSectionProps {
  categories: Category[];
}

export default function HeroSection({ categories }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "Summer Collection",
      subtitle: "Up to 50% off on trending items",
      image: "/hero/promo1.jpg",
    },
    {
      title: "Flash Sale",
      subtitle: "Limited time offers on electronics",
      image: "/hero/promo2.jpg",
    },
    {
      title: "New Arrivals",
      subtitle: "Shop the latest products",
      image: "/hero/promo3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % promotions.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);

  return (
    <section className="relative bg-gradient-to-r from-navy to-teal overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Promotion Slider */}
          <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-[300px] md:h-[400px]">
              {promotions.map((promo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${promo.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{promo.title}</h2>
                      <p className="text-lg text-white mb-6">{promo.subtitle}</p>
                      <button className="btn-primary">Shop Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10 transition-all"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10 transition-all"
              aria-label="Next slide"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-orange w-6" : "bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Category Teasers */}
          <div className="hidden md:flex flex-col gap-4 w-full md:w-56">
            {categories.slice(0, 4).map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-darkText">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
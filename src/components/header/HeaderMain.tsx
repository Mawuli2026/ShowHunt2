"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMain() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  // Fetch categories dynamically (simulate API until backend ready)
  useEffect(() => {
    setCategories([
      { id: "1", name: "Electronics" },
      { id: "2", name: "Fashion" },
      { id: "3", name: "Home" },
      { id: "4", name: "Beauty" },
      { id: "5", name: "Sports" },
      { id: "6", name: "Gaming" },
    ]);
  }, []);

  // Scroll listener for sticky animation
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 45);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 bg-[#14213D] text-white transition-all duration-300 ${
        isSticky ? "fixed top-0 shadow-md" : "relative"
      }`}
    >
      <div
        className={`flex justify-between items-center px-4 md:px-8 transition-all duration-300 ${
          isSticky ? "h-[60px]" : "h-[80px]"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer group transition-transform"
        >
          <Image
            src="/logo.png"
            alt="ShowHunt Logo"
            width={isSticky ? 35 : 50}
            height={isSticky ? 35 : 50}
            className="object-contain transition-all duration-300"
            priority
          />
          <span
            className={`font-bold text-xl transition-colors duration-300 ${
              isSticky ? "text-[#FCA311]" : "text-[#FCA311]"
            } group-hover:text-white`}
          >
            ShowHunt
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search product, brand, category..."
              className="w-full px-4 py-2 pl-10 rounded-md text-[#14213D] focus:outline-none focus:ring-2 focus:ring-[#008787]"
            />
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center gap-5 text-white">
          {/* Categories Dropdown */}
          <div className="hidden lg:flex gap-4">
            <span className="hover:text-[#FCA311] cursor-pointer transition-colors">
              Categories
            </span>
            <span className="hover:text-[#FCA311] cursor-pointer transition-colors">
              Vendors
            </span>
          </div>

          {/* Account */}
          <div className="hover:text-[#FCA311] cursor-pointer transition-colors flex items-center gap-1">
            <FiUser size={20} />
            <span className="hidden sm:inline text-sm">
              {isAuthenticated ? "Account" : "Sign In"}
            </span>
          </div>

          {/* Cart */}
          <div className="relative hover:text-[#FCA311] cursor-pointer transition-colors">
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FCA311] text-[#14213D] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#14213D] text-white border-t border-[#008787] md:hidden p-4">
          <div className="flex flex-col gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href="#"
                className="hover:text-[#FCA311] transition-colors"
              >
                {cat.name}
              </a>
            ))}
            <a href="#" className="hover:text-[#FCA311] transition-colors">
              {isAuthenticated ? "My Account" : "Sign In"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

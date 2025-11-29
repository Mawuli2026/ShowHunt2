"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";

export default function HeaderMain() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  // Fetch categories dynamically (simulate API until backend ready)
  useEffect(() => {
    // This should call your categoryService later
    setCategories([
      { id: "1", name: "Electronics" },
      { id: "2", name: "Fashion" },
      { id: "3", name: "Home" },
      { id: "4", name: "Beauty" },
      { id: "5", name: "Sports" },
      { id: "6", name: "Gaming" },
    ]);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 45);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 bg-navy text-white transition-shadow ${
        isSticky ? "fixed top-0 shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 h-[70px]">
        {/* Left: Categories Dropdown / Hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>

          {/* Categories Dropdown (Desktop) */}
          <div className="hidden md:block relative group">
            <button className="px-3 py-2 font-semibold hover:text-orange transition-colors">
              Categories
            </button>
            <div className="absolute top-full left-0 bg-white text-navy shadow-lg rounded-md hidden group-hover:block w-56">
              <ul className="py-2">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="px-4 py-2 hover:bg-lightGray cursor-pointer"
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center px-2">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search product, brand, category..."
              className="w-full py-2 pl-10 pr-4 rounded-full text-navy focus:outline-none border border-transparent focus:border-orange"
            />
            <FiSearch className="absolute left-3 top-2.5 text-navy opacity-60" />
          </div>
        </div>

        {/* Right: Account / Vendor / Cart */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {/* Account */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-orange">
              <FiUser className="text-lg" /> Account
            </button>
            <div className="absolute right-0 bg-white text-navy shadow-lg rounded-md hidden group-hover:block w-48">
              <ul className="py-2">
                {!isAuthenticated ? (
                  <>
                    <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                      📝 Register
                    </li>
                    <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                      👤 Sign In
                    </li>
                  </>
                ) : (
                  <>
                    <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                      🧾 My Account
                    </li>
                    <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                      📦 Orders
                    </li>
                    <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                      ❤️ Wishlist
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Vendor Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-orange">
              <IoStorefront className="text-lg" /> Vendor
            </button>
            <div className="absolute right-0 bg-white text-navy shadow-lg rounded-md hidden group-hover:block w-56">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                  🏪 Create Vendor Account
                </li>
                <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                  🔑 Vendor Sign In
                </li>
                <li className="px-4 py-2 hover:bg-lightGray cursor-pointer">
                  🎓 Training & Guides
                </li>
              </ul>
            </div>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FiShoppingCart className="text-2xl hover:text-orange" />
            {cartItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange text-navy text-xs font-bold px-1.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-navy text-white border-t border-teal md:hidden">
          <ul className="flex flex-col py-3 text-sm">
            {categories.map((cat) => (
              <li key={cat.id} className="px-5 py-2 hover:bg-teal cursor-pointer">
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

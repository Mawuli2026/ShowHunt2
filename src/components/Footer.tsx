"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook size={18} />, href: "#", label: "Facebook" },
    { icon: <FaTwitter size={18} />, href: "#", label: "Twitter" },
    { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" },
  ];

  const footerColumns = [
    {
      title: "Customer Service",
      links: ["FAQ", "Returns & Exchanges", "Shipping Info", "Contact Us", "Track Order"],
    },
    {
      title: "For Vendors",
      links: ["Sell on ShowHunt", "Vendor Dashboard", "Vendor Help Center", "Training & Guides", "Commission Structure"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility"],
    },
  ];

  return (
    <footer className="w-full bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange">About ShowHunt</h4>
            <p className="text-white text-sm leading-relaxed mb-4">
              ShowHunt is your trusted e-commerce platform for discovering, hunting, and shopping the best deals online.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="bg-teal hover:bg-orange p-2 rounded-full transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Other Columns */}
          {footerColumns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold mb-4 text-orange">{col.title}</h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white hover:text-orange transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payments & Apps */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange">Payments & Apps</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-white/70 mb-2">Accepted Payment Methods</p>
                <p className="text-white text-sm">Visa • Mastercard • Mobile Money • Bank Transfer</p>
              </div>
              <div>
                <p className="text-xs text-white/70 mb-2">Download Our App</p>
                <div className="flex gap-2">
                  <button className="bg-white text-navy px-4 py-2 rounded text-xs font-bold hover:bg-gray-100 transition-all">
                    iOS
                  </button>
                  <button className="bg-white text-navy px-4 py-2 rounded text-xs font-bold hover:bg-gray-100 transition-all">
                    Android
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <FiPhone className="text-orange mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-xs text-white/70 mb-1">Call Us</p>
                <a href="tel:+2335555555555" className="text-white hover:text-orange transition-colors">
                  +233 55 555 5555
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiMail className="text-orange mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-xs text-white/70 mb-1">Email Us</p>
                <a href="mailto:support@showhunt.com" className="text-white hover:text-orange transition-colors">
                  support@showhunt.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin className="text-orange mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-xs text-white/70 mb-1">Address</p>
                <p className="text-white">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} ShowHunt. All rights reserved. | Proudly serving customers across Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function HeaderTop() {
  const [timer, setTimer] = useState(3600);
  
  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full h-[45px] bg-gradient-to-r from-[#14213D] to-[#008787] text-white">
      <div className="flex justify-between items-center px-4 h-full text-sm font-medium">
        <div className="font-bold cursor-pointer text-white hover:text-[#FCA311] transition-colors">
          
        </div>
        <div className="text-center text-white">
          🔥 Falla Sales – Ends in {formatTime(timer)}
        </div>
        <div className="flex items-center gap-2 text-white">
          <FaPhoneAlt size={16} />
          <a
            href="tel:+2335555555555"
            className="text-white hover:text-[#FCA311] transition-colors"
          >
            Call to Order: +233 55 555 5555
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBottomBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-50 md:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-md mx-auto p-2 rounded-full bg-stone-900/95 backdrop-blur-lg flex items-center justify-between gap-2 border border-stone-800">
        
        {/* Call button */}
        <a
          href="tel:0982045879"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-amber-700 active:bg-amber-800 text-white font-bold text-sm"
        >
          <Phone className="w-4 h-4" />
          <span>Gọi 0982 045 879</span>
        </a>

        {/* Zalo button */}
        <a
          href="https://zalo.me/0982045879"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0068FF] active:bg-blue-600 text-white font-bold text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Nhắn Zalo</span>
        </a>

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Phone, Menu, X, Clock, MapPin, Video, ShieldCheck, MessageCircle, Heart } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-[padding] duration-200">
      <div
        className="max-w-7xl mx-auto rounded-full bg-[#FAF8F5]/95 backdrop-blur-md py-2.5 sm:py-3 px-4 sm:px-6 border border-[#E7E3DC] flex items-center justify-between gap-4"
        style={{ WebkitBackdropFilter: "blur(12px)", transform: "translateZ(0)" }}
      >
        
        {/* Brand */}
        <a href="#ve-toi" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex items-center justify-center shrink-0 rounded-full bg-white p-1 border border-amber-200 group-hover:scale-105 transition-transform duration-200">
            <img
              src="/images/logo_transparent.png"
              alt="Logo Trần Thanh Hải"
              className="w-full h-full object-contain"
              decoding="async"
            />
          </div>
          <div>
            <span className="block font-bold text-sm sm:text-base text-stone-900 group-hover:text-amber-800 transition-colors">
              Trần Thanh Hải
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span className="text-[11px] font-medium text-emerald-800">
                Thanh Hải Xíu • Phường Phong Phú, TP Huế
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-700">
          <a href="#nep-song" className="hover:text-amber-800 transition-colors flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>Nếp Sống Đời Thường</span>
          </a>
          <a href="#que-huong" className="hover:text-amber-800 transition-colors flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>Góc Nhìn Quê Hương</span>
          </a>
          <a href="#thuo-phim" className="hover:text-amber-800 transition-colors flex items-center gap-1.5">
            <Video className="w-4 h-4 text-amber-700" />
            <span>Thước Phim Thực Tế</span>
          </a>
          <a href="#chu-tin" className="hover:text-amber-800 transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Một Chữ Tín</span>
          </a>
        </nav>

        {/* Direct Call Button (Desktop) */}
        <div className="hidden sm:flex items-center">
          <a
            href="tel:0982045879"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>0982 045 879</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Mở menu"
          className="p-2 rounded-full text-stone-700 hover:bg-stone-200 lg:hidden transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-[#FAF8F5] p-6 border border-[#E7E3DC] animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-base font-semibold text-stone-800">
            <a
              href="#nep-song"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-2xl hover:bg-stone-100 flex items-center gap-3 text-stone-800 hover:text-amber-800"
            >
              <Clock className="w-5 h-5 text-amber-700" />
              <span>Nếp Sống Đời Thường</span>
            </a>
            <a
              href="#que-huong"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-2xl hover:bg-stone-100 flex items-center gap-3 text-stone-800 hover:text-amber-800"
            >
              <MapPin className="w-5 h-5 text-amber-700" />
              <span>Góc Nhìn Quê Hương</span>
            </a>
            <a
              href="#thuo-phim"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-2xl hover:bg-stone-100 flex items-center gap-3 text-stone-800 hover:text-amber-800"
            >
              <Video className="w-5 h-5 text-amber-700" />
              <span>Thước Phim Thực Tế</span>
            </a>
            <a
              href="#chu-tin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-2xl hover:bg-stone-100 flex items-center gap-3 text-stone-800 hover:text-amber-800"
            >
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <span>Một Chữ Tín</span>
            </a>
            <a
              href="#ket-noi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-2xl hover:bg-stone-100 flex items-center gap-3 text-stone-800 hover:text-amber-800"
            >
              <Heart className="w-5 h-5 text-amber-700" />
              <span>Giao Lưu Thân Tình</span>
            </a>

            <div className="pt-3 flex flex-col gap-2">
              <a
                href="tel:0982045879"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-amber-700 text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi Trực Tiếp: 0982 045 879</span>
              </a>
              <a
                href="https://zalo.me/0982045879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-700 text-white font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nhắn Zalo Anh Hải</span>
              </a>
              <a
                href="https://www.facebook.com/haixiu.thanh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-stone-900 text-white font-bold text-sm"
              >
                <span>Facebook Trần Thanh Hải</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

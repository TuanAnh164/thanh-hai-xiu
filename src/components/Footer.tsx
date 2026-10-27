"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white p-1 flex items-center justify-center">
                <img
                  src="/images/logo_transparent.png"
                  alt="Logo Trần Thanh Hải"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white">
                Trần Thanh Hải (Thanh Hải Xíu)
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed font-normal max-w-md mb-4">
              Người con xứ Huế, sống chân thành, yêu đất quê và luôn trân trọng tình cảm của bạn bè, bà con lối xóm.
            </p>
            <div className="text-xs text-stone-400 space-y-1">
              <p>Phường Phong Phú, TP Huế</p>
              <p>Hotline & Zalo: 0982 045 879</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="block text-xs font-bold text-white mb-4">
              Khám Phá
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#ve-toi" className="hover:text-amber-400 transition-colors">Về Anh Hải</a></li>
              <li><a href="#nep-song" className="hover:text-amber-400 transition-colors">Nếp Sống Đời Thường</a></li>
              <li><a href="#que-huong" className="hover:text-amber-400 transition-colors">Góc Nhìn Quê Hương</a></li>
              <li><a href="#thuo-phim" className="hover:text-amber-400 transition-colors">Thước Phim Thực Tế</a></li>
              <li><a href="#chu-tin" className="hover:text-amber-400 transition-colors">Một Chữ Tín</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="block text-xs font-bold text-white mb-4">
              Kết Nối Bạn Bè
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="https://www.facebook.com/haixiu.thanh" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Facebook Cá Nhân (5.5K Bạn Đọc)</a></li>
              <li><a href="https://zalo.me/0982045879" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Zalo: 0982 045 879</a></li>
              <li className="pt-2"><span className="inline-block px-3 py-1 rounded-full bg-stone-800 text-xs font-semibold text-amber-400">Hội BĐS Phong Điền</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Trần Thanh Hải (Thanh Hải Xíu). Portfolio cá nhân chân thành & mộc mạc.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

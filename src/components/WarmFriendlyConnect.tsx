"use client";

import React from "react";
import { Phone, MessageCircle, Coffee, MapPin } from "lucide-react";

export default function WarmFriendlyConnect() {
  return (
    <section id="ket-noi" className="py-20 lg:py-28 bg-[#F4F1EA]" data-reveal>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-10 lg:p-16 rounded-3xl bg-white border border-stone-200 text-center max-w-4xl mx-auto" data-reveal data-delay="100">
          
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mx-auto mb-6">
            <Coffee className="w-8 h-8" />
          </div>

          <span className="text-amber-800 text-sm font-bold block mb-2">
            Mời Bạn Ghé Điền Hương
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Một Tách Cà Phê, Một Buổi Chuyện Trò Thân Tình
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            Dù bạn là người con xa xứ muốn tìm hiểu đất quê, hay bạn bè bốn phương có dịp ghé thăm Huế, đừng ngần ngại gọi cho tôi hoặc nhắn một tin nhắn Zalo. Cà phê xóm chợ Điền Hương luôn sẵn lòng đón chào bạn!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="tel:0982045879"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-base transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>Gọi Anh Hải: 0982 045 879</span>
            </a>

            <a
              href="https://zalo.me/0982045879"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-base transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Nhắn Tin Qua Zalo (0982 045 879)</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-stone-500 font-medium">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>Địa chỉ: Phường Phong Phú, TP Huế</span>
          </div>

        </div>
      </div>
    </section>
  );
}

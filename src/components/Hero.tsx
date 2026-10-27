"use client";

import React from "react";
import { ArrowDown, MessageCircle, Heart, Coffee, Bike, Users, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="ve-toi" className="relative pt-6 sm:pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Native resident tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4 sm:mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Người con làng quê Điền Hương, Phong Điền, Thừa Thiên Huế</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.1] mb-4 sm:mb-6">
              Trần Thanh Hải
              <span className="block mt-1 sm:mt-2 text-amber-800">
                (Thanh Hải Xíu)
              </span>
            </h1>

            {/* Authentic bio */}
            <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal max-w-2xl mb-6 sm:mb-8">
              Chào bạn, tôi là người con sinh ra và lớn lên giữa màu xanh bờ phá Tam Giang và tiếng sóng biển Phong Điền. Giá trị quý nhất của tôi là giữ trọn chữ Tình, sống chân thật, đạp xe nạp &ldquo;vitamin buổi sáng&rdquo; và mang lại sự an tâm cho bất kỳ ai tin tưởng mình.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="https://zalo.me/0982045879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-base transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Trò Chuyện Cùng Anh Hải (Zalo)</span>
              </a>

              <a
                href="#nep-song"
                className="flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-stone-100 text-stone-800 font-bold text-base border border-stone-200 transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95"
              >
                <span>Xem Nếp Sống Đời Thường</span>
                <ArrowDown className="w-4 h-4 text-amber-800" />
              </a>
            </div>

            {/* 4 Lifestyle Anchors with Lucide Icons - Clean Harmonious Styling */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 hover-lift">
                <Bike className="w-5 h-5 text-amber-700 mb-1" />
                <span className="block text-xs sm:text-sm font-bold text-stone-900">Đạp xe sớm mai</span>
                <span className="text-[11px] text-stone-500">Nạp vitamin bờ biển</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 hover-lift">
                <Coffee className="w-5 h-5 text-amber-700 mb-1" />
                <span className="block text-xs sm:text-sm font-bold text-stone-900">Cà phê xóm chợ</span>
                <span className="text-[11px] text-stone-500">Chuyện trò bà con</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 hover-lift">
                <Users className="w-5 h-5 text-amber-700 mb-1" />
                <span className="block text-xs sm:text-sm font-bold text-stone-900">Việc làng xóm</span>
                <span className="text-[11px] text-stone-500">TDP Điền & Thanh Hương</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 hover-lift">
                <Heart className="w-5 h-5 text-amber-700 mb-1" />
                <span className="block text-xs sm:text-sm font-bold text-stone-900">Chữ Tín Trao Tay</span>
                <span className="text-[11px] text-stone-500">100% Sổ đỏ tận nơi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait in exact 426:500 ratio */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[360px] sm:max-w-[426px] rounded-3xl p-2.5 sm:p-3 bg-white border border-stone-200">
              
              <div className="relative w-full aspect-[426/500] rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src="/images/hero_hai.png"
                  alt="Trần Thanh Hải cùng phu nhân tại Huế"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="p-3.5 sm:p-4 bg-white flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-stone-900">
                    Trần Thanh Hải & Phu Nhân
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Gắn bó cùng nhịp sống quê hương Huế
                  </p>
                </div>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  Điền Hương
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

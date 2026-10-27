"use client";

import React from "react";
import { Megaphone, HeartHandshake, Music } from "lucide-react";

export default function CommunityHeart() {
  return (
    <section id="lang-xom" className="py-16 lg:py-24 bg-[#FAF8F5]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="max-w-3xl mb-12">
          <span className="text-amber-800 text-sm font-bold block mb-2">
            Tình Làng Nghĩa Xóm
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Gắn Bó Cùng Làng Xóm & Bà Con Quê Nhà
          </h2>
          <p className="text-base text-stone-700 mt-3 font-normal leading-relaxed">
            Trên trang cá nhân Facebook, những dòng trạng thái của tôi luôn gần gũi với việc làng, việc họ, và nhịp sống của bà con xóm quê Điền Hương.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-reveal data-delay="100">
          
          {/* Card 1: TDP Điền Hương & Thanh Hương */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 flex flex-col justify-between hover-lift transition-[transform,border-color] duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Việc Chung Của Hai Tổ Dân Phố
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Tích cực vận động bà con nhân dân Điền Hương và Thanh Hương tham gia bầu cử tổ trưởng tổ dân phố, ủng hộ những người trẻ năng lực, nhiệt huyết để chung tay chăm lo cho đời sống xóm làng.
              </p>
            </div>
            <div className="mt-8 pt-4 text-xs font-bold text-amber-800">
              Điền Hương & Thanh Hương, Phường Phong Phú, TP Huế
            </div>
          </div>

          {/* Card 2: Thói Quen Nạp Vitamin Buổi Sáng */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 flex flex-col justify-between hover-lift transition-[transform,border-color] duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Thói Quen Nạp Vitamin Buổi Sáng
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Những cung đường đạp xe sớm mai dọc biển Điền Lộc hay ven bờ đầm Tam Giang. Thể dục thể thao rèn sức bền, gặp gỡ bà con đi chợ sớm, hít thở trọn vẹn hương vị mặn mòi của quê hương.
              </p>
            </div>
            <div className="mt-8 pt-4 text-xs font-bold text-amber-800">
              Thói quen rèn luyện mỗi sớm mai
            </div>
          </div>

          {/* Card 3: Giai Điệu & Thơ Tình Xứ Huế */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 flex flex-col justify-between hover-lift transition-[transform,border-color] duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Giai Điệu & Thơ Tình Xứ Huế
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Yêu thích những khúc ca quê hương, những bài thơ mộc mạc như &ldquo;Thơ Tình Cuối Mùa Thu&rdquo;. Người con xứ Huế luôn đọng lại sự sâu lắng, chân thành và đượm tình trong từng cử chỉ.
              </p>
            </div>
            <div className="mt-8 pt-4 text-xs font-bold text-amber-800">
              Tâm hồn người con Cố Đô
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

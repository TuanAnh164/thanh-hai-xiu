"use client";

import React, { useState } from "react";
import { Sunrise, Sun, Sunset, Moon, MapPin, Quote } from "lucide-react";

interface RoutineItem {
  id: string;
  time: string;
  title: string;
  shortLabel: string;
  desc: string;
  quote: string;
  image: string;
  location: string;
  icon: any;
}

const routines: RoutineItem[] = [
  {
    id: "sang-som",
    time: "05:30 Sáng",
    title: "Đạp Xe Đón Bình Minh Bên Biển & Bờ Phá",
    shortLabel: "05:30 Đạp Xe",
    desc: "Mỗi sớm mai, tôi lại cùng chiếc xe đạp quen thuộc rong ruổi dọc cung đường ven biển Điền Lộc hay ven bờ phá Tam Giang. Đây là cách tôi nạp vitamin buổi sáng, rèn sức bền và tận hưởng không khí trong lành của quê nhà.",
    quote: "Đạp xe sớm mai giúp tôi lắng nghe nhịp thở của đất quê, thấy từng con đường bê tông đang dần nối dài và cảm nhận trọn vẹn sự bình yên của xứ Huế.",
    image: "/images/beach_portrait.jpg",
    location: "Cung đường ven biển Điền Lộc - Phong Hải",
    icon: Sunrise
  },
  {
    id: "ca-phe",
    time: "07:00 Sáng",
    title: "Cà Phê Sáng Xóm Chợ Điền Hương",
    shortLabel: "07:00 Cà Phê Chợ",
    desc: "Nếp quen ngồi quán cóc đầu chợ Điền Hương. Một ly cà phê phin mộc mạc, rôm rả chuyện trò cùng các bác cao niên, nghe bà con kể chuyện đồng áng, mùa vụ, chuyện con cháu xa quê về thăm nhà.",
    quote: "Ngồi xóm chợ mới thấu được lòng người, hiểu được gốc rễ từng mảnh đất quê hương. Tình làng nghĩa xóm ở đây quý hơn bất kỳ điều gì khác.",
    image: "/images/xom_cho.png",
    location: "Quán cà phê Xóm Chợ Điền Hương",
    icon: Sun
  },
  {
    id: "thuc-dia",
    time: "14:00 Chiều",
    title: "Thực Địa Tận Nơi & Đo Đạc Từng Cột Mốc",
    shortLabel: "14:00 Thăm Đất Làng",
    desc: "Mỗi thửa đất, mỗi cung đường mở rộng liên xã đều được tôi trực tiếp đi bộ đo đạc, chụp ảnh và đối chiếu quy hoạch chính xác. Không bao giờ ngồi một chỗ phỏng đoán.",
    quote: "Làm việc bằng đôi chân và đôi mắt thực tế. Có sao nói vậy, kiểm tra mốc giới cẩn thận để bất kỳ ai gửi gắm niềm tin đều an lòng.",
    image: "/images/field_work.png",
    location: "Thực tế tại các tuyến đường liên thôn Phong Điền",
    icon: Sunset
  },
  {
    id: "mai-am",
    time: "18:30 Tối",
    title: "Bình Yên Bên Mái Ấm Gia Đình",
    shortLabel: "18:30 Mái Ấm",
    desc: "Sau một ngày làm việc và rong ruổi khắp nẻo đường quê, niềm hạnh phúc giản dị nhất là trở về bên mâm cơm gia đình ấm áp, sẻ chia tiếng cười cùng vợ con và người thân yêu.",
    quote: "Gia đình là điểm tựa lớn nhất. Sống tử tế, làm việc đàng hoàng để đêm về luôn ngủ một giấc thật ngon và thanh thản.",
    image: "/images/family.jpg",
    location: "Phường Phong Phú, TP Huế",
    icon: Moon
  }
];

export default function DailyRoutineMoments() {
  const [activeId, setActiveId] = useState<string>("sang-som");
  const current = routines.find((r) => r.id === activeId) || routines[0];
  const CurrentIcon = current.icon;

  return (
    <section id="nep-song" className="py-16 lg:py-24 bg-[#F4F1EA]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-amber-800 text-sm font-bold block mb-2">
            Nhật Ký Một Ngày
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-snug">
            Nếp Sống Đời Thường & Chữ Tình Xứ Huế
          </h2>
          <p className="text-sm sm:text-base text-stone-700 mt-2 sm:mt-3 font-normal leading-relaxed">
            Không màu mè hoa mỹ, một ngày của tôi gắn liền với nhịp sống mộc mạc nơi làng quê Phong Điền.
          </p>
        </div>

        {/* Routine Switcher Pills (Horizontal scrolling on mobile) */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar sm:flex-wrap">
          {routines.map((item) => {
            const isActive = item.id === activeId;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-[background-color,color,transform] duration-200 active:scale-95 ${
                  isActive
                    ? "bg-amber-800 text-white "
                    : "bg-white text-stone-700 hover:bg-stone-200 border border-stone-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Routine Showcase Card */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-stone-300 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                  <CurrentIcon className="w-3.5 h-3.5 text-amber-800" />
                  <span>{current.time}</span>
                </div>

                <h3 className="text-xl sm:text-3xl font-extrabold text-stone-900 mb-3 sm:mb-4 leading-snug">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal mb-6">
                  {current.desc}
                </p>

                {/* Personal quote box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-amber-200 mb-6">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-stone-800 italic leading-relaxed">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </div>
                  <span className="block text-xs font-bold text-amber-800 mt-2 text-right">
                    — Trần Thanh Hải (Thanh Hải Xíu)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>{current.location}</span>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 ">
                <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-3 bg-stone-50 text-xs text-stone-600 flex items-center justify-between">
                  <span>Khoảnh khắc đời thường</span>
                  <span className="font-semibold text-amber-800">{current.time}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

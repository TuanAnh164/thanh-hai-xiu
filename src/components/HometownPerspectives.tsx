"use client";

import React, { useState } from "react";
import { MapPin, Compass, ArrowRight, Waves, Trees, Home, Building2 } from "lucide-react";

interface LandArea {
  id: string;
  name: string;
  shortName: string;
  soul: string;
  personalNote: string;
  image: string;
  icon: any;
}

const areas: LandArea[] = [
  {
    id: "dien-huong",
    name: "Điền Hương : Nơi Chôn Nhau Cắt Rốn",
    shortName: "Điền Hương",
    soul: "Xóm làng bình yên ven phá Tam Giang",
    personalNote:
      "Điền Hương quý nhất ở sự mộc mạc và tĩnh tại. Buổi chiều gió từ phá thổi vào mát rượi, hàng xóm tối lửa tắt đèn có nhau. Đất ở đây thế đất cao ráo, phù hợp cho những ai muốn tìm một nơi an cư thanh bình, làm ngôi nhà vườn gần gũi thiên nhiên.",
    image: "/images/main_road.png",
    icon: Home
  },
  {
    id: "dien-loc",
    name: "Điền Lộc : Nhịp Sóng Biển Đang Thức Giấc",
    shortName: "Điền Lộc",
    soul: "Vùng biển giao thoa truyền thống và mở rộng",
    personalNote:
      "Vùng biển Điền Lộc mang trong mình sức sống dạt dào. Những chuyến tàu cá cập bến sáng sớm, tuyến đường ven biển mở rộng từng ngày. Nơi đây dành cho những ai yêu vị mặn mòi của biển và nhìn thấy tiềm năng lâu dài của quê nhà.",
    image: "/images/beach_portrait.jpg",
    icon: Waves
  },
  {
    id: "phong-hai",
    name: "Phong Hải : Bờ Cát Trắng & Sóng Vỗ Hiền Hòa",
    shortName: "Phong Hải",
    soul: "Bãi tắm hoang sơ thanh khiết",
    personalNote:
      "Bờ biển Phong Hải dài và tĩnh lặng, cát trắng mịn màng. Mỗi lần chạy xe qua đây, hít căng lồng ngực mùi gió biển, tôi luôn cảm thấy tự hào vì quê hương mình có những nét đẹp tự nhiên ban tặng hiếm nơi nào có được.",
    image: "/images/beach_portrait.jpg",
    icon: Trees
  },
  {
    id: "do-thi-phong-dien",
    name: "Thị Xã Phong Điền Tương Lai",
    shortName: "Đô Thị Phong Điền",
    soul: "Trung tâm phát triển năng động",
    personalNote:
      "Thị trấn Phong Điền đang chuyển mình mạnh mẽ với trường học, bệnh viện Trung ương cơ sở 2 và phố xá sầm uất. Đổi thay nhưng người Phong Điền vẫn giữ nguyên cốt cách hiền hòa, dễ mến của người Huế.",
    image: "/images/field_work.png",
    icon: Building2
  }
];

export default function HometownPerspectives() {
  const [activeTab, setActiveTab] = useState<string>("dien-huong");
  const current = areas.find((a) => a.id === activeTab) || areas[0];
  const CurrentIcon = current.icon;

  return (
    <section id="que-huong" className="py-16 lg:py-24 bg-[#FAF8F5]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-amber-800 text-sm font-bold block mb-2">
            Góc Nhìn Người Bản Địa
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-snug">
            Tình Yêu Từng Tấc Đất Quê Hương
          </h2>
          <p className="text-sm sm:text-base text-stone-700 mt-2 sm:mt-3 font-normal leading-relaxed">
            Không phải lời quảng cáo thương mại, đây là những cảm nhận chân thành từ một người con gắn bó máu thịt cùng mảnh đất Phong Điền.
          </p>
        </div>

        {/* Tab switcher (horizontal scroll on mobile) */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar sm:flex-wrap">
          {areas.map((area) => {
            const isActive = activeTab === area.id;
            const Icon = area.icon;
            return (
              <button
                key={area.id}
                onClick={() => setActiveTab(area.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-[background-color,color,transform] duration-200 active:scale-95 ${
                  isActive
                    ? "bg-stone-900 text-white "
                    : "bg-white text-stone-700 hover:bg-stone-200 border border-stone-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{area.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Area Detail Showcase */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-stone-300 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold mb-3">
                <CurrentIcon className="w-3.5 h-3.5 text-amber-700" />
                <span>{current.soul}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-stone-900 mb-4 leading-snug">
                {current.name}
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal mb-6">
                {current.personalNote}
              </p>

              <div className="pt-4">
                <a
                  href="https://zalo.me/0982045879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95 "
                >
                  <span>Hỏi Thêm Về {current.shortName} Qua Zalo</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 ">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-3 bg-stone-50 text-xs text-stone-600 flex items-center justify-between">
                  <span>Ảnh thực địa Phong Điền</span>
                  <span className="font-semibold text-stone-800">{current.shortName}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

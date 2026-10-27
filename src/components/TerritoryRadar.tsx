"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Compass } from "lucide-react";

interface RegionInfo {
  id: string;
  name: string;
  tag: string;
  coord: string;
  headline: string;
  advantages: string[];
  haiPerspective: string;
  image: string;
  imageCaption: string;
}

const regions: RegionInfo[] = [
  {
    id: "dien-huong",
    name: "Điền Hương",
    tag: "Vùng Lõi Quê Nhà",
    coord: "16.712 N, 107.389 E",
    headline: "Địa Bàn Điền Hương",
    advantages: [
      "Thổ nhưỡng ven phá Tam Giang mát mẻ quanh năm, không gian sinh thái trong lành",
      "Trục giao thông liên xã mở rộng kết nối thông suốt ra biển Điền Lộc",
      "Mặt bằng giá đất còn nguyên sơ, biên độ an toàn và tích lũy bền vững"
    ],
    haiPerspective:
      "Đất Điền Hương quý ở sự yên bình và tình gắn kết làng xóm. Khi mua đất ở đây, ưu tiên chọn thế đất cao ráo, lối vào bê tông rộng tối thiểu 4m và sổ hồng cá nhân rõ ràng.",
    image: "/images/dien_huong_landscape.png",
    imageCaption: "Thực địa trực tiếp tại Phường Phong Phú, TP Huế"
  },
  {
    id: "dien-loc",
    name: "Điền Lộc",
    tag: "Đô Thị & Cảng Biển",
    coord: "16.698 N, 107.452 E",
    headline: "Đô Thị Biển Điền Lộc",
    advantages: [
      "Đô thị biển tương lai của Phong Điền với định hướng phát triển cảng và du lịch",
      "Trục huyết mạch Quốc lộ 49B kết nối thông thương nhanh chóng",
      "Tiềm năng kinh doanh dịch vụ nghỉ dưỡng, kho bãi hậu cần biển"
    ],
    haiPerspective:
      "Điền Lộc là điểm sáng về hạ tầng kinh tế biển. Cần theo sát lộ trình mở rộng đường trục ven biển và các phân khu dịch vụ công cộng.",
    image: "/images/dien_loc_landscape.png",
    imageCaption: "Khảo sát hạ tầng đô thị biển Điền Lộc, Phong Điền"
  },
  {
    id: "phong-hai",
    name: "Phong Hải",
    tag: "Sinh Thái & Bờ Biển",
    coord: "16.654 N, 107.491 E",
    headline: "Bãi Tắm & Sinh Thái Phong Hải",
    advantages: [
      "Bờ biển hoang sơ tuyệt đẹp, không khí biển tự nhiên trong lành",
      "Hưởng lợi trực tiếp từ tuyến đường ven biển Thừa Thiên Huế đang triển khai",
      "Phù hợp cho các mô hình farmstay, homestay nghỉ dưỡng cuối tuần"
    ],
    haiPerspective:
      "Phong Hải thu hút dòng tiền tìm kiếm không gian sinh thái biển. Chú trọng kiểm tra chỉ giới hành lang bảo vệ bờ biển trước khi ra quyết định.",
    image: "/images/phong_hai_landscape.png",
    imageCaption: "Thực địa bãi biển và dải dân cư ven biển Phong Hải"
  },
  {
    id: "do-thi-phong-dien",
    name: "Đô Thị Phong Điền",
    tag: "Trung Tâm Hành Chính",
    coord: "16.582 N, 107.311 E",
    headline: "Trung Tâm Thị Xã Phong Điền",
    advantages: [
      "Đô thị hóa mạnh mẽ đón đầu lộ trình trở thành thị xã phía Bắc Thừa Thiên Huế",
      "Mạng lưới trường học, bệnh viện Trung ương cơ sở 2, phố chợ sầm uất",
      "Thanh khoản cao, phù hợp định cư lâu dài và kinh doanh đa ngành"
    ],
    haiPerspective:
      "Khu vực trung tâm Phong Điền là nơi có dòng tiền sôi động nhất. Nên ưu tiên các trục đường nhánh kết nối ra Quốc lộ 1A để tối ưu tính thanh khoản.",
    image: "/images/phong_dien_town.png",
    imageCaption: "Trung tâm hành chính và phố thị Phong Điền hiện đại"
  }
];

export default function TerritoryRadar() {
  const [activeId, setActiveId] = useState<string>("dien-huong");
  const current = regions.find((r) => r.id === activeId) || regions[0];

  return (
    <section id="tho-nhuong" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
              <Compass className="w-4 h-4" />
              <span>Bản Đồ Thổ Nhưỡng Chiến Lược</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Cẩm Nang Thực Địa Từng Khu Vực
            </h2>
            <p className="text-base text-slate-300 mt-3 max-w-2xl font-normal">
              Mỗi xã, mỗi cung đường tại Phong Điền đều có đặc thù thổ nhưỡng và chu kỳ riêng. Dưới đây là góc nhìn thực chiến từ người con bản địa.
            </p>
          </div>

          {/* Interactive Radar Selector Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-slate-900 shrink-0">
            {regions.map((reg) => {
              const isActive = reg.id === activeId;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveId(reg.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-[background-color,color] duration-200 ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-slate-500"}`} />
                  <span>{reg.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Territory Showcase Card */}
        <div className="p-8 lg:p-12 rounded-3xl bg-slate-900 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-emerald-400 mb-2">
                  <span>{current.coord}</span>
                  <span>•</span>
                  <span>{current.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
                  {current.headline}
                </h3>

                {/* Strategic Advantages */}
                <div className="space-y-3.5 mb-8">
                  {current.advantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-200 font-normal leading-snug">
                        {adv}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hai's Personal Quote Card */}
                <div className="p-5 rounded-2xl bg-slate-950 mb-8">
                  <span className="block text-xs font-bold text-emerald-400 mb-2">
                    Góc nhìn thực địa của anh Hải
                  </span>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    &ldquo;{current.haiPerspective}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://zalo.me/0982045879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95"
                >
                  <span>Hỏi Anh Hải Về {current.name} Qua Zalo</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <span className="text-xs text-slate-400">
                  Minh bạch pháp lý 100%
                </span>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-slate-800 group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4 bg-slate-950 text-white">
                    <span className="text-xs font-semibold text-emerald-300 block">{current.name}</span>
                    <span className="text-xs text-slate-300">{current.imageCaption}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight, Compass, Sparkles } from "lucide-react";

interface RegionDetail {
  id: string;
  name: string;
  tag: string;
  role: string;
  overview: string;
  advantages: string[];
  haiInsight: string;
  image: string;
}

export default function RegionalHub() {
  const regions: RegionDetail[] = [
    {
      id: "dien-huong",
      name: "Điền Hương",
      tag: "Vùng Lõi Ven Phá Tam Giang",
      role: "Quê nhà & vùng lõi thổ nhưỡng ven đầm phá",
      overview: "Vùng đất trù phú gắn bó từ thuở ấu thơ của tôi, nằm tiếp giáp hệ đầm phá Tam Giang - Cầu Hai. Quỹ đất thổ cư tại đây có tiềm năng sinh thái rất cao, không khí trong lành và cộng đồng dân cư mộc mạc, gắn kết.",
      advantages: [
        "Thổ nhưỡng ven phá Tam Giang mát mẻ quanh năm, phù hợp nhà vườn nghỉ dưỡng",
        "Trục đường giao thông liên xã đang mở rộng, kết nối nhanh ra biển Điền Lộc",
        "Mặt bằng giá đất còn nguyên sơ, dư địa tăng trưởng tài sản bền vững",
      ],
      haiInsight: "Đất Điền Hương quý ở sự yên bình và tính gắn kết làng xóm. Khi chọn mua đất ở đây, ưu tiên chọn thế đất cao ráo, lối vào bê tông rộng tối thiểu 4m và pháp lý sổ hồng cá nhân rõ ràng.",
      image: "/images/xom_cho.png",
    },
    {
      id: "dien-loc",
      name: "Điền Lộc",
      tag: "Trung Tâm Kinh Tế Biển",
      role: "Cửa ngõ biển & trung tâm thương mại ven biển",
      overview: "Điền Lộc giữ vai trò trung tâm kinh tế biển của toàn khu vực Ngũ Điền. Với bờ biển đẹp, cảng cá tấp nập và trục giao thông kết nối thẳng từ Quốc Lộ 1A về biển, Điền Lộc đang thu hút nhiều dòng tiền đầu tư hạ tầng.",
      advantages: [
        "Bãi tắm Điền Lộc - điểm đến du lịch tắm biển đang thu hút du khách",
        "Quy hoạch mở rộng hạ tầng dịch vụ hậu cần nghề cá và khu đô thị biển",
        "Biên độ tăng trưởng giá còn rất lớn so với các vùng biển trung tâm",
      ],
      haiInsight: "Điền Lộc là điểm đến của nhà đầu tư thích tầm nhìn trung và dài hạn. Nên ưu tiên đất có mặt tiền rộng hoặc cách bãi tắm trong bán kính 1km.",
      image: "/images/beach_portrait.jpg",
    },
    {
      id: "phong-hai",
      name: "Phong Hải",
      tag: "Duyên Hải Bãi Ngang",
      role: "Dải duyên hải bãi ngang & du lịch cộng đồng",
      overview: "Vùng dải ven biển bãi ngang mang đậm nét văn hóa ngư dân Cố Đô. Kinh tế thủy hải sản kết hợp du lịch trải nghiệm đang từng bước hình thành.",
      advantages: [
        "Không gian thoáng đãng, bờ cát thoải tự nhiên",
        "Hạ tầng điện đường trường trạm đang được đầu tư đồng bộ",
        "Quỹ đất thổ cư diện tích lớn, phù hợp mô hình nhà vườn nghỉ dưỡng",
      ],
      haiInsight: "Vùng này thích hợp cho các gia đình muốn tích lũy tài sản nhà vườn hoặc định cư yên bình. Cần kiểm tra kỹ mốc quy hoạch hành lang an toàn bờ biển.",
      image: "/images/field_work.png",
    },
    {
      id: "phong-dien-tx",
      name: "Đô Thị Phong Điền",
      tag: "Trung Tâm Thị Xã Tương Lai",
      role: "Trung tâm hành chính & thị xã tương lai",
      overview: "Phong Điền đang trên lộ trình lên Thị xã khi toàn tỉnh Thừa Thiên Huế trở thành Thành phố trực thuộc Trung ương. Vùng lõi đô thị tập trung dịch vụ, y tế, giáo dục hàng đầu.",
      advantages: [
        "Hạ tầng nâng cấp mạnh mẽ theo tiêu chuẩn đô thị loại IV",
        "Thu hút nguồn vốn công và các dự án thương mại dịch vụ",
        "Thanh khoản cao, phù hợp cả đầu tư ngắn và dài hạn",
      ],
      haiInsight: "Đô thị hóa nhanh đồng nghĩa với việc quy hoạch có thể điều chỉnh. Mọi giao dịch tại đây phải thẩm định quy hoạch 1/2000 và 1/500 thật chuẩn xác.",
      image: "/images/so_hong.png",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("dien-huong");
  const currentRegion = regions.find((r) => r.id === activeTab) || regions[0];

  return (
    <section id="thuc-dia" className="w-full bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6" data-reveal>
          <div className="max-w-2xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold w-fit">
              <Compass className="w-4 h-4 text-teal-700" />
              <span>Bản Đồ Thổ Nhưỡng Điền Hương &amp; Phong Điền</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Cẩm Nang Thực Địa Từng Khu Vực
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1 font-normal">
              Mỗi xã, mỗi cung đường tại Phong Điền đều có đặc thù thổ nhưỡng và chu kỳ phát triển riêng. Dưới đây là góc nhìn thực chiến từ người con bản địa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-slate-200/60 p-1.5 rounded-full">
            {regions.map((reg) => {
              const isActive = reg.id === activeTab;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveTab(reg.id)}
                  className={
                    "px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-200 btn-press " +
                    (isActive
                      ? "bg-white text-emerald-800"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60")
                  }
                >
                  {reg.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-8 lg:p-12 rounded-3xl transition-opacity duration-300" data-reveal data-delay="100">
          
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-teal-800">
                  {currentRegion.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Địa bàn {currentRegion.name}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed pt-1 font-normal">
                  {currentRegion.overview}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <span className="text-sm font-bold text-slate-900">
                  Ưu thế chiến lược
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {currentRegion.advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-snug">
                        {adv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50 flex flex-col gap-2">
                <span className="text-sm font-bold text-teal-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                  <span>Góc nhìn thực địa của anh Hải</span>
                </span>
                <p className="text-base text-teal-950 leading-relaxed font-medium">
                  &ldquo;{currentRegion.haiInsight}&rdquo;
                </p>
              </div>

            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <a
                href={"https://zalo.me/0982045879?text=" + encodeURIComponent("Chào anh Hải, tôi muốn hỏi thông tin quy hoạch và bất động sản tại khu vực " + currentRegion.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-bold btn-press transition-colors"
              >
                <span>Hỏi Anh Hải Về {currentRegion.name} Qua Zalo</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-200" />
              </a>

              <span className="text-sm font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Minh bạch pháp lý 100%</span>
              </span>
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col p-2.5 rounded-3xl bg-slate-50 group card-lift">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <img
                src={currentRegion.image}
                alt={"Thực tế địa bàn " + currentRegion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4 flex flex-col gap-1">
              <span className="text-lg font-bold text-slate-900">
                Khảo sát thực địa {currentRegion.name}
              </span>
              <span className="text-sm font-medium text-slate-500">
                Thực địa thực tế tại Phường Phong Phú, TP Huế
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
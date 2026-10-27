import React from "react";
import { ArrowUpRight, ShieldCheck, Bike, Coffee, Users, Heart } from "lucide-react";

export default function BentoGridShowcase() {
  return (
    <section id="uy-tin" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6" data-reveal>
          <div className="max-w-2xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold w-fit">
              <Heart className="w-4 h-4 text-blue-600" />
              <span>Thực Địa &amp; Nếp Sống Đời Thường</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Tác Phong Thực Tế &amp; Chữ Tình Xứ Huế
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1 font-normal">
              Người con Điền Hương với lối sống gắn bó mật thiết cùng làng xóm, thẩm định quy hoạch chuẩn xác và uy tín trao tay.
            </p>
          </div>
        </div>

        {/* BENTO GRID (Rounded-3xl, Colorful Surfaces, Zero Stiffness) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* BENTO ITEM 1: SỔ ĐỎ VAULT (Col-span 7) */}
          <div className="md:col-span-7 bg-emerald-50/80 p-8 lg:p-10 rounded-3xl flex flex-col justify-between gap-8 group card-lift" data-reveal data-delay="100">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-emerald-800">
                Pháp Lý Chuẩn 100%
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Khảo Sát Thực Địa &amp; Thẩm Định Sổ Đỏ Tận Nơi
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Tại Phong Điền, từng ranh mốc giới, thế đất cao thấp hay quy hoạch mở đường liên thôn đều được tôi trực tiếp đo đạc, đối chiếu cùng cơ quan quản lý trước khi kết nối khách hàng.
              </p>
            </div>

            {/* Closed Sổ Hồng Photo */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
              <img
                src="/images/so_hong.png"
                alt="Giấy chứng nhận quyền sử dụng đất - Pháp lý minh bạch"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="flex items-center justify-between pt-2 text-sm text-slate-600">
              <span className="flex items-center gap-2 text-emerald-800 font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Không bán ảo • Không thổi giá • Pháp lý an tâm
              </span>
              <a
                href="tel:0982045879"
                className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors btn-press"
              >
                <span>Tư vấn ngay</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* BENTO ITEM 2: MORNING CYCLING (Col-span 5, Deep Navy Field) */}
          <div className="md:col-span-5 bg-[#0B132B] text-white p-8 lg:p-10 rounded-3xl flex flex-col justify-between gap-6 group card-lift" data-reveal data-delay="200">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300">
                <Bike className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Đạp Xe Rèn Luyện &amp; Cảm Nhận Đất Quê
              </h3>

              <p className="text-base text-slate-200 leading-relaxed font-normal">
                Mỗi sớm mai dọc cung đường ven biển Điền Lộc hay phá Tam Giang, đạp xe là cách tôi nạp &ldquo;vitamin buổi sáng&rdquo;, rèn sức bền và trực tiếp quan sát nhịp sống thay da đổi thịt của từng ngõ xóm quê nhà.
              </p>
            </div>

            <div className="pt-4 text-sm text-amber-200 flex items-center justify-between font-medium">
              <span>Cung đường duyên hải Điền Lộc – Phong Điền</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">05:30 Sáng</span>
            </div>
          </div>

          {/* BENTO ITEM 3: VILLAGE COFFEE (Col-span 5, Warm Honey/Amber Tint) */}
          <div className="md:col-span-5 bg-amber-50/80 p-8 lg:p-10 rounded-3xl flex flex-col justify-between gap-6 group card-lift" data-reveal data-delay="200">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-200 flex items-center justify-center text-amber-800">
                <Coffee className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                Cà Phê Sáng Xóm Chợ Điền Hương
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Nếp quen ngồi cà phê sáng tại Xóm Chợ Điền Hương, chuyện trò cùng các bác cao niên và bà con lối xóm. Lắng nghe chân thật để hiểu được nguồn cội từng mảnh đất, giữ trọn chữ tình của người con xứ Huế.
              </p>
            </div>

            <div className="text-sm font-semibold text-amber-900 flex items-center justify-between">
              <span>Gắn kết cộng đồng bản địa mộc mạc</span>
              <span className="px-3 py-1 rounded-full bg-amber-200/80 text-xs font-bold">Xóm Chợ</span>
            </div>
          </div>

          {/* BENTO ITEM 4: PHONG DIEN ASSOCIATION (Col-span 7, Cool Cyan/Blue Tint) */}
          <div className="md:col-span-7 bg-sky-50/80 p-8 lg:p-10 rounded-3xl flex flex-col justify-between gap-6 group card-lift" data-reveal data-delay="300">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-200 flex items-center justify-center text-sky-800">
                <Users className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Hội Bất Động Sản Phong Điền
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Tích cực sinh hoạt và kết nối cùng mạng lưới anh em môi giới, nhà đầu tư bản địa. Chung tay xây dựng một môi trường giao dịch bất động sản chuẩn mực, minh bạch và lành mạnh tại địa phương.
              </p>
            </div>

            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-white">
              <img
                src="/images/event_phongdien.jpg"
                alt="Giao lưu cùng Hội BĐS Khu Vực Phong Điền"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

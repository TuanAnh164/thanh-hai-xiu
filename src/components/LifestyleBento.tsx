"use client";

import React from "react";
import { Bike, Coffee, Users, ShieldCheck } from "lucide-react";

export default function LifestyleBento() {
  return (
    <section id="thuc-dia" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-emerald-400 text-xs font-bold mb-2">
            Nếp Sống & Tác Phong Thực Địa
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tác Phong Thực Tế & Chữ Tình Xứ Huế
          </h2>
          <p className="text-base text-slate-300 mt-3 font-normal">
            Người con Điền Hương với lối sống gắn bó mật thiết cùng làng xóm, thẩm định quy hoạch chuẩn xác và uy tín trao tay.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Pháp Lý Sổ Đỏ Tận Nơi */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Thẩm Định Pháp Lý & Sổ Đỏ Tận Nơi
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                Tại Phong Điền, từng ranh mốc giới, thế đất cao thấp hay quy hoạch mở đường liên thôn đều được tôi trực tiếp đo đạc, đối chiếu cùng cơ quan quản lý trước khi kết nối khách hàng.
              </p>
            </div>

            {/* Sổ hồng bìa ngoài khép kín */}
            <div className="rounded-2xl overflow-hidden bg-slate-800">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/images/so_hong.png"
                  alt="Sổ hồng minh bạch pháp lý"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3.5 bg-slate-950 flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  Không bán ảo • Không thổi giá
                </span>
                <span className="text-slate-400 font-normal">Trực tiếp người mua & người bán</span>
              </div>
            </div>
          </div>

          {/* Card 2: Đạp Xe Buổi Sáng */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Bike className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Đạp Xe Cảm Nhận Đất Quê
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Mỗi sớm mai dọc cung đường ven biển Điền Lộc hay phá Tam Giang, đạp xe là cách tôi nạp &ldquo;vitamin buổi sáng&rdquo;, rèn sức bền và trực tiếp quan sát nhịp sống thay da đổi thịt của từng ngõ xóm quê nhà.
              </p>
            </div>

            <div className="mt-8 pt-4 text-xs text-cyan-300">
              Cung đường duyên hải Điền Lộc - Phong Điền • 05:30 Sáng
            </div>
          </div>

          {/* Card 3: Cà Phê Sáng Xóm Chợ */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                <Coffee className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Cà Phê Sáng Xóm Chợ Điền Hương
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Nếp quen ngồi cà phê sáng tại Xóm Chợ Điền Hương, chuyện trò cùng các bác cao niên và bà con lối xóm. Lắng nghe chân thật để hiểu được nguồn cội từng mảnh đất, giữ trọn chữ tình của người con xứ Huế.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs font-semibold text-amber-300">
              <span>Gắn kết cộng đồng bản địa mộc mạc</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300">Xóm Chợ</span>
            </div>
          </div>

          {/* Card 4: Hội BĐS Phong Điền */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Hội Bất Động Sản Phong Điền
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Tích cực sinh hoạt và kết nối cùng mạng lưới anh em môi giới, nhà đầu tư bản địa. Chung tay xây dựng một môi trường giao dịch bất động sản chuẩn mực, minh bạch và lành mạnh tại địa phương.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-800">
              <div className="aspect-[21/9] w-full overflow-hidden">
                <img
                  src="/images/hoi_bds.png"
                  alt="Gặp mặt Hội Bất Động Sản Phong Điền"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

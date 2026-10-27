"use client";

import React from "react";
import { FileCheck, Users } from "lucide-react";

export default function IntegrityAndCommunity() {
  return (
    <section id="chu-tin" className="py-20 lg:py-28 bg-[#FAF8F5]" data-reveal>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-800 text-sm font-bold block mb-2">
            Nguyên Tắc Sống & Làm Việc
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Một Chữ Tín Quý Hơn Ngàn Lời Nói
          </h2>
          <p className="text-base text-stone-700 mt-3 font-normal leading-relaxed">
            Tôi luôn tâm niệm: làm việc gì cũng phải đàng hoàng, rõ ràng để bà con và bạn bè tin tưởng, đêm về ngủ ngon giấc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8" data-reveal data-delay="100">
          
          {/* Sổ hồng bìa ngoài khép kín */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-white border border-stone-200 flex flex-col justify-between hover-lift transition-[transform,border-color] duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900 mb-3">
                100% Sổ Đỏ Trao Tay & Pháp Lý Minh Bạch
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal mb-6">
                Mỗi mảnh đất tôi giới thiệu đều phải có sổ hồng chính chủ rõ ràng, mốc giới rành mạch, không vướng tranh chấp hay quy hoạch treo. Tuyệt đối không bán ảo, không thổi giá, kết nối người mua và người bán trực tiếp.
              </p>
            </div>

            {/* Sổ hồng photo bìa ngoài */}
            <div className="rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/images/so_hong.png"
                  alt="Sổ hồng minh bạch pháp lý"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-3 bg-stone-50 text-xs font-semibold text-stone-700 flex items-center justify-between">
                <span>Giấy chứng nhận quyền sử dụng đất hợp pháp</span>
                <span className="text-amber-800 font-bold">Minh bạch 100%</span>
              </div>
            </div>
          </div>

          {/* Hội BĐS Phong Điền & Tình Anh Em */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-white border border-stone-200 flex flex-col justify-between hover-lift transition-[transform,border-color] duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900 mb-3">
                Hội Bất Động Sản Phong Điền
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal mb-6">
                Tích cực sinh hoạt cùng anh em bạn bè bản địa trong Hội BĐS Phong Điền. Cùng nhau xây dựng môi trường giao lưu văn minh, giúp đỡ nhau và giữ trọn chữ tín trong nghề.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/event_phongdien.jpg"
                  alt="Gặp mặt Hội Bất Động Sản Phong Điền"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-3 bg-stone-50 text-xs text-stone-600">
                Gặp mặt anh em Hội BĐS Phong Điền, Thừa Thiên Huế
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

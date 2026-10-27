"use client";

import React, { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

const inquiries = [
  "Kiểm tra quy hoạch & pháp lý sổ đỏ",
  "Tư vấn đất thổ cư & nhà vườn Điền Hương",
  "Giao lưu đạp xe & cà phê xóm chợ Điền Hương"
];

export default function DirectDispatcher() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>(inquiries[0]);

  return (
    <section id="ket-noi" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="text-emerald-400 text-xs font-bold mb-2">
              Tư Vấn Trực Tiếp Cùng Anh Hải
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Đồng Hành Cùng Nhà Đầu Tư
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal mb-8">
              Dù bạn là nhà đầu tư tìm kiếm cơ hội thổ nhưỡng tại Phong Điền, người con xa xứ muốn mua đất an cư nơi quê nhà, hay cần kiểm tra quy hoạch một thửa đất cụ thể — tôi luôn sẵn lòng lắng nghe và đồng hành tận tâm.
            </p>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-3xl bg-emerald-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block text-xs font-medium text-emerald-100">
                  Đường dây nóng cá nhân
                </span>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  0982 045 879
                </span>
              </div>
              <a
                href="tel:0982045879"
                className="px-6 py-3 rounded-full bg-white text-emerald-900 font-bold text-sm hover:bg-slate-100 transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95 text-center shrink-0"
              >
                Gọi Ngay
              </a>
            </div>

            <div className="mt-4 text-xs text-slate-400 font-medium">
              Địa chỉ: Phường Phong Phú, TP Huế
            </div>
          </div>

          {/* Right Column: Interactive Quick Zalo Dispatcher */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-900">
            <h3 className="text-lg font-bold text-white mb-2">
              Tôi có thể hỗ trợ bạn điều gì hôm nay?
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-normal">
              Chọn nhu cầu bên dưới để gửi tin nhắn trực tiếp qua Zalo
            </p>

            <div className="space-y-3 mb-8">
              {inquiries.map((inq, idx) => {
                const isSelected = selectedInquiry === inq;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedInquiry(inq)}
                    className={`w-full p-4 rounded-2xl text-left text-sm font-semibold flex items-center justify-between transition-[background-color,color] duration-200 ${
                      isSelected
                        ? "bg-emerald-950 text-emerald-300"
                        : "bg-slate-950 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {isSelected && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                      <span>{inq}</span>
                    </span>
                    <span className="text-xs text-slate-400 font-normal">
                      {isSelected ? "Đã chọn" : "Chọn"}
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              href={`https://zalo.me/0982045879?text=${encodeURIComponent(
                "Chào anh Hải, tôi muốn nhờ anh tư vấn: " + selectedInquiry
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-[transform,background-color] duration-200 hover:scale-[1.02] active:scale-95"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Nhắn Tin Zalo Cùng Anh Hải (0982 045 879)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

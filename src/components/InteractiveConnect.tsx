"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, ArrowUpRight, Check, Sparkles } from "lucide-react";

export default function InteractiveConnect() {
  const topics = [
    {
      id: "quy-hoach",
      label: "Kiểm tra quy hoạch & pháp lý sổ đỏ",
      defaultMsg: "Chào anh Hải, tôi cần tư vấn kiểm tra quy hoạch và pháp lý sổ đỏ tại khu vực Phong Điền.",
    },
    {
      id: "dat-tho-cu",
      label: "Tư vấn đất thổ cư & nhà vườn Điền Hương",
      defaultMsg: "Chào anh Hải, tôi đang tìm hiểu mua/bán đất thổ cư tại Điền Hương, nhờ anh tư vấn giúp.",
    },
    {
      id: "giao-luu",
      label: "Giao lưu đạp xe & cà phê xóm chợ Điền Hương",
      defaultMsg: "Chào anh Hải, tôi muốn kết nối giao lưu cùng anh và anh em Hội BĐS Phong Điền.",
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0].id);
  const currentTopic = topics.find((t) => t.id === selectedTopic) || topics[0];

  return (
    <section id="lien-he" className="w-full bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white p-8 lg:p-14 rounded-3xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold w-fit">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Tư Vấn Trực Tiếp Cùng Anh Hải</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Đồng Hành Cùng Nhà Đầu Tư
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Dù bạn là nhà đầu tư tìm kiếm cơ hội thổ nhưỡng tại Phong Điền, người con xa xứ muốn mua đất an cư nơi quê nhà, hay cần kiểm tra quy hoạch một thửa đất cụ thể — tôi luôn sẵn lòng lắng nghe và đồng hành tận tâm.
              </p>

              <div className="p-6 rounded-2xl bg-emerald-600 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-emerald-100 font-medium">
                      Đường dây nóng cá nhân
                    </span>
                    <a
                      href="tel:0982045879"
                      className="text-2xl font-extrabold tracking-wide text-white hover:underline"
                    >
                      0982 045 879
                    </a>
                  </div>
                </div>

                <a
                  href="tel:0982045879"
                  className="px-6 py-3 bg-white text-emerald-800 rounded-full text-sm font-bold hover:bg-emerald-50 btn-press transition-colors"
                >
                  Gọi Ngay
                </a>
              </div>

              <div className="text-sm font-medium text-slate-500">
                Địa chỉ: Phường Phong Phú, TP Huế
              </div>

            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 p-6 lg:p-8 bg-slate-50 rounded-2xl">
              
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-slate-900">
                  Tôi có thể hỗ trợ bạn điều gì hôm nay?
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  Chọn nhu cầu bên dưới để gửi tin nhắn trực tiếp qua Zalo
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {topics.map((t) => {
                  const isSelected = t.id === selectedTopic;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(t.id)}
                      className={
                        "text-left p-4 rounded-xl transition-colors duration-200 flex items-center justify-between btn-press " +
                        (isSelected
                          ? "bg-white text-emerald-800 font-bold"
                          : "bg-white/60 text-slate-700 hover:bg-white")
                      }
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            "w-5 h-5 rounded-full flex items-center justify-center " +
                            (isSelected ? "bg-emerald-100 text-emerald-700" : "hidden")
                          }
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-semibold">
                          {t.label}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-700">Chọn</span>
                    </button>
                  );
                })}
              </div>

              <a
                href={"https://zalo.me/0982045879?text=" + encodeURIComponent(currentTopic.defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#0068FF] hover:bg-[#0052cc] text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 btn-press transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Nhắn Tin Zalo Cùng Anh Hải (0982 045 879)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
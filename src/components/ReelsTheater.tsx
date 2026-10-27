"use client";

import React from "react";
import { Play, ArrowUpRight } from "lucide-react";

interface ReelItem {
  id: string;
  title: string;
  views: string;
  desc: string;
  category: string;
}

const reelsData: ReelItem[] = [
  {
    id: "reel-1",
    title: "Khảo Sát Thực Địa Tuyến Đường Liên Xã Điền Hương",
    views: "11K+ lượt xem",
    desc: "Ghi lại chân thực quy mô tuyến đường liên xã kết nối ra biển, đánh giá tiềm năng hình thành khu dân cư.",
    category: "Thực địa nổi bật"
  },
  {
    id: "reel-2",
    title: "Nhịp Sống Buổi Sớm Tại Xóm Chợ Điền Hương",
    views: "9.8K lượt xem",
    desc: "Những khoảnh khắc mộc mạc, gần gũi cùng bà con quê nhà, sẻ chia không khí nhộn nhịp của buổi chợ sáng.",
    category: "Đời thường bản địa"
  },
  {
    id: "reel-3",
    title: "Kiểm Tra Mốc Giới & Quy Hoạch Đất Trước Khi Giao Dịch",
    views: "7.5K lượt xem",
    desc: "Kinh nghiệm thực chiến kiểm tra sổ đỏ, tọa độ trích lục tránh rủi ro chồng lấn hay vướng hành lang kỹ thuật.",
    category: "Pháp lý thực tế"
  }
];

export default function ReelsTheater() {
  return (
    <section id="video-reels" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-emerald-400 text-xs font-bold mb-2">
              Thước Phim Chân Thực Facebook Reels
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Khảo Sát Hiện Trường Chân Thực
            </h2>
            <p className="text-base text-slate-300 mt-3 max-w-2xl font-normal">
              Những thước phim ngắn tiếp cận hàng chục ngàn lượt xem trên Facebook, ghi lại thực tế sống động từng góc đất, con đường Phong Điền.
            </p>
          </div>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-[transform,background-color] duration-200 hover:scale-105"
          >
            <span>Xem tất cả video trên Facebook</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reelsData.map((item) => (
            <div
              key={item.id}
              className="group p-8 rounded-3xl bg-slate-900 flex flex-col justify-between hover:bg-slate-800 transition-[background-color] duration-200"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                  <span className="font-semibold text-emerald-400">{item.category}</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-full">{item.views}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <div className="flex items-end gap-1 h-6">
                    <span className="w-1 bg-emerald-400 rounded-full animate-wave-1 h-3" />
                    <span className="w-1 bg-emerald-400 rounded-full animate-wave-2 h-5" />
                    <span className="w-1 bg-emerald-400 rounded-full animate-wave-3 h-4" />
                    <span className="w-1 bg-emerald-400 rounded-full animate-wave-2 h-2" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Mở xem trên Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

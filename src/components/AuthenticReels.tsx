"use client";

import React from "react";
import { Play, ArrowUpRight, Video } from "lucide-react";

interface ReelStory {
  id: string;
  title: string;
  views: string;
  desc: string;
}

const reelStories: ReelStory[] = [
  {
    id: "reel-1",
    title: "Buổi Sớm Khảo Sát Tuyến Đường Liên Xã Điền Hương",
    views: "11K+ lượt xem",
    desc: "Đi bộ dọc con đường mới mở rộng, ngắm nhìn cây cầu và lối vào thôn xóm, chia sẻ cùng bà con về sự thay đổi của làng quê."
  },
  {
    id: "reel-2",
    title: "Nhịp Sống Mộc Mạc Tại Xóm Chợ Điền Hương",
    views: "9.8K lượt xem",
    desc: "Ghi lại nụ cười của các mệ, các o đi chợ sớm, tiếng chào hỏi thân thương đậm đà chất giọng Huế."
  },
  {
    id: "reel-3",
    title: "Kinh Nghiệm Kiểm Tra Mốc Giới Thực Địa Trước Khi Quyết Định",
    views: "7.5K lượt xem",
    desc: "Chia sẻ chân tình cách xem mốc giới, trích lục bản đồ địa chính để bà con an tâm, không lo tranh chấp."
  }
];

export default function AuthenticReels() {
  return (
    <section id="thuo-phim" className="py-20 lg:py-28 bg-[#F4F1EA]" data-reveal>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-amber-800 text-sm font-bold block mb-2">
              Khoảnh Khắc Đời Thường
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              Thước Phim Chân Thực Qua Góc Nhìn Anh Hải
            </h2>
            <p className="text-base text-stone-700 mt-3 max-w-2xl font-normal leading-relaxed">
              Những video ngắn quay bằng điện thoại, không dàn dựng, ghi lại chân thật cảnh sắc quê hương và được hàng ngàn bạn bè trên Facebook theo dõi.
            </p>
          </div>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-bold text-sm transition-[transform,background-color] duration-200 hover:scale-105"
          >
            <span>Facebook Trần Thanh Hải (5.5K Bạn Đọc)</span>
            <ArrowUpRight className="w-4 h-4 text-amber-800" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal data-delay="100">
          {reelStories.map((reel) => (
            <div
              key={reel.id}
              className="p-8 rounded-3xl bg-white border border-stone-300 flex flex-col justify-between hover:border-amber-400 transition-[border-color] duration-200"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
                  <span className="font-bold text-amber-800">Facebook Reel</span>
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 font-semibold">{reel.views}</span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 mb-6">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-3 leading-snug">
                  {reel.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {reel.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors"
                >
                  <span>Xem video trên Facebook</span>
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

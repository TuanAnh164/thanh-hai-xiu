"use client";

import React from "react";
import { CheckCircle2, Users, Video, ShieldCheck } from "lucide-react";

const metricsData = [
  {
    num: "100%",
    label: "Gốc Bản Địa",
    desc: "Sinh ra và gắn bó tại Điền Hương, am tường từng tấc đất quê hương.",
    icon: CheckCircle2,
  },
  {
    num: "5.5K+",
    label: "Bạn Đọc Theo Dõi",
    desc: "Cộng đồng theo dõi thường xuyên trên Facebook cá nhân cùng sự tin cậy.",
    icon: Users,
  },
  {
    num: "11K+",
    label: "Lượt Xem Video",
    desc: "Lượt xem video Reels chia sẻ chân thực về thực địa và kinh nghiệm quy hoạch.",
    icon: Video,
  },
  {
    num: "100%",
    label: "Sổ Đỏ Trao Tay",
    desc: "Kiểm tra kỹ lưỡng quy hoạch, pháp lý giấy chứng nhận quyền sử dụng đất an tâm.",
    icon: ShieldCheck,
  },
];

export default function LiveMetrics() {
  return (
    <section className="relative py-12 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-slate-900 hover:bg-slate-800 transition-[background-color,transform] duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-200 mb-1">
                  {item.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

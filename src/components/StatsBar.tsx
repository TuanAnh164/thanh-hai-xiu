"use client";

import React, { useState, useEffect, useRef } from "react";
import { Award, Users, Video, ShieldCheck } from "lucide-react";

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "100%",
      label: "Gốc Huế",
      desc: "Sinh ra và lớn lên tại Điền Hương, am tường sâu sắc từng tấc đất và nhịp sống Cố Đô.",
      color: "text-emerald-700",
      bgTint: "bg-emerald-50",
      icon: Award,
    },
    {
      value: "5.5K+",
      label: "Bạn đọc MXH",
      desc: "Lượng người theo dõi thường xuyên trên Facebook cùng sự tin yêu của bà con địa phương.",
      color: "text-blue-700",
      bgTint: "bg-blue-50",
      icon: Users,
    },
    {
      value: "11K+",
      label: "Lượt xem video",
      desc: "Kỷ lục lượt xem các video Reels chia sẻ chân thực về thực địa, xóm làng và kinh nghiệm quy hoạch.",
      color: "text-amber-700",
      bgTint: "bg-amber-50",
      icon: Video,
    },
    {
      value: "100%",
      label: "Sổ đỏ trao tay",
      desc: "Kiểm tra kỹ lưỡng quy hoạch, pháp lý giấy chứng nhận quyền sử dụng đất an tâm tuyệt đối.",
      color: "text-teal-700",
      bgTint: "bg-teal-50",
      icon: ShieldCheck,
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col gap-3 p-6 rounded-3xl transition-[opacity,transform] duration-700 card-lift ${item.bgTint} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${item.color}`}>
                    {item.value}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-slate-700">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-base font-bold text-slate-900">
                    {item.label}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

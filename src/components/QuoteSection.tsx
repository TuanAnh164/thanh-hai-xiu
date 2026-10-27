import React from "react";
import { Sparkles } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="w-full bg-emerald-700 text-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6" data-reveal>
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-emerald-200">
          <Sparkles className="w-6 h-6" />
        </div>

        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
          &ldquo;Bất động sản giá trị nhất là mảnh đất có pháp lý chuẩn, thổ nhưỡng thật và an tâm tuyệt đối.&rdquo;
        </blockquote>

        <div className="flex flex-col items-center gap-1 pt-2">
          <span className="text-lg font-bold text-white">
            Trần Thanh Hải
          </span>
          <span className="text-sm font-medium text-emerald-100">
            Thanh Hải Xíu • Điền Hương, Phong Điền, Thừa Thiên Huế
          </span>
        </div>
      </div>
    </section>
  );
}

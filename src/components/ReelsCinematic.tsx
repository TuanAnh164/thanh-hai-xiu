import React from "react";
import { Play, Eye, ArrowUpRight, Video } from "lucide-react";

export default function ReelsCinematic() {
  const reels = [
    {
      views: "11K+",
      title: "Khảo Sát Thực Địa Tuyến Đường Liên Xã Điền Hương",
      desc: "Ghi lại chân thực quy mô tuyến đường liên xã kết nối ra biển, đánh giá tiềm năng hình thành khu dân cư mới.",
      tag: "Thực địa nổi bật",
      thumb: "/images/main_road.png",
      url: "https://www.facebook.com/haixiu.thanh/reels/",
    },
    {
      views: "9.8K",
      title: "Nhịp Sống Buổi Sớm Tại Xóm Chợ Điền Hương",
      desc: "Những khoảnh khắc mộc mạc, gần gũi cùng bà con quê nhà, sẻ chia không khí nhộn nhịp của vùng đất đang đổi mới.",
      tag: "Đời thường bản địa",
      thumb: "/images/xom_cho.png",
      url: "https://www.facebook.com/haixiu.thanh/reels/",
    },
    {
      views: "7.5K",
      title: "Kiểm Tra Mốc Giới & Quy Hoạch Đất Trước Khi Giao Dịch",
      desc: "Kinh nghiệm thực chiến kiểm tra sổ đỏ, tọa độ trích lục tránh rủi ro chồng lấn hay vướng hành lang bảo vệ.",
      tag: "Pháp lý thực tế",
      thumb: "/images/so_hong.png",
      url: "https://www.facebook.com/haixiu.thanh/reels/",
    },
  ];

  return (
    <section id="reels" className="w-full bg-[#0F172A] text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6" data-reveal>
          <div className="max-w-2xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-300 text-sm font-semibold w-fit">
              <Video className="w-4 h-4 text-emerald-400" />
              <span>Thước Phim Thực Tế Facebook Reels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Khảo Sát Hiện Trường Chân Thực
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-1 font-normal">
              Những thước phim ngắn tiếp cận hàng chục ngàn lượt xem trên Facebook, ghi lại thực tế sống động từng góc đất, con đường Phong Điền.
            </p>
          </div>

          <a
            href="https://www.facebook.com/haixiu.thanh/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-sm font-bold text-emerald-300 btn-press transition-colors"
          >
            <span>Xem tất cả video trên Facebook</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Video Cards with Rounded-3xl */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reels.map((reel, idx) => (
            <a
              key={idx}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#1E293B] rounded-3xl overflow-hidden card-lift"
              data-reveal
              data-delay={(idx + 1) * 100}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={reel.thumb}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Play Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm text-emerald-300 font-semibold">
                    <span>{reel.tag}</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Eye className="w-3.5 h-3.5" />
                      {reel.views} lượt xem
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug pt-1">
                    {reel.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 font-normal">
                    {reel.desc}
                  </p>
                </div>

                <div className="pt-3 text-sm font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Mở xem trên Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

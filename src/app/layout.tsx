import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trần Thanh Hải (Thanh Hải Xíu) | Chuyên Gia BĐS & Nhà Đầu Tư Phong Điền - Huế",
  description: "Trang cá nhân chính thức của anh Trần Thanh Hải (Thanh Hải Xíu) - Chuyên gia BĐS, nhà đầu tư thực chiến am hiểu thổ nhưỡng Điền Hương, Phong Điền, Thừa Thiên Huế. Hotline: 0982 045 879.",
  keywords: [
    "Trần Thanh Hải",
    "Thanh Hải Xíu",
    "BĐS Thanh Hải Xíu",
    "Bất động sản Phong Điền",
    "Bất động sản Điền Hương",
    "Đất Điền Hương Phong Điền Huế",
    "Hội Bất Động Sản Phong Điền"
  ],
  openGraph: {
    title: "Trần Thanh Hải (Thanh Hải Xíu) | Chuyên Gia BĐS Phong Điền - Huế",
    description: "Uy Tín - Minh Bạch - Đồng Hành Cùng Sự Phát Triển Của Phong Điền. Hotline: 0982 045 879.",
    images: ["/images/hero_hai.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-[100svh] bg-[#F8FAFC] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}

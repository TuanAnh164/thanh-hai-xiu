"use client";

import React, { useEffect } from "react";
import WarmSunlightBackground from "@/components/WarmSunlightBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DailyRoutineMoments from "@/components/DailyRoutineMoments";
import CommunityHeart from "@/components/CommunityHeart";
import HometownPerspectives from "@/components/HometownPerspectives";
import AuthenticReels from "@/components/AuthenticReels";
import IntegrityAndCommunity from "@/components/IntegrityAndCommunity";
import WarmFriendlyConnect from "@/components/WarmFriendlyConnect";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.05,
      }
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-[100svh] flex flex-col bg-[#FAF8F5] text-stone-900 relative selection:bg-amber-700 selection:text-white pb-20 md:pb-0">
      {/* Warm natural morning sunlight particles - High Performance GPU Optimized */}
      <WarmSunlightBackground />

      {/* Floating friendly navigation */}
      <Header />

      <main className="flex-1 relative z-10">
        {/* 1. Hero: Warm, genuine personal greeting & couple portrait */}
        <Hero />

        {/* 2. Interactive Daily Life Routine: 05:30 Bike -> 07:00 Market Coffee -> 14:00 Village Walk -> 18:30 Family */}
        <DailyRoutineMoments />

        {/* 3. Community Heart: TDP Điền Hương, Thanh Hương & Real Facebook Life */}
        <CommunityHeart />

        {/* 4. Authentic Hometown Notes: Love for Điền Hương, Điền Lộc, Phong Hải */}
        <HometownPerspectives />

        {/* 5. Real Facebook Reels: Living authentic video captures */}
        <AuthenticReels />

        {/* 6. Integrity & Community: Sổ Hồng 100% & Hoi BDS Phong Dien */}
        <IntegrityAndCommunity />

        {/* 7. Friendly Invitation: Cup of market coffee & sincere conversation */}
        <WarmFriendlyConnect />
      </main>

      {/* 8. Warm Footer */}
      <Footer />

      {/* 9. Dedicated Mobile Action Bar */}
      <MobileBottomBar />
    </div>
  );
}

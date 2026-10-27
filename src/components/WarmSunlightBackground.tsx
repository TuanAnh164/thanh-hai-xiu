"use client";

import React, { useEffect, useRef } from "react";

export default function WarmSunlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Warm morning light motes floating gently
    const motesCount = Math.min(Math.floor((width * height) / 30000), 30);
    const motes: Array<{
      x: number;
      y: number;
      vy: number;
      vx: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < motesCount; i++) {
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.3 - 0.1, // slowly float upwards like sun motes
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.25 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < motes.length; i++) {
        const m = motes[i];
        m.x += m.vx;
        m.y += m.vy;

        if (m.y < -10) {
          m.y = height + 10;
          m.x = Math.random() * width;
        }
        if (m.x < 0) m.x = width;
        if (m.x > width) m.x = 0;

        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#D97706"; // warm golden amber
        ctx.globalAlpha = m.alpha;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft warm morning ambient blooms */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-amber-100/60 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-emerald-50/70 blur-[140px]" />
      <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] rounded-full bg-orange-50/60 blur-[150px]" />

      {/* Gentle floating morning sun motes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
}

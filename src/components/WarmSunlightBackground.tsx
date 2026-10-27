"use client";

import React from "react";

export default function WarmSunlightBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 
        Hardware-accelerated ambient sun motes.
        Runs entirely on GPU compositor thread with 0% JS/canvas CPU load on Safari.
      */}
      <div className="sun-mote mote-1" />
      <div className="sun-mote mote-2" />
      <div className="sun-mote mote-3" />
      <div className="sun-mote mote-4" />
      <div className="sun-mote mote-5" />
      <div className="sun-mote mote-6" />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  v: number;
  tw: number;
  green: boolean;
};

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let stars: Star[] = [];
    let raf = 0;

    const size = () => {
      W = cv.width = cv.offsetWidth * devicePixelRatio;
      H = cv.height = cv.offsetHeight * devicePixelRatio;
      stars = Array.from({ length: Math.floor(cv.offsetWidth / 12) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: (Math.random() * 1.1 + 0.3) * devicePixelRatio,
        v: (Math.random() * 0.06 + 0.02) * devicePixelRatio,
        tw: Math.random() * Math.PI * 2,
        green: Math.random() < 0.12,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        const a = 0.14 + 0.22 * (0.5 + 0.5 * Math.sin(t / 1400 + s.tw));
        ctx.fillStyle = s.green
          ? `rgba(52,211,153,${a})`
          : `rgba(255,255,255,${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 7);
        ctx.fill();
        if (!reduced) {
          s.y -= s.v;
          if (s.y < -2) s.y = H + 2;
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    size();
    window.addEventListener("resize", size);
    if (reduced) draw(0);
    else raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", size);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
    />
  );
}

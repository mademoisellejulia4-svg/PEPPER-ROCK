"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const BOTTLES = [
  { h: 62, w: 16, hue: "#7a3a12", top: 0 },
  { h: 74, w: 18, hue: "#2a1f14", top: 2 },
  { h: 58, w: 15, hue: "#8a4a1a", top: 4 },
  { h: 80, w: 20, hue: "#3a2412", top: 0 },
  { h: 66, w: 16, hue: "#6a2a10", top: 3 },
  { h: 70, w: 17, hue: "#1f150c", top: 1 },
  { h: 60, w: 15, hue: "#9a5a22", top: 5 },
  { h: 76, w: 19, hue: "#2a1a0e", top: 0 },
  { h: 64, w: 16, hue: "#7a3a12", top: 2 },
  { h: 72, w: 18, hue: "#4a2812", top: 4 },
  { h: 58, w: 14, hue: "#8a4a1a", top: 1 },
  { h: 68, w: 17, hue: "#2a1f14", top: 3 },
];

export default function BarReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const shelfRef = useRef<HTMLDivElement>(null);
  const bokehRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.fromTo(
        revealRef.current,
        { autoAlpha: 0, scale: 1.1, filter: "blur(9px)" },
        { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "none" },
        0
      )
        .to(baseRef.current, { autoAlpha: 0.15, scale: 1.08, duration: 0.6, ease: "none" }, 0)
        // depth: shelves drift slower than bokeh lights for a subtle parallax read
        .fromTo(shelfRef.current, { y: 40 }, { y: -10, duration: 1, ease: "none" }, 0)
        .fromTo(bokehRef.current, { y: 70 }, { y: -30, duration: 1, ease: "none" }, 0)
        .fromTo(
          textRef.current,
          { autoAlpha: 0, y: 30, filter: "blur(8px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.25, ease: "power1.out" },
          0.55
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-noir">
        {/* base layer: last frame of the pour, held from the hero */}
        <div
          ref={baseRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: "url(/assets/img/pour-hero-last.jpg)" }}
        />

        {/* reveal layer: the wider bar, sharpening into focus */}
        <div ref={revealRef} className="absolute inset-0 will-change-transform">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,#1a0f09_0%,#070504_60%)]" />
          {/* wood counter */}
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-wood/40 via-wood-dark to-noir" />
          {/* warm bokeh lights */}
          <div ref={bokehRef} className="absolute inset-0 will-change-transform">
            {[
              { l: "8%", t: "18%", s: 90 },
              { l: "22%", t: "10%", s: 60 },
              { l: "40%", t: "22%", s: 120 },
              { l: "58%", t: "8%", s: 70 },
              { l: "74%", t: "16%", s: 100 },
              { l: "90%", t: "24%", s: 65 },
            ].map((b, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-gold-bright/25 blur-2xl"
                style={{
                  left: b.l,
                  top: b.t,
                  width: b.s,
                  height: b.s,
                }}
              />
            ))}
          </div>
          {/* shelves of bottles */}
          <div
            ref={shelfRef}
            className="absolute inset-x-0 top-[14%] flex justify-center gap-3 px-6 will-change-transform md:top-[16%] md:gap-4"
          >
            {BOTTLES.map((b, i) => (
              <div
                key={i}
                className="rounded-t-sm rounded-b-[2px] shadow-[0_8px_18px_rgba(0,0,0,0.5)]"
                style={{
                  width: b.w,
                  height: b.h,
                  marginTop: b.top * 4,
                  background: `linear-gradient(180deg, ${b.hue}dd, ${b.hue})`,
                  border: "1px solid rgba(202,163,84,0.25)",
                }}
              />
            ))}
          </div>
          <div className="absolute inset-x-0 top-[14%] mt-24 h-[2px] bg-gradient-to-r from-transparent via-copper/50 to-transparent md:mt-28" />

          <div className="absolute inset-0 [background:radial-gradient(ellipse_70%_60%_at_50%_55%,transparent_0%,rgba(0,0,0,0.65)_100%)]" />
        </div>

        <div
          ref={textRef}
          className="pointer-events-none absolute inset-x-0 bottom-24 flex flex-col items-center text-center opacity-0"
        >
          <span className="text-[11px] uppercase tracking-widest2 text-gold-bright/90">
            Welcome
          </span>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-6xl">
            Step into the bar.
          </h2>
          <p className="mt-3 max-w-sm px-6 font-display italic text-cream-dim">
            Copper light, dark wood, and cocktails poured with craft.
          </p>
        </div>
      </div>
    </section>
  );
}

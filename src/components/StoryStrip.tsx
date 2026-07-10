"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function StoryStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: 40 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative overflow-hidden border-y border-gold/10 bg-noir-soft px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="text-[11px] uppercase tracking-widest2 text-gold-bright/90">
            The Jungle
          </span>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            It starts on
            <br />
            Pepper Street.
          </h2>
          <p className="mt-5 max-w-md text-cream-dim">
            Right in the heart of Nottingham city centre, three floors of
            comfy sofas and quirky jungle decor. Come for the popcorn and
            Bunkdogs, stay for the cocktails poured low-light, slow, and with
            care.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative aspect-[6/5] overflow-hidden rounded-md border border-gold/15"
        >
          <div
            ref={imgRef}
            className="absolute inset-[-10%] will-change-transform"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,#4a2812_0%,#1a0f09_60%,#070504_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-wood/40 to-noir" />
            {[
              { l: "15%", t: "20%", s: 70 },
              { l: "55%", t: "12%", s: 100 },
              { l: "78%", t: "28%", s: 60 },
            ].map((b, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-gold-bright/20 blur-2xl"
                style={{ left: b.l, top: b.t, width: b.s, height: b.s }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

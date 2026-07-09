"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const AUTOPLAY_INTRO_SECONDS = 1.7;

export default function Hero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const servedRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!video || !wrapper || !stage) return;

    let ctx: gsap.Context | undefined;
    let cancelled = false;

    const setupScrub = () => {
      if (cancelled) return;
      const duration = video.duration || AUTOPLAY_INTRO_SECONDS + 0.1;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            pin: stage,
            anticipatePin: 1,
          },
        });

        tl.to(
          titleRef.current,
          { autoAlpha: 0, y: -24, duration: 0.12, ease: "power1.out" },
          0
        )
          .to(
            cueRef.current,
            { autoAlpha: 0, duration: 0.08, ease: "power1.out" },
            0
          )
          .to(
            video,
            {
              currentTime: duration,
              ease: "none",
              duration: 0.82,
            },
            0.06
          )
          .fromTo(
            servedRef.current,
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.1, ease: "power1.out" },
            0.86
          );
      }, wrapper);
    };

    const beginIntro = () => {
      if (cancelled) return;
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => {});

      const onTimeUpdate = () => {
        if (video.currentTime >= AUTOPLAY_INTRO_SECONDS) {
          video.pause();
          video.removeEventListener("timeupdate", onTimeUpdate);
          setupScrub();
        }
      };
      video.addEventListener("timeupdate", onTimeUpdate);
    };

    if (video.readyState >= 1) {
      beginIntro();
    } else {
      video.addEventListener("loadedmetadata", beginIntro, { once: true });
    }

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={wrapperRef} id="top" className="relative h-[380vh]">
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden bg-noir"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          poster="/assets/img/pour-hero-poster.jpg"
        >
          <source src="/assets/video/pour-hero.webm" type="video/webm" />
          <source src="/assets/video/pour-hero.mp4" type="video/mp4" />
        </video>

        {/* scrim for text legibility + speakeasy warmth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/70" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_38%,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-copper/10 mix-blend-multiply" />

        <div
          ref={titleRef}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-start pt-28 text-center md:pt-32"
        >
          <span className="text-[11px] uppercase tracking-widest2 text-gold-bright/90">
            Nottingham &middot; 12 Pepper Street
          </span>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] md:text-8xl">
            Pepper Rocks
          </h1>
          <p className="mt-4 max-w-md font-display text-lg italic text-cream-dim">
            Prenez place au comptoir.
          </p>
        </div>

        <div
          ref={cueRef}
          className="pointer-events-none absolute inset-x-0 bottom-10 flex flex-col items-center gap-2"
        >
          <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest2 text-cream-dim">
            Scroll
          </span>
        </div>

        <p
          ref={servedRef}
          className="pointer-events-none absolute inset-x-0 bottom-14 text-center font-display text-2xl italic text-gold-bright opacity-0 md:bottom-20 md:text-3xl"
        >
          Servi avec soin.
        </p>
      </div>
    </section>
  );
}

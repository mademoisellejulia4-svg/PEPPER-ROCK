"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const AUTOPLAY_INTRO_SECONDS = 1.7;

const CHAPTERS = [
  { label: "The Pour", at: 0.14, span: 0.16 },
  { label: "The Finish", at: 0.5, span: 0.14 },
];

export default function Hero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const servedRef = useRef<HTMLParagraphElement>(null);
  const gradeRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<Array<HTMLSpanElement | null>>([]);

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
            scrub: 0.7,
            pin: stage,
            anticipatePin: 1,
          },
        });

        // title / scroll cue dismiss almost immediately once scrolling begins
        tl.to(
          titleRef.current,
          { autoAlpha: 0, y: -24, filter: "blur(6px)", duration: 0.1, ease: "power1.out" },
          0
        ).to(
          cueRef.current,
          { autoAlpha: 0, duration: 0.06, ease: "power1.out" },
          0
        );

        // the pour, scrubbed frame-accurately by scroll position
        tl.to(
          video,
          { currentTime: duration, ease: "none", duration: 0.86 },
          0.05
        );

        // slow Ken Burns push-in across the whole sequence, compositor-cheap
        tl.fromTo(
          videoWrapRef.current,
          { scale: 1 },
          { scale: 1.08, ease: "none", duration: 1 },
          0
        );

        // dramatic contrast intensifies toward the served moment
        tl.fromTo(
          gradeRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "none", duration: 0.3 },
          0.7
        );

        // chapter captions, each a soft blur/fade window
        CHAPTERS.forEach((chapter, i) => {
          const el = chapterRefs.current[i];
          if (!el) return;
          tl.fromTo(
            el,
            { autoAlpha: 0, y: 10, filter: "blur(8px)" },
            { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: chapter.span * 0.4, ease: "power1.out" },
            chapter.at
          ).to(
            el,
            { autoAlpha: 0, filter: "blur(8px)", duration: chapter.span * 0.4, ease: "power1.in" },
            chapter.at + chapter.span * 0.6
          );
        });

        // final serve line + the moment the rest of the site is allowed to appear
        tl.fromTo(
          servedRef.current,
          { autoAlpha: 0, y: 16, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.1, ease: "power1.out" },
          0.87
        );
      }, wrapper);
    };

    const beginIntro = () => {
      if (cancelled) return;

      // focus-pull: video racks into focus as the autoplay intro begins
      gsap.fromTo(
        video,
        { filter: "blur(5px)" },
        { filter: "blur(0px)", duration: 1.1, ease: "power2.out" }
      );

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
    <section ref={wrapperRef} id="top" className="relative h-[440vh]">
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden bg-noir"
      >
        <div ref={videoWrapRef} className="absolute inset-0 h-full w-full">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            poster="/assets/img/pour-hero-poster.jpg"
          >
            <source src="/assets/video/pour-hero.webm" type="video/webm" />
            <source src="/assets/video/pour-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* scrim for text legibility + speakeasy warmth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/70" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_38%,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-copper/10 mix-blend-multiply" />
        <div
          ref={gradeRef}
          className="pointer-events-none absolute inset-0 opacity-0 [background:radial-gradient(ellipse_55%_45%_at_50%_55%,transparent_0%,rgba(0,0,0,0.6)_100%)]"
        />

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
            Take your seat at the bar.
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

        {/* chapter captions */}
        <div className="pointer-events-none absolute inset-x-0 bottom-14 flex justify-center md:bottom-20">
          {CHAPTERS.map((chapter, i) => (
            <span
              key={chapter.label}
              ref={(el) => {
                chapterRefs.current[i] = el;
              }}
              className="absolute text-[11px] uppercase tracking-widest2 text-gold-bright/90 opacity-0"
            >
              {chapter.label}
            </span>
          ))}
        </div>

        <p
          ref={servedRef}
          className="pointer-events-none absolute inset-x-0 bottom-14 text-center font-display text-2xl italic text-gold-bright opacity-0 md:bottom-20 md:text-3xl"
        >
          Served with care.
        </p>
      </div>
    </section>
  );
}

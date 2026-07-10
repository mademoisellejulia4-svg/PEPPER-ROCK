"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#classics", label: "Menu" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [revealed, setRevealed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");

    const onScroll = () => {
      const heroHeight = hero?.offsetHeight ?? 0;
      const revealPoint = heroHeight * 0.86;
      setRevealed(window.scrollY > revealPoint);
      setScrolled(window.scrollY > revealPoint + 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        revealed
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      } ${
        scrolled
          ? "border-b border-gold/15 bg-noir/85 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-cream"
        >
          Pepper Rocks
        </a>
        <div className="hidden gap-10 text-xs uppercase tracking-[0.2em] text-cream-dim md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-gold-bright"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#visit"
          className="rounded-sm border border-gold/70 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold-bright transition-colors hover:bg-gold hover:text-noir"
        >
          Find Us
        </a>
      </div>
    </nav>
  );
}

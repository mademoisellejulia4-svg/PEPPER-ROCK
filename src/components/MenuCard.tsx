"use client";

import { motion } from "framer-motion";
import type { Cocktail } from "@/lib/cocktails";

export default function MenuCard({
  cocktail,
  index,
}: {
  cocktail: Cocktail;
  index: number;
}) {
  const textBlock = (
    <>
      <h3 className="font-display text-2xl text-gold-bright">{cocktail.name}</h3>
      {cocktail.tag && (
        <p className="mt-0.5 text-xs uppercase tracking-wide text-cream-dim/70">
          {cocktail.tag}
        </p>
      )}
      <p className="mt-3 border-t border-gold/10 pt-3 text-xs leading-relaxed text-cream-dim/80">
        {cocktail.ingredients}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="font-display text-xl text-cream">{cocktail.price}</span>
        <motion.span
          variants={{ hover: { color: "#e8c580", borderColor: "#e8c580" } }}
          className="rounded-sm border border-gold/30 px-4 py-2 text-[10px] uppercase tracking-widest text-cream-dim"
        >
          Order at the bar
        </motion.span>
      </div>
    </>
  );

  if (cocktail.image) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
        whileHover="hover"
        className="group relative overflow-hidden rounded-md border border-gold/15 bg-gradient-to-b from-noir-raised to-noir"
      >
        <div className="relative h-52 w-full overflow-hidden">
          <motion.img
            src={cocktail.image}
            alt={cocktail.name}
            variants={{ hover: { scale: 1.08 } }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir via-noir/10 to-transparent" />
          <motion.div
            variants={{ hover: { opacity: 1 } }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, rgba(202,163,84,0.18), transparent 60%)",
            }}
          />
          {cocktail.badge && (
            <span className="absolute right-4 top-4 rounded-sm bg-gold-bright px-2.5 py-1 text-[10px] uppercase tracking-widest text-noir shadow-md">
              {cocktail.badge}
            </span>
          )}
        </div>
        <div className="p-7 pt-5">{textBlock}</div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-md border border-gold/15 bg-gradient-to-b from-noir-raised to-noir p-7"
    >
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 rounded-md"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, rgba(202,163,84,0.14), transparent 60%)",
        }}
      />

      {cocktail.badge && (
        <span className="absolute right-5 top-5 rounded-sm bg-gold-bright px-2.5 py-1 text-[10px] uppercase tracking-widest text-noir">
          {cocktail.badge}
        </span>
      )}

      <motion.div
        variants={{ hover: { scale: 1.06, y: -4 } }}
        transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
        className="mx-auto mb-5 flex h-40 items-center justify-center"
      >
        <svg viewBox="0 0 120 160" className="h-full drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)]">
          <defs>
            <linearGradient id={`grad-${cocktail.slug}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={cocktail.tint[0]} />
              <stop offset="100%" stopColor={cocktail.tint[1]} />
            </linearGradient>
          </defs>
          <path
            d="M25 30 L95 30 L78 110 Q60 122 42 110 Z"
            fill={`url(#grad-${cocktail.slug})`}
            opacity={0.92}
          />
          <path
            d="M20 26 L100 26 L80 114 Q60 128 40 114 Z"
            fill="none"
            stroke="#f3e3c4"
            strokeWidth={2.5}
            opacity={0.6}
          />
          <path d="M60 118 L60 148" stroke="#caa354" strokeWidth={3} />
          <path d="M40 152 L80 152" stroke="#caa354" strokeWidth={3.5} strokeLinecap="round" />
          <circle cx="45" cy="40" r="4" fill="#fff" opacity={0.7} />
        </svg>
      </motion.div>

      {textBlock}
    </motion.article>
  );
}

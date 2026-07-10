"use client";

import { motion } from "framer-motion";
import { classicCocktails } from "@/lib/cocktails";

export default function ClassicCocktails() {
  return (
    <section
      id="classics"
      className="relative bg-noir px-6 py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <span className="text-[11px] uppercase tracking-widest2 text-gold-bright/90">
          The Classics
        </span>
        <h2 className="mt-4 font-display text-4xl text-cream md:text-6xl">
          Classic Cocktails.
        </h2>
        <p className="mt-4 text-cream-dim">
          The originals, made properly &mdash; starting with the house Mai Tai.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {classicCocktails.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: (i % 6) * 0.06,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            whileHover={c.image ? "hover" : undefined}
            className="group border-b border-gold/10 pb-5 transition-colors hover:border-gold/40"
          >
            <div className={c.image ? "flex gap-4" : undefined}>
              {c.image && (
                <div className="flex h-20 w-14 shrink-0 items-end justify-center">
                  <motion.img
                    src={c.image}
                    alt={c.name}
                    variants={{ hover: { scale: 1.12, y: -2 } }}
                    transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg text-gold-bright transition-colors group-hover:text-gold-bright md:text-xl">
                    {c.name}
                  </h3>
                  <span className="whitespace-nowrap font-display text-base text-cream">
                    {c.price}
                  </span>
                </div>
                {c.note && (
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-cream-dim/60">
                    {c.note}
                  </p>
                )}
                <p className="mt-2 text-xs leading-relaxed text-cream-dim/75">
                  {c.ingredients}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-xl text-center text-xs text-cream-dim/60">
        Menu &amp; prices correct at time of writing &mdash; always check
        pepperrocks.co.uk for the latest.
      </p>
    </section>
  );
}

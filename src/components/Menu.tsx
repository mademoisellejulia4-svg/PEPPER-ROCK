"use client";

import { motion } from "framer-motion";
import { cocktails } from "@/lib/cocktails";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <section id="menu" className="relative bg-noir px-6 py-28 md:px-10 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <span className="text-[11px] uppercase tracking-widest2 text-gold-bright/90">
          The Menu
        </span>
        <h2 className="mt-4 font-display text-4xl text-cream md:text-6xl">
          Cocktails, crafted here.
        </h2>
        <p className="mt-4 text-cream-dim">
          Nottingham&rsquo;s favourite pours, since day one.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cocktails.map((c, i) => (
          <MenuCard key={c.slug} cocktail={c} index={i} />
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-xl text-center text-xs text-cream-dim/60">
        Plus classics, shots, bar snacks, wine &amp; a full spirits list at the
        bar. Ask about our happy hour. Menu &amp; prices correct at time of
        writing &mdash; always check pepperrocks.co.uk for the latest.
      </p>
    </section>
  );
}

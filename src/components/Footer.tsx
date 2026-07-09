export default function Footer() {
  return (
    <footer id="visit" className="border-t border-gold/10 bg-noir px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg text-gold-bright">Pepper Rocks</p>
          <p className="text-xs uppercase tracking-wide text-cream-dim">
            12 Pepper Street &middot; Nottingham
          </p>
        </div>
        <div className="text-xs text-cream-dim">
          <p>0115 958 6477 &middot; peppersnotts@gmail.com</p>
          <p>&copy; 2026 Pepper Rocks. Drink responsibly. 18+ only.</p>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-wide text-cream-dim">
          <a
            href="https://www.facebook.com/PepperRocks/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold-bright"
          >
            Facebook
          </a>
          <a href="#" className="transition-colors hover:text-gold-bright">
            Instagram
          </a>
          <a
            href="mailto:peppersnotts@gmail.com"
            className="transition-colors hover:text-gold-bright"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

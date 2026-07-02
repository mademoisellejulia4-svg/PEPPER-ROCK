(() => {
  'use strict';

  const nav = document.getElementById('nav');
  const progressBar = document.getElementById('progressBar');
  const hero = document.getElementById('hero');
  const heroLeaf = document.getElementById('heroLeaf');
  const heroSunset = document.getElementById('heroSunset');

  let ticking = false;

  function updateOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // nav state
    nav.classList.toggle('scrolled', scrollY > 40);

    // reading progress
    if (docHeight > 0) {
      progressBar.style.width = `${Math.min(100, (scrollY / docHeight) * 100)}%`;
    }

    // hero pinned crossfade + subtle zoom, driven by scroll progress through hero height
    if (hero) {
      const heroHeight = hero.offsetHeight - window.innerHeight;
      const heroTop = hero.offsetTop;
      let progress = (scrollY - heroTop) / heroHeight;
      progress = Math.max(0, Math.min(1, progress));

      // leaf visible first half, sunset crossfades in second half
      const fade = Math.max(0, Math.min(1, (progress - 0.35) / 0.45));
      heroLeaf.style.opacity = String(1 - fade);
      heroSunset.style.opacity = String(fade);

      const leafScale = 1 + progress * 0.35;
      heroLeaf.style.transform = `scale(${leafScale})`;
      const sunsetScale = 1.15 - fade * 0.15;
      heroSunset.style.transform = `scale(${sunsetScale})`;
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateOnScroll();

  // reveal-on-scroll
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-in');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach((el) => io.observe(el));

  // mobile nav burger
  const burger = document.getElementById('navBurger');
  if (burger) {
    burger.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  // newsletter form (no backend — friendly acknowledgement only)
  const form = document.getElementById('newsletterForm');
  const note = document.getElementById('newsletterNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      if (email) {
        note.textContent = `Welcome to the inner circle, ${email}.`;
        form.reset();
      }
    });
  }

  // ensure the ritual video actually plays on browsers that block autoplay until interaction
  const ritualVideo = document.querySelector('.video-feature__media');
  if (ritualVideo) {
    const tryPlay = () => ritualVideo.play().catch(() => {});
    tryPlay();
    document.addEventListener('click', tryPlay, { once: true });
    document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
  }
})();

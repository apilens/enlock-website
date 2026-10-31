(() => {
  const root = document.documentElement;
  const save = v => { try { localStorage.setItem('enlock-theme', v); } catch {} };

  // Dark is the default; the button flips between dark and light.
  document.querySelector('.theme-btn')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    save(next);
  });

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Legal pages: mark the section in view.
  const links = [...document.querySelectorAll('.toc a')];
  if (links.length) {
    const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const tio = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { links.forEach(a => a.classList.remove('active')); map.get(e.target.id)?.classList.add('active'); }
    }), { rootMargin: '-20% 0px -70% 0px' });
    map.forEach((_, id) => { const el = document.getElementById(id); if (el) tio.observe(el); });
  }

  const y = document.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();
})();

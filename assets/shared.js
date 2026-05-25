// ============================================================
// KKYU Portfolio v4 — shared boot
// nav scroll state · reveal IO · tweaks panel
// ============================================================

(function () {
  // ---- Nav scroll state ----
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- IntersectionObserver reveal ----
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // ---- Tweaks panel ----
  const POINTS = ['blue', 'navy', 'midnight'];
  const SWATCH = { blue: '#1e40af', navy: '#0a1f4d', midnight: '#0c0f15' };
  const LABEL = { blue: 'Brand Blue', navy: 'Deep Navy', midnight: 'Midnight' };

  // Restore saved point color from localStorage
  const saved = localStorage.getItem('kkyu.point') || 'blue';
  if (POINTS.includes(saved) && saved !== 'blue') {
    document.documentElement.setAttribute('data-point', saved);
  }

  function buildTweaks() {
    const root = document.createElement('div');
    root.className = 'tweaks';
    root.id = 'tweaks';
    root.innerHTML = `
      <div class="tweaks-card">
        <div class="tweaks-head">
          <span>— TWEAKS</span>
          <button class="tweaks-close" aria-label="Close">×</button>
        </div>
        <div class="tweaks-label">포인트 컬러</div>
        <div class="tweaks-row">
          ${POINTS.map(p => `
            <button class="tweaks-swatch ${saved === p ? 'active' : ''}" data-point="${p}">
              <span class="tweaks-swatch-dot" style="background:${SWATCH[p]}"></span>
              <span>${LABEL[p]}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    document.body.appendChild(root);

    // Wire swatches
    root.querySelectorAll('.tweaks-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        const p = sw.dataset.point;
        if (p === 'blue') {
          document.documentElement.removeAttribute('data-point');
        } else {
          document.documentElement.setAttribute('data-point', p);
        }
        localStorage.setItem('kkyu.point', p);
        root.querySelectorAll('.tweaks-swatch').forEach(s => s.classList.toggle('active', s === sw));
      });
    });

    // Close button
    root.querySelector('.tweaks-close').addEventListener('click', () => {
      root.classList.remove('on');
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
    });

    return root;
  }

  const tweaks = buildTweaks();

  // Edit-mode protocol — register listener FIRST
  window.addEventListener('message', (ev) => {
    const t = ev?.data?.type;
    if (t === '__activate_edit_mode') tweaks.classList.add('on');
    if (t === '__deactivate_edit_mode') tweaks.classList.remove('on');
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
})();

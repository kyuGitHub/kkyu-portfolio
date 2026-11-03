// KKYU portfolio — small progressive enhancements. Every page reads fine without this file.
(function () {
  // Sticky header: translucent after scrolling
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Section reveal (content starts visible when JS or IntersectionObserver is missing)
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el, i) {
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(sib, 5) * 60 + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
  // Printing, and tools that never scroll, still get every section
  var showAll = function () { items.forEach(function (el) { el.classList.add('in'); }); };
  window.addEventListener('beforeprint', showAll);
  setTimeout(showAll, 4000);

  // Email copy buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var status = document.getElementById(btn.getAttribute('aria-describedby'));
      var done = function (msg) {
        if (!status) return;
        status.textContent = '';
        requestAnimationFrame(function () { status.textContent = msg; });
        clearTimeout(btn._t);
        btn._t = setTimeout(function () { status.textContent = ''; }, 3000);
      };
      var fallback = function () {
        var code = btn.parentElement && btn.parentElement.querySelector('code');
        if (code && window.getSelection) window.getSelection().selectAllChildren(code);
        done('주소를 선택했습니다. 복사해 주세요');
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done('복사했습니다'); }, fallback);
      } else {
        fallback();
      }
    });
  });

  // Agent map: pick a node to show its detail
  var map = document.querySelector('[data-agent-map]');
  if (map) {
    var nodes = map.querySelectorAll('[data-agent]');
    var panels = document.querySelectorAll('[data-agent-panel]');
    var select = function (id) {
      nodes.forEach(function (n) { n.setAttribute('aria-pressed', n.getAttribute('data-agent') === id ? 'true' : 'false'); });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-agent-panel') !== id; });
    };
    nodes.forEach(function (n) {
      n.addEventListener('click', function () {
        select(n.getAttribute('data-agent'));
        var panel = document.getElementById(n.getAttribute('aria-controls'));
        if (panel && panel.getBoundingClientRect().top > window.innerHeight * 0.7) {
          var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
          panel.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
        }
      });
    });
    select(map.getAttribute('data-default') || nodes[0].getAttribute('data-agent'));
  }
})();

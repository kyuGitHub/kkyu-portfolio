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

  // Email copy buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var status = document.getElementById(btn.getAttribute('aria-describedby'));
      var done = function (msg) { if (status) status.textContent = msg; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done('복사했습니다'); }, function () { done('주소를 길게 눌러 복사해 주세요'); });
      } else {
        done('주소를 길게 눌러 복사해 주세요');
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
      n.addEventListener('click', function () { select(n.getAttribute('data-agent')); });
    });
    select(map.getAttribute('data-default') || nodes[0].getAttribute('data-agent'));
  }
})();

// Shared layout and helpers for src/pages/*.mjs
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
export const F = JSON.parse(readFileSync(join(root, 'data/facts.json'), 'utf8'));
export const SITE = 'https://kkyu-portfolio.vercel.app';
export const EMAIL = 'hukami6472@gmail.com';
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/kkyu64',
  github: 'https://github.com/kyuGitHub',
  diary: 'https://diary-puce-nine.vercel.app/',
  ab180: 'https://cshub.ab180.co/ko/case-studies/ui-ux',
  zdnet: 'https://zdnet.co.kr/view/?no=20201026151142',
};

export const icon = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  out: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',
};

export const ext = (href, label) => `<a class="text-link" href="${href}" target="_blank" rel="noopener noreferrer">${label}${icon.out}</a>`;

const NAV = [
  { href: '/work.html', label: 'Work', key: 'work' },
  { href: '/ai.html', label: 'AI Lab', key: 'ai' },
  { href: '/about.html', label: 'About', key: 'about' },
];

function header(active) {
  return `<a class="skip" href="#main">본문으로 건너뛰기</a>
<header class="site-header">
  <div class="container">
    <a class="wordmark" href="/" aria-label="KKYU 홈">KKYU</a>
    <nav class="site-nav" aria-label="주 메뉴">
      ${NAV.map(n => `<a href="${n.href}"${n.key === active ? ' aria-current="page"' : ''}>${n.label}</a>`).join('\n      ')}
    </nav>
    <a class="btn btn--sm header-cta" href="#contact">연락<span class="hide-sm">하기</span></a>
  </div>
</header>`;
}

function footer() {
  return `<footer class="site-footer" id="contact">
  <div class="container">
    <div class="footer-cta">
      <div>
        <span class="eyebrow">CONTACT</span>
        <h2 class="display2">채용과 협업 제안을<br>기다립니다</h2>
      </div>
      <div class="stack">
        <p>이메일이나 링크드인으로 연락 주세요. 채용, 협업, 강연 제안 모두 환영합니다.</p>
        <div class="email-copy">
          <code>${EMAIL}</code>
          <button class="btn btn--sm btn--inverse" type="button" data-copy="${EMAIL}" aria-describedby="copy-status">주소 복사</button>
          <span class="copy-status" id="copy-status" role="status" aria-live="polite"></span>
        </div>
        <div class="btn-row">
          <a class="btn btn--inverse" href="mailto:${EMAIL}">메일 보내기 ${icon.arrow}</a>
          <a class="btn btn--secondary" href="${LINKS.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ${icon.out}</a>
        </div>
      </div>
    </div>
    <div class="footer-grid">
      <a class="wordmark" href="/">KKYU</a>
      <div class="footer-col">
        <span>페이지</span>
        ${NAV.map(n => `<a href="${n.href}">${n.label}</a>`).join('\n        ')}
      </div>
      <div class="footer-col">
        <span>링크</span>
        <a href="${LINKS.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="${LINKS.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${LINKS.diary}" target="_blank" rel="noopener noreferrer">에이전트 일기</a>
      </div>
    </div>
    <div class="footer-base">
      <span>© 2026 김현규</span>
      <span>디지털금융 PM</span>
    </div>
  </div>
</footer>`;
}

export function layout(p) {
  const url = SITE + (p.path === 'index.html' ? '/' : '/' + p.path);
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light">
<title>${p.title}</title>
<meta name="description" content="${p.description}">${p.noindex ? '\n<meta name="robots" content="noindex">' : ''}
${p.noindex ? '' : `<link rel="canonical" href="${url}">`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="KKYU">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.description}">
${p.noindex ? '' : `<meta property="og:url" content="${url}">`}
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:locale" content="ko_KR">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css">
<link rel="stylesheet" href="/assets/site.bundle.css">
<script>document.documentElement.classList.add('js')</script>${p.jsonld ? `\n<script type="application/ld+json">${JSON.stringify(p.jsonld)}</script>` : ''}
<script src="/assets/site.js" defer></script>
</head>
<body>
${header(p.nav)}
<main id="main">
${p.body.trim()}
</main>
${footer()}
</body>
</html>
`;
}

// ---- Shared building blocks for pages ----
export function caseCard(c, i = 9) {
  const load = i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
  const media = c.image
    ? `<div class="card-media"><img src="${c.image}" alt="${c.imageAlt}" ${load} width="1600" height="1000"></div>`
    : `<div class="card-media card-media--type${c.dark ? ' card-media--dark' : ''}"><span class="big num">${c.big}</span><span class="cap">${c.cap}</span></div>`;
  return `<a class="card reveal" href="${c.href}">
  ${media}
  <div class="card-body">
    <span class="card-eyebrow">${c.eyebrow}</span>
    <h3 class="card-title">${c.title}</h3>
    <p class="card-desc">${c.desc}</p>
    <span class="card-meta">${c.badges.map(b => `<span class="badge">${b}</span>`).join('')}</span>
  </div>
</a>`;
}

export function casePage(c) {
  return `<div class="container">
  <section class="case-hero">
    <a class="text-link back" href="${c.back.href}">${icon.back}${c.back.label}</a>
    <span class="eyebrow">CASE</span>
    <span class="case-meta">${c.eyebrow}</span>
    <h1 class="display2">${c.title}</h1>
    <p class="lead">${c.lead}</p>
  </section>
  <dl class="summary">
    ${c.summary.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n    ')}
  </dl>
  ${c.sections.map(s => `<section class="case-section reveal">
    <h2>${s.h}</h2>
    <div class="case-body">${s.body}</div>
  </section>`).join('\n  ')}
  <nav class="next-case" aria-label="다른 케이스">
    ${c.prev ? `<a href="${c.prev.href}"><span class="k">이전</span><span class="t">${c.prev.title}</span></a>` : ''}
    ${c.next ? `<a href="${c.next.href}"><span class="k">다음</span><span class="t">${c.next.title}</span></a>` : ''}
  </nav>
</div>`;
}

export const PRESS = [
  { src: 'AB180 CS Hub', kind: '고객 사례', date: '', title: 'Amplitude로 UI/UX와 전환율 개선', desc: '메인화면 개인화로 활성 사용률 30% → 60%, 기능 탐색 2배. 데이터로 앱 화면과 완료율을 개선한 과정이 Amplitude 공식 파트너의 고객 사례로 소개됐습니다.', href: LINKS.ab180 },
  { src: 'ZDNet Korea', kind: '인터뷰', date: '2020.10', title: '성공적인 마케팅, \'고객여정\'을 명확히 이해해라', desc: '"다양한 실험, 빠른 진행, 데이터로 피드백에 집중합니다." 인하우스 마케팅 조직과 고객여정 중심의 그로스 방식을 이야기했습니다.', href: LINKS.zdnet },
  { src: '모바일히어로즈', kind: '마케터 커뮤니티', date: '2020 – 2023', title: '리프트오프 주관 마케터 모임 · 인터뷰 게재', desc: '모바일 앱 마케터 커뮤니티에서 활동하며 인하우스 퍼포먼스 마케팅 경험을 공유했고, 인터뷰가 게재됐습니다.', href: '' },
];

export const pressSection = (id = 'press') => `<section class="section" id="${id}" aria-labelledby="${id}-title">
  <div class="container">
    <div class="sh-split">
      <div><span class="eyebrow">PRESS</span><h2 class="title1" id="${id}-title">외부에 소개된 일</h2></div>
      <div><p>데이터로 고객경험을 바꾼 사례와 인하우스 마케팅 방식이 업계 매체와 커뮤니티에 소개됐습니다.</p></div>
    </div>
    <div class="grid-3">
      ${PRESS.map(x => `<${x.href ? `a class="card reveal" href="${x.href}" target="_blank" rel="noopener noreferrer"` : 'article class="card reveal"'}>
        <div class="card-body">
          <span class="card-eyebrow">${x.src} · ${x.kind}${x.date ? ' · ' + x.date : ''}</span>
          <h3 class="card-title">${x.title}</h3>
          <p class="card-desc">${x.desc}</p>
          ${x.href ? `<span class="card-meta"><span class="text-link">원문 보기${icon.out}</span></span>` : ''}
        </div>
      </${x.href ? 'a' : 'article'}>`).join('\n      ')}
    </div>
  </div>
</section>`;

export const results = items => `<div class="results results--${Math.min(items.length, 4)}">${items.map(([v, k, tag]) => `<div class="result"><div class="v">${v}</div><div class="k">${k}</div>${tag ? `<div class="tag"><span class="badge">${tag}</span></div>` : ''}</div>`).join('')}</div>`;


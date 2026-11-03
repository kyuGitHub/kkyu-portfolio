import { F, icon, caseCard, LINKS, ext, pressSection } from '../../scripts/lib.mjs';

const featured = [
  { href: '/work/loan-comparison.html', image: '/assets/img/work/loan-toss.webp', imageAlt: '토스에서 페퍼저축은행 대출로 이어지는 화면', eyebrow: '페퍼저축은행 · 2018 – 현재', title: '대출비교 신사업과 제휴 10개사', desc: '대출비교 서비스를 초기부터 주도해 월 신용대출을 10억에서 150억으로 키우고, 제휴 10개사의 계약부터 정산까지 총괄합니다.', badges: ['그로스', '제휴', '내부통제'] },
  { href: '/work/mobile-banking.html', image: '/assets/img/work/banking-app.webp', imageAlt: '페퍼저축은행 모바일뱅킹 앱 화면', eyebrow: '페퍼저축은행 · 2019 – 2021', title: '차세대 모바일뱅킹 0→1', desc: `비대면 채널이 없던 저축은행에 회원가입부터 오픈뱅킹까지 전 범위를 설계했습니다. 예산 ${F.banking.budget}, 조직 ${F.banking.team}.`, badges: ['서비스기획 PM', '발주', '조직 구축'] },
  { href: '/work/data-cx.html', big: `${F.data.events}<small>이벤트</small>`, cap: `직접 설계한 행동 데이터 · 속성 ${F.data.properties}개`, eyebrow: '페퍼저축은행 · 2021 – 2024', title: '데이터 파이프라인 구축', desc: `AppsFlyer·Amplitude·Tableau 파이프라인을 직접 도입하고 운영했습니다. 사내 첫 클라우드 분석 도입, Retention ${F.data.retention}.`, badges: ['데이터', 'CX', '보안성 심의'] },
  { href: '/work/system-integration.html', big: F.integration.budget, cap: `${F.integration.people} · ${F.integration.months} · 진행 중`, eyebrow: '페퍼저축은행 · 2026 – 진행 중', title: '통합시스템 구축 총괄 PM', desc: `부서별 시스템의 중복 운영을 문제로 정의해 통합을 직접 제안하고, 요구사항 ${F.integration.requirements}을 정리해 공개입찰로 업체를 선정했습니다.`, badges: ['PMO', 'RFP·입찰', '제안·발주'] },
  { href: '/ai/second-brain.html', image: '/assets/img/work/secondbrain-1.webp', imageAlt: '세컨브레인 지식 그래프 화면', eyebrow: 'AI · 2025 – 현재', title: '세컨브레인', desc: `회의록·요구사항·의사결정을 연결된 지식으로 쌓는 팀 단위 AI 시스템. 회의록 작성 ${F.secondBrain.minutes}.`, badges: ['사내 최초 팀 적용', 'Claude', '옵시디언'] },
  { href: '/ai/admin-generator.html', image: '/assets/img/work/admin-generator.webp', imageAlt: '어드민 화면 제너레이터 화면 목록', eyebrow: 'AI · 개인 프로젝트 · 2026', title: '어드민 화면 제너레이터', desc: '요구사항을 넣으면 디자인 시스템 규격대로 어드민 화면과 화면정의서를 만드는 도구. PPT 화면설계서를 대체하는 것이 목표입니다.', badges: ['업무 도구', '사내 파일럿 제안'] },
];

const agents = [
  ['bobbi', '뽀삐', '매니저'], ['neukggu', '늑뀨', '리서처'], ['nuleongi', '누렁이', '빌더'], ['kkukku', '꾸꾸', '디자이너'], ['duggu', '덕구', '아카이비스트'],
];

export default {
  path: 'index.html',
  jsonld: { '@context': 'https://schema.org', '@type': 'Person', name: '김현규', alternateName: 'Kim Hyunkyu', jobTitle: '디지털금융 PM', worksFor: { '@type': 'Organization', name: '페퍼저축은행' }, url: 'https://kkyu-portfolio.vercel.app/', email: 'mailto:hukami6472@gmail.com', sameAs: [LINKS.linkedin, LINKS.github] },
  nav: 'home',
  title: '김현규 · 고객채널을 디렉팅하는 디지털금융 PM',
  description: `금융·핀테크 ${F.career.years}, 대출 채널을 월 최대 ${F.loan.peak}까지 키우고 차세대 모바일뱅킹을 만든 디지털금융 PM. 지금은 AI 에이전트와 함께 직접 만듭니다.`,
  body: `
<section class="hero">
  <div class="container">
    <span class="eyebrow">PORTFOLIO</span>
    <p class="hero-name">김현규</p>
    <h1 class="hero-title">고객채널을 디렉팅하는<br>디지털금융 PM</h1>
    <p class="lead">${F.career.years}간 저축은행과 캐피탈의 대출·뱅킹 채널을 처음부터 만들고 키웠습니다. 지금은 AI 에이전트와 일하며 기획한 것을 직접 구현합니다.</p>
    <div class="btn-row">
      <a class="btn" href="#contact">연락하기 ${icon.arrow}</a>
      <a class="btn btn--secondary" href="#work">작업 보기</a>
    </div>
    <div class="hero-meta">
      <span><b>현재</b>${F.role}</span>
      <span><b>진행 중</b>통합시스템 구축 총괄 PM (${F.integration.budget})</span>
    </div>
  </div>
</section>

<section class="section section--tight" aria-labelledby="numbers-title">
  <div class="container">
    <h2 class="sr-only" id="numbers-title">대표 숫자</h2>
    <div class="numbers">
      <a class="stat reveal" href="/work/loan-comparison.html">
        <span class="stat-value">${F.loan.peak}<small>/월</small></span>
        <span class="stat-label">대출비교 월 최대 실적</span>
        <span class="stat-note">월 ${F.loan.start}에서 시작해 ${F.loan.multiple}. 광고 운영팀 신설부터 제휴 ${F.loan.partners} 운영까지.</span>
      </a>
      <a class="stat reveal" href="/work/mobile-banking.html">
        <span class="stat-value">${F.banking.mau}</span>
        <span class="stat-label">차세대 모바일뱅킹 1년 차 MAU</span>
        <span class="stat-note">출시 1년 만에 예금 ${F.banking.deposit}, 대출 ${F.banking.loan}.</span>
      </a>
      <a class="stat reveal" href="/work/data-cx.html">
        <span class="stat-value">20→35<small>%</small></span>
        <span class="stat-label">제품 전체 Retention</span>
        <span class="stat-note">행동 데이터 체계를 직접 설계하고 사내 첫 클라우드 분석 환경을 도입했습니다.</span>
      </a>
    </div>
  </div>
</section>

<section class="section" id="work" aria-labelledby="work-title">
  <div class="container">
    <div class="sh-split">
      <div>
        <span class="eyebrow">WORK</span>
        <h2 class="title1" id="work-title">대표 작업 6개</h2>
      </div>
      <div>
        <p>금융 현장에서 만든 성과 4개와 업무에 AI를 적용한 프로젝트 2개입니다. 각 케이스에서 문제, 판단, 결과를 자세히 볼 수 있습니다.</p>
        <div class="btn-row">
          <a class="text-link" href="/work.html">금융 작업 전체 ${icon.chevron}</a>
          <a class="text-link" href="/ai.html">AI 프로젝트 전체 ${icon.chevron}</a>
        </div>
      </div>
    </div>
    <div class="grid-3">
      ${featured.map(caseCard).join('\n      ')}
    </div>
  </div>
</section>



<section class="section" aria-labelledby="career-title">
  <div class="container">
    <div class="sh-split">
      <div>
        <span class="eyebrow">CAREER</span>
        <h2 class="title1" id="career-title">디자인에서 시작해<br>금융 고객채널까지</h2>
      </div>
      <div>
        <p>디자인 전공으로 커리어를 시작해 저축은행, 창업, 캐피탈, 다시 저축은행까지 ${F.career.years} 동안 금융의 고객 접점을 다뤘습니다.</p>
        <a class="text-link" href="/about.html">경력 자세히 보기 ${icon.chevron}</a>
      </div>
    </div>
    <dl class="rows">
      <div class="row reveal"><dt class="num">2018.08 – 현재</dt><dd><h3>페퍼저축은행</h3><p>광고 운영팀 신설, 차세대 모바일뱅킹 PM, CXM팀 신설, 대출비교·디지털기획 총괄, 통합시스템 구축 총괄 PM</p></dd></div>
      <div class="row reveal"><dt class="num">2013.07 – 2018.08</dt><dd><h3>NH농협캐피탈</h3><p>온라인 대출 채널 0→1 구축, 콜센터 업무량 40% 절감, 자동차금융 플랫폼 제휴 10건+</p></dd></div>
      <div class="row reveal"><dt class="num">2010 – 2013</dt><dd><h3>알프스드림 (창업)</h3><p>신용대출 중개·광고대행 법인을 창업해 직원 약 15명과 운영</p></dd></div>
      <div class="row reveal"><dt class="num">2007.07 – 2010.08</dt><dd><h3>SBI저축은행</h3><p>홈페이지 4개를 1개로 통합한 프로젝트 총괄, 멀티채널 광고 운영</p></dd></div>
    </dl>
  </div>
</section>

<section class="band" aria-labelledby="agents-title">
  <div class="container section">
    <div class="sh-split">
      <div>
        <span class="eyebrow">AGENTS</span>
        <h2 class="title1" id="agents-title">에이전트 ${F.agents.count}와<br>역할을 나눠 일합니다</h2>
      </div>
      <div>
        <p>매니저가 요청을 나누고, 리서처·빌더·디자이너가 맡은 일을 하고, 아카이비스트가 결정과 산출물을 기록합니다. 방향과 최종 검수는 제가 합니다.</p>
        <a class="btn btn--secondary" href="/ai.html#agents">구성도 보기 ${icon.arrow}</a>
      </div>
    </div>
    <ul class="agent-strip" role="list">
      ${agents.map(([id, name, role]) => `<li class="reveal"><img src="/assets/img/agents/${id}.webp" alt="" width="56" height="56" loading="lazy"><span><b>${name}</b><em>${role}</em></span></li>`).join('\n      ')}
    </ul>
  </div>
</section>

${pressSection()}
`,
};

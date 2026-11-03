import { F, icon, caseCard, casePage, results } from '../../scripts/lib.mjs';

const back = { href: '/work.html', label: 'Work' };
const T = {
  loan: { href: '/work/loan-comparison.html', title: '대출비교 신사업과 제휴 10개사' },
  bank: { href: '/work/mobile-banking.html', title: '차세대 모바일뱅킹 0→1' },
  integ: { href: '/work/system-integration.html', title: '통합시스템 구축 총괄 PM' },
  data: { href: '/work/data-cx.html', title: '데이터 기반 고객경험 개선' },
  reg: { href: '/work/regulation.html', title: '규제를 설계로 풀기' },
};

const cards = [
  { ...T.loan, big: `${F.loan.peak}<small>/월</small>`, cap: `월 ${F.loan.start}에서 ${F.loan.multiple}`, eyebrow: '2018.08 – 현재 · 초기 주도 → 제휴·운영 총괄', desc: '광고 운영팀을 0에서 세팅하고, 채널 효율을 데이터로 증명해 대출비교를 신사업으로 승격시켰습니다. 이후 토스·카카오페이·카카오뱅크·네이버 등 제휴 10개사를 운영합니다.', badges: ['그로스', '제휴', '내부통제'] },
  { ...T.bank, big: `${F.banking.mau}<small>MAU</small>`, cap: `출시 1년 · 예금 ${F.banking.deposit} · 대출 ${F.banking.loan}`, eyebrow: `${F.banking.period} · 서비스기획 PM · 발주자`, desc: `비대면 채널이 없던 저축은행에 회원가입, 비대면 실명확인, 계좌, 이체, 오픈뱅킹, 대출까지 전 범위를 설계했습니다. 예산 ${F.banking.budget}, 조직 ${F.banking.team}.`, badges: ['0→1', '발주', '조직 구축'] },
  { ...T.integ, big: F.integration.budget, cap: `${F.integration.people} · ${F.integration.months} · 진행 중`, dark: true, eyebrow: '2026.06 – 진행 중 · 제안자 · 발주 총괄 PM', desc: `부서별로 따로 도입된 시스템 4개의 중복 운영을 문제로 정의하고 통합을 직접 제안했습니다. 요구사항 ${F.integration.requirements}을 정리해 공개입찰로 업체를 선정했습니다.`, badges: ['PMO', 'RFP·입찰', 'AI 적용'] },
  { ...T.data, big: '20→35<small>%</small>', cap: '제품 전체 Retention', eyebrow: '2021.03 – 2024.12 · CXM팀 신설 · 데이터 플랫폼 리더', desc: `'망분리 위반'으로 보던 클라우드 분석 솔루션을 설계와 법령 대조로 통과시켜 사내 첫 도입. 이벤트 ${F.data.events}개, 속성 ${F.data.properties}개 행동 데이터 체계를 직접 설계했습니다.`, badges: ['데이터', 'CX', '보안성 심의'] },
  { ...T.reg, big: '2심 승소', cap: '1심 패소 건을 증적과 프로세스 자료로 역전', eyebrow: '2025.01 – 현재 · 디지털기획 담당', desc: '주민번호 수집 최소화, 다크패턴 가이드라인, 법정 통지서 시스템처럼 규제 대응을 화면과 운영 프로세스에 고정했습니다.', badges: ['규제', '준법 협의', '운영 시스템'] },
];

const list = {
  path: 'work.html',
  nav: 'work',
  title: 'Work · 김현규',
  description: '대출비교 신사업, 차세대 모바일뱅킹, 통합시스템, 데이터 기반 CX, 규제 대응까지 금융 현장에서 만든 성과 5건.',
  body: `
<section class="hero">
  <div class="container">
    <span class="eyebrow">WORK</span>
    <h1 class="display2">금융 현장에서 만든 성과</h1>
    <p class="lead">제품을 기획하는 일과 시장에서 파는 일을 모두 직접 했습니다. 케이스마다 무엇이 문제였고, 어떻게 판단했고, 숫자로 무엇이 바뀌었는지 정리했습니다.</p>
  </div>
</section>
<section class="section section--tight">
  <div class="container">
    <div class="grid-2">
      ${cards.map(caseCard).join('\n      ')}
    </div>
  </div>
</section>
<section class="section" aria-labelledby="earlier-title">
  <div class="container">
    <div class="sh-split">
      <div><span class="eyebrow">EARLIER</span><h2 class="title1" id="earlier-title">이전 경력의 주요 작업</h2></div>
      <div><p>페퍼저축은행 이전에도 금융의 온라인 채널을 처음부터 만드는 일을 해 왔습니다.</p></div>
    </div>
    <dl class="rows">
      <div class="row reveal"><dt>NH농협캐피탈 · 2013 – 2018</dt><dd class="row-body"><h3>온라인 대출 채널 0→1</h3><p>상담원이 서류를 수작업으로 받던 구조를 신청부터 온라인 계약까지 시스템으로 옮겼습니다. 콜센터 업무량 40% 절감, 월 150억 안정화, 대출 1.7조 성장에 기여했습니다. SK엔카·다나와·첫차 등 자동차금융 플랫폼 제휴 10건 이상을 성사시켰습니다.</p></dd></div>
      <div class="row reveal"><dt>알프스드림 · 2010 – 2013</dt><dd class="row-body"><h3>신용대출 중개·광고대행 창업</h3><p>20대에 직원 약 15명 조직을 이끌며 영업·상담 콜센터를 직접 운영했습니다. 지식과 경험의 한계로 사업을 정리했고, 이때 배운 "가설을 세우고 실험해 검증하는" 방식이 이후 일의 출발점이 됐습니다.</p></dd></div>
      <div class="row reveal"><dt>SBI저축은행 · 2007 – 2010</dt><dd class="row-body"><h3>홈페이지 4개 → 1개 통합</h3><p>부서별로 따로 운영되던 사이트 4개를 하나로 통합하는 프로젝트를 총괄했습니다. 기획·개발·운영을 직접 했고, TV·검색광고 등 멀티채널 광고도 운영했습니다.</p></dd></div>
    </dl>
  </div>
</section>
`,
};

const loan = {
  path: 'work/loan-comparison.html', nav: 'work',
  title: '대출비교 신사업과 제휴 10개사 · 김현규',
  description: `광고 운영팀 0→1부터 대출비교 신사업 승격, 제휴 10개사 운영까지. 월 ${F.loan.start}에서 월 최대 ${F.loan.peak}.`,
  body: casePage({
    back, eyebrow: '페퍼저축은행 · 2018.08 – 현재',
    title: `월 ${F.loan.start}이던 대출 채널을<br>월 최대 ${F.loan.peak}으로`,
    lead: '마케팅 조직이 없던 회사에서 광고 운영팀을 만들고, 채널 효율을 데이터로 증명해 대출비교를 회사의 신사업으로 키웠습니다. 지금은 제휴 10개사의 계약부터 정산, 내부통제까지 총괄합니다.',
    summary: [['역할', '초기 주도 → 제휴·운영 총괄'], ['기간', '2018.08 – 현재'], ['규모', `광고비 ${F.loan.adSpend} · 제휴 ${F.loan.partners}`], ['결과', `월 최대 ${F.loan.peak}`]],
    sections: [
      { h: '문제', body: `<p>2018년 합류 당시 회사에는 마케팅 조직이 없었고, 온라인 신용대출 실적은 <strong>월 ${F.loan.start}</strong> 수준이었습니다. 고객 유입은 오프라인 대출모집인에 의존했고, 모집 수수료는 ${F.loan.offlineFee}였습니다.</p><p>온라인 채널에 예산을 쓰려면 "광고가 모집인보다 싸다"는 것을 숫자로 증명해야 했습니다.</p>` },
      { h: '판단과 접근', body: `<h3>1. 광고 운영팀을 0에서 세팅</h3><ul><li>광고대행사 없이 인하우스 조직이 직접 학습하고 성장하는 모델로 만들었습니다. 5명이 월 3~5억 원의 광고비를 집행하며 Google, Meta, Moloco 등 매체를 직접 다룹니다.</li><li>채널별 비용을 데이터로 추적해 온라인 채널 비용이 <strong>${F.loan.channelCost}</strong>로 오프라인 수수료 ${F.loan.offlineFee}보다 낮다는 것을 증명했고, 광고 운영팀은 본부 조직으로 승격됐습니다.</li></ul><h3>2. 대출비교 서비스를 신사업으로</h3><ul><li>대출비교 서비스 초기부터 주도해 월 신용대출을 <strong>${F.loan.start}에서 ${F.loan.early}</strong>으로 키웠습니다.</li><li>이후 토스, 카카오페이, 카카오뱅크, 네이버 등 <strong>제휴 ${F.loan.partners}</strong>를 발굴하고 계약을 협상해 운영과 정산까지 전 과정을 맡았습니다.</li><li>상품을 ${F.loan.products} 3개 상품군으로 넓혔습니다.</li></ul><h3>3. 제휴 채널의 내부통제와 운영 자동화</h3><ul><li>제휴사별 상품 조건, 광고 문구, 트래픽을 통제하는 내부통제 체계를 운영합니다.</li><li>제휴사 수수료 정산 기준을 매뉴얼로 만들고 카카오뱅크·토스 수수료 정산을 배치로 자동화해 <strong>정산 2일 → 3시간</strong>으로 줄였습니다.</li><li>제휴 채널 트래픽 타임아웃 장애 때는 긴급회의를 주재해 서버 쓰레드 확장과 상시 모니터링 체계를 만들었습니다.</li><li>제휴사 '이어하기' 프로세스를 전 채널에 열고, 토스 웹뷰 대출신청 프로젝트 PM을 맡아 Claude로 테스트케이스를 작성했습니다.</li></ul>` },
      { h: '결과', body: `<figure class="figure"><div class="frame"><div class="growth" role="img" aria-label="월 실적: 10억, 150억, 최대 1,200억"><div class="growth-row"><span class="growth-k">합류 시점</span><span class="growth-bar g1"></span><span class="growth-v num">${F.loan.start}</span></div><div class="growth-row"><span class="growth-k">대출비교 초기</span><span class="growth-bar g2"></span><span class="growth-v num">${F.loan.early}</span></div><div class="growth-row"><span class="growth-k">월 최대</span><span class="growth-bar g3"></span><span class="growth-v num">${F.loan.peak}</span></div></div></div><figcaption>월 대출 실적, 같은 축척</figcaption></figure>${results([[F.loan.peak, '월 최대 실적 (10억의 120배)'], [F.loan.partners, '제휴사 계약·운영'], ['2일 → 3시간', '수수료 정산 시간'], ['3개', '상품군 (신용·주담대·자동차)']])}` },
      { h: '배운 점', body: '<p>새 채널에 예산을 받는 가장 빠른 방법은 기존 채널과 같은 기준으로 비교한 숫자였습니다. 대행사 없이 직접 운영했기 때문에 그 숫자를 매일 만들 수 있었습니다.</p><p>제휴가 늘수록 성과보다 통제가 어려워졌습니다. 상품 조건, 문구, 트래픽, 정산을 처음부터 체계로 묶어 두는 것이 제휴를 오래 키우는 조건이었습니다.</p>' },
    ],
    next: T.bank,
  }),
};

const bank = {
  path: 'work/mobile-banking.html', nav: 'work',
  title: '차세대 모바일뱅킹 0→1 · 김현규',
  description: `비대면 채널이 없던 저축은행의 차세대 모바일뱅킹을 설계한 서비스기획 PM. 예산 ${F.banking.budget}, 출시 1년 MAU ${F.banking.mau}.`,
  body: casePage({
    back, eyebrow: `페퍼저축은행 · ${F.banking.period}`,
    title: '비대면 채널이 없던 저축은행에<br>모바일뱅킹을 만들기',
    lead: `APP·WEB·ADMIN을 아우르는 차세대 모바일뱅킹의 서비스기획 PM이자 발주자였습니다. 회원가입부터 오픈뱅킹까지 전 범위를 설계했고, 출시 이후 운영까지 책임졌습니다.`,
    summary: [['역할', '서비스기획 PM · 발주자'], ['기간', F.banking.period], ['규모', `예산 ${F.banking.budget} · ${F.banking.team}`], ['결과', `1년 차 MAU ${F.banking.mau}`]],
    sections: [
      { h: '문제', body: '<p>지점 중심의 저축은행에는 비대면 채널이 없었습니다. 고객은 계좌를 열거나 대출을 받으려면 지점이나 상담원을 거쳐야 했습니다.</p><p>짧은 기간 안에 출시해야 했지만, 이후 상품이 늘어날 때마다 핵심 기능을 다시 만드는 일은 피해야 했습니다.</p>' },
      { h: '판단과 접근', body: `<h3>범위와 산출물</h3><ul><li>회원가입, 비대면 실명확인, 계좌, 이체, 오픈뱅킹, 대출까지 전체 요구사항을 설계했습니다.</li><li>요구사항정의서, 화면설계서, 기능명세서, WBS를 직접 작성했고, 협력사 제안과 견적을 평가해 업체를 선정했습니다.</li></ul><h3>단기 출시와 장기 확장성 사이의 구조</h3><p>인증, 계좌 조회, 이체를 <strong>공통 모듈</strong>로 먼저 세우고 상품별 화면을 그 위에 얹는 구조를 택했습니다. 1차에서 빠지는 기능은 "왜 2차인지"를 문서로 남겨 이해관계자와 합의했습니다.</p><figure class="figure"><div class="frame"><div class="layers"><div class="layer layer--top"><b>2차 · 상품 화면</b><span>예금 · 적금 · 신용대출 · 이후 상품</span></div><div class="layer"><b>1차 · 공통 모듈</b><span>인증 · 비대면 실명확인 · 계좌 조회 · 이체 · 오픈뱅킹</span></div></div></div><figcaption>공통 모듈을 먼저 세워, 상품이 늘어도 핵심 기능을 다시 만들지 않게 했습니다</figcaption></figure><h3>조직</h3><p>상품, 리스크, 준법, IT, 고객센터, 협력사의 요구를 <strong>하나의 백로그</strong>로 모아 우선순위를 공개했고, 역할과 의사결정 경로를 정리했습니다. 프로젝트 조직은 ${F.banking.team}으로 커졌고, 마케팅·전략기획·CXM 팀을 직접 세팅했습니다.</p><p>저축은행 업계 최초로 행동 데이터 분석 도입을 제안해 CXM팀을 만들었습니다. 이 작업은 <a href="/work/data-cx.html">데이터 기반 고객경험 개선</a>으로 이어졌습니다.</p>` },
      { h: '결과', body: results([[F.banking.mau, '출시 1년 차 MAU'], [F.banking.deposit, '출시 1년 예금'], [F.banking.loan, '출시 1년 대출'], [F.banking.team.replace(' ', ''), '프로젝트 조직']]) },
      { h: '배운 점', body: '<p>출시 속도와 확장성은 범위를 줄여서가 아니라 순서를 정해서 함께 얻을 수 있었습니다. 빠지는 기능을 "왜 2차인지" 문서로 남겨 둔 것이 이해관계자의 합의를 지키는 데 가장 효과가 컸습니다.</p>' },
    ],
    prev: T.loan, next: T.integ,
  }),
};

const integ = {
  path: 'work/system-integration.html', nav: 'work',
  title: '통합시스템 구축 총괄 PM · 김현규',
  description: `부서별 시스템 4개를 하나로 통합하는 프로젝트를 직접 제안하고 발주한 총괄 PM. 예산 ${F.integration.budget}, ${F.integration.people}, ${F.integration.months}.`,
  body: casePage({
    back, eyebrow: '페퍼저축은행 · 2026.06 – 진행 중',
    title: '부서마다 따로 쓰던 시스템을<br>하나로 묶는 제안',
    lead: `고객, 상품, 정산 업무가 부서별 시스템에서 중복 운영되는 기술 부채를 문제로 정의하고, 통합을 직접 제안해 예산을 확보했습니다. 지금은 ${F.integration.people} 규모 프로젝트의 총괄 PM입니다.`,
    summary: [['역할', '제안자 · 발주 총괄 PM'], ['기간', '2026.06 – 진행 중'], ['규모', `${F.integration.people} · ${F.integration.months}`], ['예산', F.integration.budget]],
    sections: [
      { h: '문제', body: '<p>디지털뱅킹, 소비자금융, 오토금융, 주택금융 시스템이 부서별로 따로 도입되면서 고객·상품·정산 업무가 중복으로 운영됐습니다. 서로 다른 언어로 만들어진 시스템이라 유지보수와 인력 비용이 계속 쌓였습니다.</p>' },
      { h: '판단과 접근', body: `<figure class="figure"><div class="frame"><div class="merge"><ul class="merge-from" role="list"><li>디지털뱅킹</li><li>소비자금융</li><li>오토금융</li><li>주택금융</li></ul><span class="merge-arrow" aria-hidden="true">${icon.arrow}</span><div class="merge-to"><b>통합시스템</b><span>고객 · 상품 · 정산 단일화</span></div></div></div><figcaption>시스템 ${F.integration.systems}</figcaption></figure><h3>갭분석 대신 새 구조 설계로 역제안</h3><p>통상의 AS-IS/TO-BE 갭분석은 그 자체가 리소스를 크게 쓴다고 판단했습니다. 대신 핵심 프로세스를 분석해 구조를 새로 설계하는 방식으로 역제안했고, 공수를 <strong>약 ${F.integration.mmEstimate}</strong>로 산정했습니다. 실제 업체 견적이 ${F.integration.mmQuote}로 나와 산정이 맞았음을 확인했습니다.</p><h3>제안부터 발주까지</h3><ul><li>사업계획서를 쓰고 TF를 구성해 대표이사 보고로 과제를 채택받았습니다.</li><li>요구사항 <strong>${F.integration.requirements}</strong>을 수집하고 우선순위를 정해 RFP를 작성했고, 공개입찰과 제안설명회, 평가를 거쳐 업체를 선정했습니다.</li><li>착수 후에는 범위·일정·비용·품질을 종합 관리하고, 개발사·현업·준법 사이의 협업을 조율합니다.</li></ul><h3>프로젝트 운영에 AI 적용</h3><p>요구사항, 프로세스 정의, 화면 프로토타입을 AI로 작성하고 축적하는 <a href="/ai/second-brain.html">세컨브레인</a>을 이 프로젝트 팀에 사내 최초로 적용했습니다.</p>` },
      { h: '결과', body: results([[F.integration.budget, '예산 확보'], [F.integration.people, F.integration.vendor], [F.integration.requirements, '요구사항 수집·구조화'], [`${F.integration.mmEstimate} → ${F.integration.mmQuote}`, '산정 공수와 실제 견적']]) + '<p class="caption">2026년 11월 기준 진행 중인 프로젝트입니다.</p>' },
      { h: '배운 점', body: '<p>큰 프로젝트일수록 분석 자체에 드는 비용을 먼저 따져야 했습니다. 산정 근거를 핵심 프로세스 단위로 남겨 두니, 견적 비교와 경영진 설득이 같은 숫자로 이어졌습니다.</p>' },
    ],
    prev: T.bank, next: T.data,
  }),
};

const data = {
  path: 'work/data-cx.html', nav: 'work',
  title: '데이터 기반 고객경험 개선 · 김현규',
  description: `사내 첫 클라우드 분석 환경 도입과 행동 데이터 ${F.data.events}개 이벤트 설계. Retention ${F.data.retention}.`,
  body: casePage({
    back, eyebrow: '페퍼저축은행 · 2021.03 – 2024.12',
    title: '"안 된다"던 클라우드 분석을<br>사내 첫 사례로',
    lead: '모바일뱅킹 출시 후, 의사결정에 필요한 데이터를 현업이 직접 볼 수 없다는 것이 가장 큰 병목이었습니다. CXM팀을 만들고 사내 첫 클라우드 분석 환경을 도입해 현업이 대시보드를 직접 만드는 단계까지 정착시켰습니다.',
    summary: [['역할', 'CXM팀 신설 · 데이터 플랫폼 리더'], ['기간', '2021.03 – 2024.12'], ['도구', 'AppsFlyer · Amplitude · Tableau'], ['결과', `Retention ${F.data.retention}`]],
    sections: [
      { h: '문제', body: '<p>마케팅, 상품기획, 개발이 각자의 엑셀과 서버 로그로 따로 보고했고, 데이터 추출 요청은 개발팀에 쌓였습니다. 개발팀장, 상품기획 담당과 함께 문제를 "의사결정에 필요한 데이터를 현업이 직접 볼 수 없다"로 정의했습니다.</p><p>클라우드 분석 솔루션은 IT보안·준법·리스크 부서에서 "망분리 위반"으로 보던 사안이었습니다.</p>' },
      { h: '판단과 접근', body: `<h3>설계 단계에서 규제 리스크를 없애기</h3><ul><li>이벤트를 추가할 때마다 개발이 필요한 온프레미스 BI 대신 클라우드 SaaS를 택했습니다.</li><li>규제 리스크를 심의에서 다투지 않고, <strong>개인정보를 수집하지 않는 이벤트 체계</strong>로 설계해 처음부터 없앴습니다.</li><li>전자금융감독규정과 클라우드 가이드를 조항 단위로 대조해 위원회 심의 체크리스트를 항목별로 충족했고, 보안성 심의를 통과했습니다.</li></ul><figure class="figure"><div class="frame"><ol class="flow"><li><b>AppsFlyer</b><span>광고 어트리뷰션</span></li><li><b>Amplitude</b><span>앱 행동 분석</span></li><li><b>Tableau</b><span>전사 BI · 대시보드</span></li></ol></div><figcaption>리스크가 낮은 도구부터 단계적으로 도입했습니다</figcaption></figure><h3>공통 행동 데이터 체계</h3><ul><li>이벤트 <strong>${F.data.events}개</strong>, 속성 <strong>${F.data.properties}개</strong>를 직접 정의하고 비식별 기준을 문서로 만들었습니다.</li><li>마케팅·상품·CS·개발 부서를 교육해 현업이 대시보드를 직접 만드는 단계까지 정착시켰고, 사내 스터디 '아이스'(12명)를 운영했습니다.</li><li>이후 태블로 도입 프로젝트를 주도해 부문 대시보드 4종과 수신 시뮬레이터를 현업이 쓰는 상태로 만들었습니다.</li></ul>` },
      { h: '결과', body: results([[F.data.retention, '제품 전체 Retention'], [F.data.active, '메인화면 개인화 후 활성 사용률'], [F.data.account, '계좌개설 완료율']]) + '<p>도입 과정에서 정리한 검토 항목·절차·책임 구분은 정보보호팀이 제정한 <strong>사내 클라우드 규정의 기준 사례</strong>가 됐습니다. 이 사례는 AB180 고객 사례와 ZDNet Korea 인터뷰로 외부에 소개됐습니다.</p>' },
      { h: '배운 점', body: '<p>규제는 나중에 붙이는 조건이 아니라 설계 단계의 제약 조건으로 다룰 때 통과가 쉬웠습니다. "무엇을 수집하지 않는가"를 먼저 정하니 보안·준법 부서와 같은 편에서 이야기할 수 있었습니다.</p>' },
    ],
    prev: T.integ, next: T.reg,
  }),
};

const reg = {
  path: 'work/regulation.html', nav: 'work',
  title: '규제를 설계로 풀기 · 김현규',
  description: '주민번호 수집 최소화, 다크패턴 가이드라인, 법정 통지서 시스템, 소송 대응까지. 규제 대응을 화면과 운영 프로세스로 고정한 사례.',
  body: casePage({
    back, eyebrow: '페퍼저축은행 · 2025.01 – 현재',
    title: '규제 대응을<br>화면과 프로세스에 고정하기',
    lead: '금융에서 "안 된다"로 끝나던 일을 설계와 설득으로 통과시키는 것이 제 역할 중 하나입니다. 디지털기획 담당으로 맡은 규제·운영 과제들을 정리했습니다.',
    summary: [['역할', '디지털기획 담당'], ['기간', '2025.01 – 현재'], ['협업', '준법 · 개인정보 · 금소 · 고객센터'], ['결과', '소송 2심 전부 승소']],
    sections: [
      { h: '회원가입 주민번호 수집 최소화', body: '<p>준법은 주민번호 전면 제외를, 운영은 기존 고객 식별을 요구하며 교착됐습니다. 전자금융감독규정, 금융실명법, 타사 사례를 대조해 <strong>"접근매체 등록" 관점의 수집과 동의서 추가</strong>라는 제3안을 내 양쪽의 합의를 끌어냈습니다. 일부는 적용했고, 나머지는 통합시스템 프로젝트에서 이어갑니다.</p>' },
      { h: '법정 통지서 시스템', body: '<p>기한이익 상실, 경매, 채권양도 같은 채무자 법정 통지서를 <strong>온라인 조회와 카카오 알림톡 발송</strong> 시스템으로 만들어, 규제 준수를 사람의 기억이 아닌 프로세스로 고정했습니다.</p>' },
      { h: '감사·가이드라인 대응', body: '<ul><li>다크패턴 가이드라인 대응 체크리스트와 개발 요구사항을 작성하고 내부 결재와 증적까지 마쳤습니다.</li><li>모바일뱅킹 이용약관 개정과 금감원 사후보고를 담당했습니다.</li><li>예금보험공사 감사의 디지털 분야를 주관해 제품 시연과 감사 자료를 맡았고, 내부감사 답변서 5건을 제출했습니다.</li><li>비대면 실명확인, 온라인 설명의무, 적합성 체크리스트를 화면과 운영 프로세스에 반영했습니다.</li></ul>' },
      { h: '소송과 고객센터', body: `<p>대여금 소송에서 1심 패소 건을 증적과 프로세스 자료로 보완해 <strong>2심 전부 승소</strong>로 바꿨습니다. 고객센터 1:1 문의 대응을 표준화·전산화해 필요 인력을 4명에서 2명으로 줄이고, 남은 인력은 다른 업무로 전환했습니다.</p>${results([['2심 승소', '1심 패소 건 역전'], ['4명 → 2명', '1:1 문의 대응 인력'], ['5건', '내부감사 답변서 제출']])}` },
      { h: '배운 점', body: '<p>규제 대응은 문서로 끝나면 다시 사람에게 기대게 됩니다. 화면, 시스템, 운영 절차 중 하나에 고정해 두어야 담당자가 바뀌어도 지켜졌습니다.</p>' },
    ],
    prev: T.data,
  }),
};

export default [list, loan, bank, integ, data, reg];

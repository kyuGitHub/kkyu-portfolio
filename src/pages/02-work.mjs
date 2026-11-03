import { F, icon, caseCard, casePage, results } from '../../scripts/lib.mjs';

const back = { href: '/work.html', label: 'Work' };
const T = {
  loan: { href: '/work/loan-comparison.html', title: '대출비교 신사업과 제휴 10개사' },
  toss: { href: '/work/toss-webview.html', title: '웹뷰인토스 대출신청' },
  mkt: { href: '/work/inhouse-marketing.html', title: '인하우스 광고 운영팀 0→1' },
  bank: { href: '/work/mobile-banking.html', title: '차세대 모바일뱅킹 0→1' },
  integ: { href: '/work/system-integration.html', title: '통합시스템 구축 총괄 PM' },
  data: { href: '/work/data-cx.html', title: '데이터 파이프라인 구축과 고객경험 개선' },
  reg: { href: '/work/regulation.html', title: '규제를 설계로 풀기' },
};

const cards = [
  { ...T.loan, image: '/assets/img/work/loan-toss.webp', imageAlt: '토스 내게 맞는 대출찾기에서 페퍼저축은행 대출로 이어지는 화면',  eyebrow: '2018.08 – 현재 · 초기 주도 → 제휴·운영 총괄', desc: '대출비교 서비스를 초기부터 주도해 월 신용대출을 10억에서 150억으로 키웠고, 토스·카카오페이·카카오뱅크·네이버 등 제휴 10개사의 계약부터 정산까지 총괄합니다.', badges: ['그로스', '제휴', '내부통제'] },
  { ...T.toss, image: '/assets/img/work/toss-card.webp', imageAlt: '토스 앱 안에서 진행하는 페퍼저축은행 대출 신청 화면: 정보 확인, 조건 확인, 신청 완료', eyebrow: '2026.03 – 2026.06 · 프로젝트 PM', desc: '토스 앱 안에서 페퍼저축은행 대출 신청을 처음부터 끝까지 마치는 웹뷰를 기획했습니다. 준법·정보보호 검토부터 요구사항, WBS까지 맡아 개발을 완료했습니다.', badges: ['제휴', '대출 신청 UX', '규제 반영'] },
  { ...T.mkt, big: '3~5억<small>/월</small>', cap: `대행사 없이 ${F.marketing.team}이 직접 집행`, eyebrow: '2018.08 – 2019.10 · 광고 운영팀 신설 · 리더', desc: '마케팅 조직이 없던 회사에 광고 운영팀을 0에서 만들고, 채널 효율을 데이터로 증명해 본부 조직으로 승격시켰습니다.', badges: ['조직 구축', '퍼포먼스 마케팅', '인하우스'] },
  { ...T.bank, image: '/assets/img/work/banking-app.webp', imageAlt: '페퍼저축은행 모바일뱅킹 앱 메인 화면',  eyebrow: `${F.banking.period} · 서비스기획 PM · 발주자`, desc: `비대면 채널이 없던 저축은행에 회원가입, 비대면 실명확인, 계좌, 이체, 오픈뱅킹, 대출까지 전 범위를 설계했습니다. 예산 ${F.banking.budget}, 조직 <span class="nowrap">${F.banking.team}</span>.`, badges: ['0→1', '발주', '조직 구축'] },
  { ...T.integ, big: F.integration.budget, cap: `${F.integration.people} · ${F.integration.months} · 진행 중`, eyebrow: '2026.06 – 진행 중 · 제안자 · 발주 총괄 PM', desc: `부서별로 따로 도입된 시스템 4개의 중복 운영을 문제로 정의하고 통합을 직접 제안했습니다. 요구사항 ${F.integration.requirements}을 정리해 공개입찰로 업체를 선정했습니다.`, badges: ['PMO', 'RFP·입찰', 'AI 적용'] },
  { ...T.data, big: '20→35<small>%</small>', cap: '제품 전체 Retention',  eyebrow: '2021.03 – 2024.12 · CXM팀 신설 · 데이터 플랫폼 리더', desc: `AppsFlyer·Amplitude·Tableau로 이어지는 데이터 파이프라인을 컨설팅 없이 직접 검토·도입·설치·운영했습니다. 망분리 위반으로 보던 클라우드 분석을 사내 첫 사례로 통과시켰고, Retention ${F.data.retention}.`, badges: ['데이터', 'CX', '보안성 심의'] },
  { ...T.reg, big: '제3안', cap: '준법과 운영의 교착을 합의로 푼 주민번호 수집 최소화', eyebrow: '2025.01 – 현재 · 디지털기획 담당', desc: '주민번호 수집 최소화, 다크패턴 가이드라인, 법정 통지서 시스템처럼 규제 대응을 화면과 운영 프로세스에 녹였습니다.', badges: ['규제', '준법 협의', '운영 시스템'] },
];

const list = {
  path: 'work.html',
  nav: 'work',
  title: 'Work · 김현규',
  description: '대출비교 신사업, 인하우스 광고 운영팀, 차세대 모바일뱅킹, 통합시스템, 데이터 기반 CX, 규제 대응까지 금융 현장에서 만든 성과 7건.',
  body: `
<section class="hero">
  <div class="container">
    <span class="eyebrow">WORK</span>
    <h1 class="display2">금융 현장에서 만든 성과</h1>
    <p class="lead">제품을 기획하는 일과 시장에서 파는 일을 모두 직접 했습니다. 케이스마다 무엇이 문제였고, 어떻게 판단했고, 숫자로 무엇이 바뀌었는지 정리했습니다.</p>
  </div>
</section>
<section class="section section--tight" aria-labelledby="cases-title">
  <div class="container">
    <h2 class="sr-only" id="cases-title">케이스</h2>
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
    lead: `대출비교 서비스를 초기부터 주도해 월 ${F.loan.start}이던 신용대출을 ${F.loan.early}으로 키웠습니다. 이후 토스·카카오뱅크 등 제휴 ${F.loan.partners}로 넓혀 월 최대 ${F.loan.peak}을 기록했고, 계약부터 정산과 내부통제까지 총괄합니다.`,
    summary: [['역할', '초기 주도 → <span class="nowrap">제휴·운영</span> 총괄'], ['기간', '2018.08 – 현재'], ['규모', `광고비 ${F.loan.adSpend} · 제휴 ${F.loan.partners}`], ['결과', `월 최대 ${F.loan.peak}`]],
    sections: [
      { h: '문제', body: `<p>대출비교 서비스로 월 신용대출을 ${F.loan.early}까지 키운 뒤, 더 큰 성장은 토스·카카오페이 같은 외부 플랫폼과의 제휴에 있었습니다.</p><p>제휴사가 늘수록 상품 조건, 광고 문구, 트래픽, 정산을 회사가 직접 통제하기 어려워졌습니다. 성장과 통제를 함께 가져갈 운영 체계가 필요했습니다.</p>` },
      { h: '판단과 접근', body: `<h3>1. 광고 운영팀을 0에서 세팅</h3><p>온라인 채널 비용이 <strong>${F.loan.channelCost}</strong>로 모집인 수수료 ${F.loan.offlineFee}보다 낮다는 숫자로 예산을 확보했습니다. 자세한 과정은 <a href="/work/inhouse-marketing.html">인하우스 광고 운영팀 0→1</a>에 있습니다.</p><h3>2. 대출비교 서비스를 신사업으로</h3><ul><li>대출비교 서비스 초기부터 주도해 월 신용대출을 <strong>${F.loan.start}에서 ${F.loan.early}</strong>으로 키웠습니다.</li><li>이후 토스, 카카오페이, 카카오뱅크, 네이버 등 <strong>제휴 ${F.loan.partners}</strong>를 발굴하고 계약을 협상해 운영과 정산까지 전 과정을 맡았습니다.</li><li>상품군을 ${F.loan.products} 3개로 넓혔습니다.</li></ul><figure class="figure"><div class="shots shots--2"><img src="/assets/img/work/loan-toss.webp" alt="토스 내게 맞는 대출찾기에서 페퍼저축은행 대출 신청으로 이어지는 화면" loading="lazy" width="1400" height="860"><img src="/assets/img/work/loan-kakao.webp" alt="카카오뱅크 연계대출에서 페퍼저축은행 대출 신청으로 이어지는 화면" loading="lazy" width="1400" height="885"></div><figcaption>토스와 카카오뱅크에서 페퍼저축은행 대출 신청으로 이어지는 제휴 채널</figcaption></figure><h3>3. 제휴 채널의 내부통제와 운영 자동화</h3><ul><li>제휴사별 상품 조건, 광고 문구, 트래픽을 통제하는 내부통제 체계를 운영합니다.</li><li>제휴사 수수료 정산 기준을 매뉴얼로 만들고 카카오뱅크·토스 수수료 정산을 배치로 자동화해 <strong>정산 2일 → 3시간</strong>으로 줄였습니다.</li><li>제휴 채널 트래픽 타임아웃 장애 때는 긴급회의를 주재해 서버 스레드 확장과 상시 모니터링 체계를 만들었습니다.</li><li>제휴사에서 들어온 고객이 중단한 신청을 이어서 진행하는 이어하기 프로세스의 화면과 동선을 설계해 전 채널에 열었습니다.</li><li>토스 앱 안에서 대출 신청을 끝까지 마치는 <a href="/work/toss-webview.html">웹뷰인토스 대출신청</a> 프로젝트의 PM을 맡았습니다.</li></ul>` },
      { h: '결과', body: `<figure class="figure"><div class="frame"><div class="growth" role="img" aria-label="월 실적: 10억, 150억, 최대 1,200억"><div class="growth-row"><span class="growth-k">시작</span><span class="growth-bar g1"></span><span class="growth-v num">${F.loan.start}</span></div><div class="growth-row"><span class="growth-k">대출비교 초기</span><span class="growth-bar g2"></span><span class="growth-v num">${F.loan.early}</span></div><div class="growth-row"><span class="growth-k">월 최대</span><span class="growth-bar g3"></span><span class="growth-v num">${F.loan.peak}</span></div></div></div><figcaption>월 대출 실적, 같은 축척</figcaption></figure>${results([[F.loan.peak, '월 최대 실적 (10억의 120배)'], [F.loan.partners, '제휴사 계약·운영'], ['2일 → 3시간', '수수료 정산 시간'], ['3개', '상품군 (신용·주택담보·자동차)']])}` },
      { h: '배운 점', body: '<p>제휴가 늘수록 성과보다 통제가 어려워졌습니다. 상품 조건, 문구, 트래픽, 정산을 처음부터 체계로 묶어 두는 것이 제휴를 오래 키우는 조건이었습니다.</p>' },
    ],
    next: T.toss,
  }),
};

const toss = {
  path: 'work/toss-webview.html', nav: 'work',
  title: '웹뷰인토스 대출신청 · 김현규',
  description: '토스 앱 안에서 페퍼저축은행 대출 신청을 끝까지 마치는 웹뷰 프로젝트. 준법·정보보호 검토, 요구사항, WBS를 맡은 프로젝트 PM.',
  body: casePage({
    back, eyebrow: '페퍼저축은행 × 토스 · 2026.03 – 2026.06',
    title: '토스 앱 안에서<br>대출 신청을 끝까지 마치기',
    lead: '토스 사용자가 앱을 떠나지 않고 페퍼저축은행 대출을 신청부터 약정까지 마치는 웹뷰를 만든 프로젝트입니다. 프로젝트 PM으로 준법·정보보호 검토, 요구사항, WBS와 마일스톤을 맡아 개발을 완료했습니다.',
    summary: [['역할', '프로젝트 PM'], ['기간', '2026.03 – 2026.06'], ['협업', '토스 · 준법 · 정보보호 · 개발'], ['결과', '개발 완료 · 테스트 단계 인계']],
    sections: [
      { h: '화면', body: '<div class="shots"><img src="/assets/img/work/toss-fit.webp" alt="대출 받기 전에 정보가 맞는지 확인하는 적합성 확인 화면" loading="eager" width="370" height="796"><img src="/assets/img/work/toss-terms.webp" alt="금리, 빌릴 금액, 매달 내는 돈, 대출 기간을 확인하는 대출 조건 화면" loading="eager" width="370" height="796"><img src="/assets/img/work/toss-idcard.webp" alt="본인 확인을 위해 신분증 촬영을 안내하는 화면" loading="lazy" width="370" height="796"><img src="/assets/img/work/toss-done.webp" alt="대출 신청 완료 화면" loading="lazy" width="370" height="796"></div><p class="caption">토스 앱에서 열리는 페퍼저축은행 화면입니다. 이름과 금액은 예시입니다.</p>' },
      { h: '문제', body: '<p>제휴 채널에서 들어온 고객도 대출을 받으려면 결국 여러 단계를 거쳐야 합니다. 본인인증, 전자서명, 심사, 계좌·신분증·얼굴 인증, 금융소비자보호법에 따른 설명과 확인, 전자약정까지 모두 규제가 정한 절차입니다.</p><p>이 절차를 토스 앱 안의 웹뷰에서 끊김 없이 이어지게 하면서, 규제 요건은 하나도 빠뜨리지 않아야 했습니다.</p>' },
      { h: '판단과 접근', body: `<figure class="figure"><div class="frame"><ol class="flow"><li><b>확인</b><span>적합성 확인, 휴대폰 본인인증, 약관 동의</span></li><li><b>심사</b><span>전자서명, 본심사, 대출 조건 선택</span></li><li><b>정보</b><span>주소, 직업, 회사, 이메일 입력</span></li><li><b>인증</b><span>계좌 1원 인증, 신분증·얼굴 인증</span></li><li><b>약정</b><span>설명의무, 보이스피싱 확인, 전자약정</span></li></ol></div><figcaption>신청부터 약정까지 토스 앱 안에서 이어지는 흐름</figcaption></figure><ul><li><strong>규제를 흐름 안에 넣기:</strong> 적합성 확인, 금융소비자보호법에 따른 중요사항 설명, 보이스피싱 확인을 별도 절차가 아니라 신청 흐름의 한 단계로 설계했습니다.</li><li><strong>준법·정보보호 검토:</strong> 화면과 수집 항목마다 준법과 정보보호 검토를 거쳐 요구사항을 확정했습니다.</li><li><strong>막히는 지점마다 다음 행동 안내:</strong> 인증 알림이 오지 않을 때, 인증에 여러 번 실패할 때처럼 고객이 멈출 수 있는 지점마다 다시 시도하거나 다른 방법을 고를 수 있게 했습니다.</li><li><strong>일정 관리:</strong> WBS와 마일스톤을 세워 토스, 개발사, 사내 부서의 일정을 맞췄습니다.</li><li><strong>AI로 테스트케이스 작성:</strong> 분기가 많은 흐름이라 테스트케이스를 Claude로 작성했고, Playwright 기반 테스트 자동화도 검토했습니다.</li></ul>` },
      { h: '결과', body: results([['개발 완료', '토스 앱 내 대출 신청 웹뷰'], ['인증서 3종', '토스 · 네이버 · PASS 중 선택'], ['테스트 단계', '통합시스템 총괄 PM 선임으로 인계']]) + '<p>2026년 6월 통합시스템 구축 프로젝트의 총괄 PM으로 선임되면서, 테스트 단계에서 후임에게 인계했습니다.</p>' },
      { h: '배운 점', body: '<p>규제 절차가 많은 흐름일수록 고객이 멈추는 지점이 늘어납니다. 각 단계에서 실패했을 때 어디로 돌아가는지를 먼저 정해 두니, 요구사항과 테스트케이스가 같은 기준으로 정리됐습니다.</p>' },
    ],
    prev: T.loan, next: T.mkt,
  }),
};

const mkt = {
  path: 'work/inhouse-marketing.html', nav: 'work',
  title: '인하우스 광고 운영팀 0→1 · 김현규',
  description: `마케팅 조직이 없던 저축은행에 광고 운영팀을 0에서 세팅. 대행사 없이 ${F.marketing.team}이 ${F.marketing.spend} 광고비를 직접 집행하고 본부 조직으로 승격.`,
  body: casePage({
    back, eyebrow: '페퍼저축은행 · 2018.08 – 2019.10',
    title: '대행사 없이<br>광고를 직접 운영하는 팀 만들기',
    lead: '합류 당시 회사에는 마케팅 조직이 없었습니다. 광고 운영팀을 0에서 세팅하고, 대행사에 맡기지 않고 팀이 직접 매체를 다루며 학습하는 인하우스 모델을 만들었습니다. 성과를 데이터로 인정받아 팀은 본부 조직으로 승격됐습니다.',
    summary: [['역할', '광고 운영팀 신설 · 리더'], ['기간', '2018.08 – 2019.10'], ['규모', `${F.marketing.team} · ${F.marketing.spend}`], ['결과', '본부 조직 승격']],
    sections: [
      { h: '문제', body: `<p>고객 유입은 오프라인 대출모집인에 의존했고, 모집 수수료는 ${F.loan.offlineFee}였습니다. 온라인 신용대출 실적은 월 ${F.loan.start} 수준이었고, 광고를 집행하고 성과를 측정할 조직이 없었습니다.</p><p>온라인 광고에 예산을 받으려면 먼저 "광고가 모집인보다 효율적"이라는 것을 회사가 믿을 수 있는 숫자로 보여 줘야 했습니다.</p>` },
      { h: '판단과 접근', body: `<h3>대행사 대신 인하우스</h3><p>대행사에 맡기면 빨리 시작할 수 있지만, 어떤 매체와 소재가 대출 실적으로 이어지는지는 회사에 남지 않는다고 판단했습니다. 그래서 팀이 직접 학습하는 인하우스 모델을 택했습니다. <strong>${F.marketing.team}</strong>이 <strong>${F.marketing.spend}</strong>의 광고비를 집행하며 ${F.marketing.media} 매체를 직접 다뤘습니다.</p><h3>가설 → 실험 → 분석 → 고도화</h3><p>매체와 소재, 랜딩을 바꿀 때마다 가설을 세우고 작게 실험해 결과를 분석하고, 효과가 확인된 것만 키우는 그로스 사이클을 팀의 일하는 방식으로 정착시켰습니다.</p><figure class="figure"><div class="frame"><ol class="flow"><li><b>가설</b><span>어느 매체·소재가 신청까지 이어질까</span></li><li><b>실험</b><span>작은 예산으로 빠르게 집행</span></li><li><b>분석</b><span>채널별 비용과 대출 실적 비교</span></li><li><b>고도화</b><span>효과가 확인된 채널에 예산 집중</span></li></ol></div><figcaption>팀이 반복한 그로스 사이클</figcaption></figure><h3>예산을 설득한 숫자</h3><p>채널별 비용을 대출 실적까지 이어서 추적해, 온라인 채널 비용이 <strong>${F.loan.channelCost}</strong>로 오프라인 모집 수수료 ${F.loan.offlineFee}보다 낮다는 것을 증명했습니다. 이 숫자로 본부의 승인을 받았고, 광고 운영팀은 본부 조직으로 승격됐습니다.</p><h3>인하우스를 택할 수 있었던 이유</h3><p>NH농협캐피탈에서 검색·배너 광고와 플랫폼 제휴를 광고주로서 직접 집행하며 채널별 효율을 몸으로 익혔고, 창업 시절 SNS 광고대행을 운영한 경험이 있었습니다. 검색광고마케터 1급 자격도 이때 취득했습니다.</p>` },
      { h: '결과', body: results([[F.marketing.spend, '광고비 직접 집행'], [`${F.loan.channelCost} vs ${F.loan.offlineFee}`, '온라인 채널 비용과 오프라인 수수료'], [`${F.loan.start} → ${F.loan.early}`, '대출비교 초기 월 신용대출'], ['본부 승격', '광고 운영팀 조직 위상']]) + '<p>이 팀이 이후 대출비교 신사업과 제휴 채널을 키우는 기반이 됐습니다. 이어지는 이야기는 <a href="/work/loan-comparison.html">대출비교 신사업과 제휴 10개사</a>에 있습니다.</p>' },
      { h: '배운 점', body: `<p>새 채널에 예산을 받는 가장 빠른 방법은 기존 채널과 같은 기준으로 비교한 숫자였습니다. 광고비를 모집 수수료와 같은 비율(${F.loan.channelCost} 대 ${F.loan.offlineFee})로 놓고 비교했고, 직접 운영했기에 그 숫자를 매일 갱신할 수 있었습니다.</p>` },
    ],
    prev: T.toss, next: T.bank,
  }),
};

const bank = {
  path: 'work/mobile-banking.html', nav: 'work',
  title: '차세대 모바일뱅킹 0→1 · 김현규',
  description: `비대면 채널이 없던 저축은행의 차세대 모바일뱅킹을 설계한 서비스기획 PM. 예산 ${F.banking.budget}, 출시 1년 MAU ${F.banking.mau}.`,
  body: casePage({
    back, eyebrow: `페퍼저축은행 · ${F.banking.period}`,
    title: '비대면 채널이 없던 저축은행에<br>모바일뱅킹을 만들기',
    lead: `서비스기획 PM이자 발주자로 APP·WEB·ADMIN 전 범위를 설계하고, 출시 후 운영까지 책임졌습니다. 출시 1년 만에 예금 ${F.banking.deposit}, 대출 ${F.banking.loan}, MAU ${F.banking.mau}을 기록했습니다.`,
    summary: [['역할', '서비스기획 PM · 발주자'], ['기간', F.banking.period], ['규모', `예산 ${F.banking.budget} · ${F.banking.team}`], ['결과', `1년 차 MAU ${F.banking.mau}`]],
    sections: [
      { h: '문제', body: '<p>지점 중심의 저축은행에는 비대면 채널이 없었습니다. 고객은 계좌를 열거나 대출을 받으려면 지점이나 상담원을 거쳐야 했습니다.</p><p>짧은 기간 안에 출시해야 했지만, 이후 상품이 늘어날 때마다 핵심 기능을 다시 만드는 일은 피해야 했습니다.</p>' },
      { h: '판단과 접근', body: `<h3>범위와 산출물</h3><ul><li>회원가입, 비대면 실명확인, 계좌, 이체, 오픈뱅킹, 대출까지 전체 요구사항을 설계했습니다.</li><li>요구사항정의서, 화면설계서, 기능명세서, WBS를 직접 작성했고, 협력사 제안과 견적을 평가해 업체를 선정했습니다.</li></ul><figure class="figure"><div class="frame frame--img"><img src="/assets/img/work/banking-app.webp" alt="페퍼저축은행 모바일뱅킹 앱 메인 화면과 계좌 화면" loading="lazy" width="1600" height="1000"></div><figcaption>출시한 모바일뱅킹 앱. 이름과 금액은 예시입니다</figcaption></figure><h3>단기 출시와 장기 확장성 사이의 구조</h3><p>인증, 계좌 조회, 이체를 <strong>공통 모듈</strong>로 먼저 세우고 상품별 화면을 그 위에 얹는 구조를 택했습니다. 1차에서 빠지는 기능은 "왜 2차인지"를 문서로 남겨 이해관계자와 합의했습니다.</p><figure class="figure"><div class="frame"><div class="layers"><div class="layer layer--top"><b>2차 · 상품 화면</b><span>예금 · 적금 · 신용대출 · 이후 상품</span></div><div class="layer"><b>1차 · 공통 모듈</b><span>인증 · 비대면 실명확인 · 계좌 조회 · 이체 · 오픈뱅킹</span></div></div></div><figcaption>공통 모듈을 먼저 세워, 상품이 늘어도 핵심 기능을 다시 만들지 않게 했습니다</figcaption></figure><h3>조직</h3><p>상품, 리스크, 준법, IT, 고객센터, 협력사의 요구를 <strong>하나의 백로그</strong>로 모아 우선순위를 공개했고, 역할과 의사결정 경로를 정리했습니다. 프로젝트 조직은 ${F.banking.team}으로 커졌고, 마케팅·전략기획·CXM 팀을 직접 세팅했습니다.</p><p>저축은행 업계 최초로 행동 데이터 분석 도입을 제안해 CXM(고객경험관리)팀을 만들었습니다. 이 작업은 <a href="/work/data-cx.html">데이터 기반 고객경험 개선</a>으로 이어졌습니다.</p>` },
      { h: '결과', body: results([[F.banking.mau, '출시 1년 차 MAU'], [F.banking.deposit, '출시 1년 예금'], [F.banking.loan, '출시 1년 대출'], [F.banking.team, '프로젝트 조직']]) },
      { h: '배운 점', body: '<p>출시 속도와 확장성은 순서를 정하는 것으로 함께 얻을 수 있었습니다. 빠지는 기능을 "왜 2차인지" 문서로 남겨 둔 것이 이해관계자의 합의를 지키는 데 가장 효과가 컸습니다.</p>' },
    ],
    prev: T.mkt, next: T.integ,
  }),
};

const integ = {
  path: 'work/system-integration.html', nav: 'work',
  title: '통합시스템 구축 총괄 PM · 김현규',
  description: `부서별 시스템 4개를 하나로 통합하는 프로젝트를 직접 제안하고 발주한 총괄 PM. 예산 ${F.integration.budget}, ${F.integration.people}, ${F.integration.months}.`,
  body: casePage({
    back, eyebrow: '페퍼저축은행 · 2026.06 – 진행 중',
    title: '부서마다 따로 쓰던 시스템 4개를<br>하나로 묶자고 제안하기',
    lead: `고객, 상품, 정산 업무가 부서별 시스템에서 중복 운영되는 기술 부채를 문제로 정의하고, 통합을 직접 제안해 예산을 확보했습니다. 지금은 ${F.integration.people} 규모 프로젝트의 총괄 PM입니다.`,
    summary: [['역할', '제안자 · 발주 총괄 PM'], ['기간', '2026.06 – 진행 중'], ['규모', `${F.integration.people} · ${F.integration.months}`], ['예산', F.integration.budget]],
    sections: [
      { h: '문제', body: '<p>디지털뱅킹, 소비자금융, 오토금융, 주택금융 시스템이 부서별로 따로 도입되면서 고객·상품·정산 업무가 중복으로 운영됐습니다. 서로 다른 언어로 만들어진 시스템이라 유지보수와 인력 비용이 계속 쌓였습니다.</p>' },
      { h: '판단과 접근', body: `<figure class="figure"><div class="frame"><div class="merge"><ul class="merge-from" role="list"><li>디지털뱅킹</li><li>소비자금융</li><li>오토금융</li><li>주택금융</li></ul><span class="merge-arrow" aria-hidden="true">${icon.arrow}</span><div class="merge-to"><b>통합시스템</b><span>고객 · 상품 · 정산 단일화</span></div></div></div><figcaption>시스템 ${F.integration.systems}</figcaption></figure><h3>갭분석 대신 새 구조 설계로 역제안</h3><p>통상의 AS-IS/TO-BE 갭분석은 그 자체가 리소스를 크게 쓴다고 판단했습니다. 대신 핵심 프로세스를 분석해 구조를 새로 설계하는 방식으로 역제안했고, 공수를 <strong>약 ${F.integration.mmEstimate}</strong>(MM, 1명이 한 달 일하는 양)로 산정했습니다. 실제 업체 견적이 ${F.integration.mmQuote}로 나와 산정이 맞았음을 확인했습니다.</p><h3>제안부터 발주까지</h3><ul><li>사업계획서를 쓰고 TF를 구성해 대표이사 보고로 과제를 채택받았습니다.</li><li>요구사항 <strong>${F.integration.requirements}</strong>을 수집하고 우선순위를 정해 RFP를 작성했고, 공개입찰과 제안설명회, 평가를 거쳐 업체를 선정했습니다.</li><li>착수 후에는 범위·일정·비용·품질을 종합 관리하고, 개발사·현업·준법 사이의 협업을 조율합니다.</li></ul><h3>프로젝트 운영에 AI 적용</h3><p>요구사항, 프로세스 정의, 화면 프로토타입을 AI로 작성하고 축적하는 <a href="/ai/second-brain.html">세컨브레인</a>을 이 프로젝트 팀에 사내 최초로 적용했습니다.</p>` },
      { h: '결과', body: results([[F.integration.budget, '예산 확보'], [F.integration.people, F.integration.vendor], [F.integration.requirements, '요구사항 수집·구조화'], [`${F.integration.mmEstimate} → ${F.integration.mmQuote}`, '산정 공수와 실제 견적']]) + '<p class="caption">2026년 11월 기준 진행 중인 프로젝트입니다.</p>' },
      { h: '배운 점', body: '<p>큰 프로젝트일수록 분석 자체에 드는 비용을 먼저 따져야 했습니다. 산정 근거를 핵심 프로세스 단위로 남겨 두니, 견적 비교와 경영진 설득이 같은 숫자로 이어졌습니다.</p>' },
    ],
    prev: T.bank, next: T.data,
  }),
};

const data = {
  path: 'work/data-cx.html', nav: 'work',
  title: '데이터 파이프라인 구축과 고객경험 개선 · 김현규',
  description: `AppsFlyer·Amplitude·Tableau 데이터 파이프라인 구축, 사내 첫 클라우드 분석 환경 도입, 행동 데이터 ${F.data.events}개 이벤트 설계. Retention ${F.data.retention}.`,
  body: casePage({
    back, eyebrow: '페퍼저축은행 · 2021.03 – 2024.12',
    title: '금융사 안에 데이터 파이프라인을<br>직접 깔기',
    lead: '모바일뱅킹 출시 후, 의사결정에 필요한 데이터를 현업이 직접 볼 수 없다는 것이 가장 큰 병목이었습니다. CXM팀을 만들고 사내 첫 클라우드 분석 환경을 도입해 현업이 대시보드를 직접 만드는 단계까지 정착시켰습니다.',
    summary: [['역할', 'CXM팀 신설 · 데이터 플랫폼 리더'], ['기간', '2021.03 – 2024.12'], ['도구', 'AppsFlyer · Amplitude · Tableau'], ['결과', `Retention ${F.data.retention}`]],
    sections: [
      { h: '문제', body: '<p>마케팅, 상품기획, 개발이 각자의 엑셀과 서버 로그로 따로 보고했고, 데이터 추출 요청은 개발팀에 쌓였습니다. 개발팀장, 상품기획 담당과 함께 문제를 "의사결정에 필요한 데이터를 현업이 직접 볼 수 없다"로 정의했습니다.</p><p>클라우드 분석 솔루션은 IT보안·준법·리스크 부서에서 망분리(내부망과 인터넷망을 분리하도록 한 금융 규정) 위반으로 보던 사안이었습니다.</p>' },
      { h: '판단과 접근', body: `<h3>설계 단계에서 규제 리스크를 없애기</h3><ul><li>이벤트를 추가할 때마다 개발이 필요한 온프레미스 BI 대신 클라우드 SaaS를 택했습니다.</li><li>규제 리스크를 심의에서 다투지 않고, <strong>개인정보를 수집하지 않는 이벤트 체계</strong>로 설계해 처음부터 없앴습니다.</li><li>전자금융감독규정과 클라우드 가이드를 조항 단위로 대조해 위원회 심의 체크리스트를 항목별로 충족했고, 보안성 심의를 통과했습니다.</li></ul><figure class="figure"><div class="frame"><ol class="flow"><li><b>AppsFlyer</b><span>광고 어트리뷰션</span></li><li><b>Amplitude</b><span>앱 행동 분석</span></li><li><b>Tableau</b><span>전사 BI · 대시보드</span></li></ol></div><figcaption>리스크가 낮은 도구부터 단계적으로 도입했습니다</figcaption></figure><h3>공통 행동 데이터 체계</h3><ul><li>이벤트 <strong>${F.data.events}개</strong>, 속성 <strong>${F.data.properties}개</strong>를 직접 정의하고 비식별 기준을 문서로 만들었습니다.</li><li>마케팅·상품·CS·개발 부서를 교육해 현업이 대시보드를 직접 만드는 단계까지 정착시켰고, 사내 스터디 '아이스'(12명)를 운영했습니다.</li></ul>` },
      { h: '도입 범위', body: `<p>보통 컨설팅사와 벤더, 여러 팀이 나눠 맡는 일을 기획자가 직접 했습니다. 도구를 발굴하고 검토해 도입하고, 설치하고 운영하는 전 단계를 맡았습니다.</p><figure class="figure"><div class="frame"><ol class="flow"><li><b>수집</b><span>AppsFlyer 광고 어트리뷰션, Amplitude 앱 이벤트 ${F.data.events}개</span></li><li><b>정의</b><span>이벤트·속성 체계와 비식별 기준 문서화</span></li><li><b>분석</b><span>Amplitude 행동 분석, 퍼널·리텐션</span></li><li><b>공유</b><span>Tableau 부문 대시보드 4종, 수신 시뮬레이터, MIS</span></li><li><b>결정</b><span>현업이 직접 대시보드를 만들고 판단</span></li></ol></div><figcaption>광고 유입부터 현업의 의사결정까지 이어지는 데이터 흐름</figcaption></figure><ul><li><strong>AppsFlyer:</strong> 캠페인과 채널별 성과를 하나의 기준으로 묶었습니다. 이후 제휴사 '이어하기' 프로세스에도 전체 적용했습니다.</li><li><strong>Amplitude:</strong> 직접 설계한 이벤트 체계를 4년 넘게 운영하고 있습니다.</li><li><strong>Tableau (2025):</strong> 부서 인터뷰부터 품의, 서버 설치, 교육, 대표이사 보고까지 도입을 주도했고, 부문 대시보드 4종과 수신 시뮬레이터, MIS를 현업이 쓰는 상태로 만들었습니다(2026).</li><li>다음 단계로 클라우드(MS Azure) 도입 검토를 주관하고 사내 세미나를 열었습니다.</li></ul>` },
      { h: '결과', body: results([[F.data.retention, '제품 전체 Retention'], [F.data.active, '메인화면 개인화 후 활성 사용률'], [F.data.account, '가입 과정 개선 후 계좌개설 완료율']]) + '<p>데이터 추출 요청이 개발팀에 쌓이던 구조가, 현업이 대시보드를 직접 만들어 판단하는 구조로 바뀌었습니다.</p><p>도입 과정에서 정리한 검토 항목·절차·책임 구분은 정보보호팀이 제정한 <strong>사내 클라우드 규정의 기준 사례</strong>가 됐습니다. 데이터로 앱 화면을 개선한 과정은 AB180 고객 사례로 소개됐습니다.</p>' },
      { h: '배운 점', body: '<p>규제를 설계 단계의 제약 조건으로 다룰 때 통과가 쉬웠습니다. "무엇을 수집하지 않는가"를 먼저 정하니 보안·준법 부서와 같은 편에서 이야기할 수 있었습니다.</p>' },
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
    title: '규제 대응을<br>화면과 프로세스에 녹이기',
    lead: '준법과 운영이 서로 다른 답을 낼 때 양쪽이 받아들일 안을 만들고, 그 안을 화면과 시스템에 녹였습니다. 2025년부터 디지털기획 담당으로 맡은 규제·운영 과제 네 가지입니다.',
    summary: [['역할', '디지털기획 담당'], ['기간', '2025.01 – 현재'], ['협업', '준법 · 개인정보 · 금융소비자보호 · 고객센터'], ['결과', '제3안 합의 · 인력 4→2명']],
    sections: [
      { h: '회원가입 주민번호 수집 최소화', body: '<p>준법은 주민번호 전면 제외를, 운영은 기존 고객 식별을 요구하며 교착됐습니다. 전자금융감독규정, 금융실명법, 타사 사례를 대조해 <strong>"접근매체 등록" 관점의 수집과 동의서 추가</strong>라는 제3안을 내 양쪽의 합의를 끌어냈습니다. 일부는 적용했고, 나머지는 통합시스템 프로젝트에서 이어갑니다.</p>' },
      { h: '법정 통지서 시스템', body: '<p>기한이익 상실, 경매, 채권양도 같은 채무자 법정 통지서를 <strong>온라인 조회와 카카오 알림톡 발송</strong> 시스템으로 만들어, 발송 기한을 사람이 기억하지 않아도 지켜지게 했습니다.</p>' },
      { h: '감사·가이드라인 대응', body: '<ul><li>다크패턴 가이드라인 대응 체크리스트와 개발 요구사항을 작성하고 내부 결재와 증적까지 마쳤습니다.</li><li>모바일뱅킹 이용약관 개정과 금감원 사후보고를 담당했습니다.</li><li>예금보험공사 감사와 내부감사의 디지털 분야 대응을 맡았습니다.</li><li>비대면 실명확인, 온라인 설명의무, 적합성 체크리스트를 화면과 운영 프로세스에 반영했습니다.</li></ul>' },
      { h: '소송 대응과 운영 효율', body: `<p>대여금 소송 1심 패소 후 증적과 프로세스 자료를 직접 준비해 <strong>2심 전부 승소</strong>에 기여했습니다. 고객센터 1:1 문의 대응을 표준화·전산화해 필요 인력을 4명에서 2명으로 줄이고, 남은 인력은 다른 업무로 전환했습니다.</p>${results([['4명 → 2명', '1:1 문의 대응 인력'], ['2심 승소', '증적·프로세스 자료 준비로 기여']])}` },
      { h: '배운 점', body: '<p>규제 대응은 문서로 끝나면 다시 사람에게 기대게 됩니다. 화면, 시스템, 운영 절차 중 하나에 고정해 두어야 담당자가 바뀌어도 지켜졌습니다.</p>' },
    ],
    prev: T.data,
  }),
};

export default [list, loan, toss, mkt, bank, integ, data, reg];

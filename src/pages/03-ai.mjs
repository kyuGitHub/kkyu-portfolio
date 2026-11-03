import { F, icon, caseCard, casePage, results, LINKS, ext } from '../../scripts/lib.mjs';

const back = { href: '/ai.html', label: 'AI Lab' };
const T = {
  sb: { href: '/ai/second-brain.html', title: '세컨브레인' },
  kg: { href: '/ai/knellgrave.html', title: '넬그레이브' },
  ad: { href: '/ai/admin-generator.html', title: '어드민 화면 제너레이터' },
};

const cards = [
  { ...T.sb, image: '/assets/img/work/secondbrain-1.webp', imageAlt: '세컨브레인 지식 그래프 화면 (샘플 데이터)', eyebrow: '2025.02 – 현재 · 운영 중', title: '세컨브레인', desc: `Plaud 녹음 → Claude 변환 → 옵시디언 위키로 이어지는 팀 지식 시스템. 30억 통합 프로젝트 팀에 사내 최초로 적용해 요구사항 ${F.secondBrain.requirements}, 의사결정 ${F.secondBrain.decisions}을 쌓았습니다.`, badges: ['사내 최초 팀 적용', '운영 중'] },
  { ...T.kg, image: '/assets/img/work/knellgrave-1.webp', imageAlt: '넬그레이브 게임 화면', eyebrow: `개인 프로젝트 · 프로토타입 ${F.knellgrave.version}`, title: '넬그레이브', desc: '세로형 다크판타지 서바이버 슈팅 게임. 기획·플레이 피드백·아트 디렉팅은 사람이, 코드·테스트·픽셀 아트 생성은 AI가 맡아 1인 개발했습니다.', badges: ['게임', '프로토타입'] },
  { ...T.ad, image: '/assets/img/work/admin-generator.webp', imageAlt: '어드민 화면 제너레이터의 화면 목록',  eyebrow: '개인 프로젝트 · 2026.10 · 약 4주', title: '어드민 화면 제너레이터', desc: '요구사항을 넣으면 디자인 시스템 규격대로 어드민 화면과 화면정의서를 만드는 도구. PPT 화면설계서를 대체하는 것이 목표입니다.', badges: ['업무 도구', '사내 파일럿 제안'] },
];

const agents = [
  { id: 'kkyu', name: '김현규', role: '본인 · 방향과 결정', img: null, layer: 'person',
    lead: '큰 그림을 정하고 최종 결정을 내립니다. 에이전트는 초안과 근거를 만들고, 결정은 언제나 사람이 합니다.',
    rows: [['맡는 일', '방향 설정, 우선순위, 최종 검수와 결재'], ['원칙', '실수하면 안 되는 일일수록 원문과 대조해 직접 검증합니다']] },
  { id: 'bobbi', name: '뽀삐', role: '매니저', img: 'bobbi', layer: 'manager',
    lead: '요청을 받아 해석하고, 실무 에이전트 셋에게 일을 나눠 맡긴 뒤 결과를 모아 1차 검수합니다.',
    rows: [['맡는 일', '요청 해석, 업무 분배, 초안 작성, 산출물 통합과 1차 검수'], ['산출물', '업무 초안, 리서치 요약, 검토 의견'], ['실행 환경', 'OpenClaw (작업 실행)']] },
  { id: 'neukggu', name: '늑뀨', role: '리서처', img: 'neukggu', layer: 'worker',
    lead: '자료와 근거를 찾고 문서로 정리합니다. 한 번 맡은 단서는 끝까지 추적합니다.',
    rows: [['맡는 일', '조사, 문서화, 로그 추적, 경쟁사 조사'], ['산출물', '리서치 문서, 법률 검토용 원문 대조 자료 (법제처 데이터 MCP 연동)']] },
  { id: 'nuleongi', name: '누렁이', role: '빌더', img: 'nuleongi', layer: 'worker',
    lead: '코드로 만들고 배포합니다. 예쁜 코드보다 돌아가는 코드가 먼저입니다.',
    rows: [['맡는 일', '개발, 자동화, 배포, 예약 작업과 인프라 관리'], ['산출물', '자동화 스크립트, 웹 도구, 매일 갱신되는 에이전트 일기 사이트']] },
  { id: 'kkukku', name: '꾸꾸', role: '디자이너', img: 'kkukku', layer: 'worker',
    lead: 'PRD, 화면, 문구를 한 번에 묶어 정리합니다.',
    rows: [['맡는 일', 'PRD, 화면 설계, 마이크로카피'], ['산출물', '요구사항 초안, 화면 프로토타입, 테스트케이스 초안']] },
  { id: 'duggu', name: '덕구', role: '아카이비스트', img: 'duggu', layer: 'archive',
    lead: '팀이 만든 작업, 결정, 사건을 놓치지 않고 기록해 옵시디언 지식 저장소로 묶습니다. 이 기록이 다음 작업의 맥락이 됩니다.',
    rows: [['맡는 일', '기록, 아카이브, 검색, 요약, 태깅'], ['실행 환경', 'Hermes (지식 자산화) · 옵시디언']] },
];

const node = a => `<button type="button" class="agent-node" data-agent="${a.id}" aria-pressed="false" aria-controls="agent-${a.id}">
            ${a.img ? `<img src="/assets/img/agents/${a.img}.webp" alt="" width="44" height="44">` : '<span class="an-avatar" aria-hidden="true">김</span>'}
            <span class="an-text"><span class="an-name">${a.name}</span><span class="an-role">${a.role}</span></span>
          </button>`;
const by = layer => agents.filter(a => a.layer === layer);

const list = {
  path: 'ai.html', nav: 'ai',
  title: 'AI Lab · 김현규',
  description: `세컨브레인, 넬그레이브, 어드민 화면 제너레이터까지 AI로 직접 만든 프로젝트 3개와, 역할을 나눠 일하는 업무용 AI 에이전트 ${F.agents.count}의 구성.`,
  body: `
<section class="hero">
  <div class="container">
    <span class="eyebrow">LAB</span>
    <h1 class="display2">AI로 직접 만들고,<br>조직에 안착시킵니다</h1>
    <p class="lead">새 기술은 회사와 고객의 문제를 푸는 데 씁니다. 커뮤니티에서 트렌드를 모으고, 직접 써 보며 우리 조건에서 되는 것을 가려내고, 팀에 적용해 숫자로 확인합니다.</p>
    <ol class="flow flow--plain hero-flow">
      <li><b>수집</b><span>AI 커뮤니티·워크숍에서 트렌드를 상시 수집</span></li>
      <li><b>판별</b><span>에이전트 도구와 MCP를 직접 써 보고 되는 것만 고름</span></li>
      <li><b>안착</b><span>팀 단위로 적용하고 작성 규칙과 템플릿을 표준화</span></li>
      <li><b>숫자</b><span>작성 시간, 축적 건수로 효과를 확인</span></li>
    </ol>
  </div>
</section>

<section class="section section--tight" aria-labelledby="projects-title">
  <div class="container">
    <div class="sh-split">
      <div><span class="eyebrow">PROJECTS</span><h2 class="title1" id="projects-title">AI로 만든 것</h2></div>
      <div><p>업무 시스템, 사내 도구, 게임까지 성격이 다른 세 가지를 직접 만들었습니다. 공통점은 사람이 문제와 품질 기준을 정하고, AI가 만드는 일을 맡았다는 것입니다.</p></div>
    </div>
    <div class="grid-3">
      ${cards.map(caseCard).join('\n      ')}
    </div>
  </div>
</section>

<section class="section" id="agents" aria-labelledby="agents-title">
  <div class="container">
    <div class="sh-split">
      <div><span class="eyebrow">AGENTS</span><h2 class="title1" id="agents-title">업무용 AI 에이전트 ${F.agents.count}</h2></div>
      <div><p>2025년 9월부터 직접 설계하고 운영하는 에이전트 팀입니다. 역할별 권한과 금지 규칙을 문서로 정해 두었고, 조사·기획·요구사항 분석·테스트케이스 작성에 씁니다. 에이전트를 누르면 맡은 일을 볼 수 있습니다.</p></div>
    </div>
    <div data-agent-map data-default="bobbi">
      <div class="agent-map">
        <div class="agent-col"><span class="agent-layer-label">사람</span>
          ${by('person').map(node).join('')}
        </div>
        <div class="agent-col"><span class="agent-layer-label">매니저 · OpenClaw</span>
          ${by('manager').map(node).join('')}
        </div>
        <div class="agent-col"><span class="agent-layer-label">실무 에이전트</span>
          ${by('worker').map(node).join('\n          ')}
        </div>
      </div>
      <div class="agent-archive">
        <div><span class="agent-layer-label">기록 · Hermes</span>${by('archive').map(node).join('')}</div>
        <p>매니저와 실무 에이전트가 만든 산출물과 결정이 옵시디언 지식 저장소에 쌓이고, 다음 작업을 시작할 때 맥락으로 다시 쓰입니다. 작업을 실행하는 층(OpenClaw, 에이전트 실행 도구)과 지식을 쌓는 층(Hermes, 기록·검색 도구)을 나눠 운영합니다.</p>
      </div>
    </div>
    <div class="agent-detail">
      ${agents.map(a => `<article id="agent-${a.id}" data-agent-panel="${a.id}">
        <div><span class="eyebrow">${a.role}</span><h3>${a.name}</h3></div>
        <div class="stack"><p>${a.lead}</p><dl>${a.rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="principles-title">
  <div class="container">
    <div class="sh-split">
      <div><span class="eyebrow">PRINCIPLES</span><h2 class="title1" id="principles-title">금융 회사에서<br>AI를 쓰는 원칙</h2></div>
      <div><p>자동화는 모델 성능보다 경계와 검증 절차를 먼저 정의해야 조직이 받아들인다는 것을 실무에서 배웠습니다.</p></div>
    </div>
    <dl class="rows">
      <div class="row reveal"><dt>경계</dt><dd class="row-body"><h3>외부망 전용, 개인정보 미취급</h3><p>AI 작업은 외부망에서만 하고, 개인정보는 다루지 않으며, 비식별 자료만 씁니다.</p></dd></div>
      <div class="row reveal"><dt>검증</dt><dd class="row-body"><h3>실수하면 안 되는 일일수록 원문 대조</h3><p>법률·개인정보 검토는 법제처 데이터를 연결해 원문과 대조하는 방식으로만 씁니다.</p></dd></div>
      <div class="row reveal"><dt>권한</dt><dd class="row-body"><h3>역할별 권한과 금지 규칙을 문서로</h3><p>에이전트가 늘어나도 책임이 흐려지지 않도록, 누가 무엇을 할 수 있고 하면 안 되는지를 정해 둡니다.</p></dd></div>
      <div class="row reveal"><dt>확산</dt><dd class="row-body"><h3>혼자 쓰지 않고 팀에 퍼뜨리기</h3><p>사내 스터디 '아이스'(12명), 부서 방문 AI 기초 교육, 기획자 직무교육 강의로 팀의 활용 수준을 함께 올립니다. 요구사항·화면설계·보고자료 템플릿을 표준화해 주간보고 작성 시간을 ${F.secondBrain.weekly}으로 줄였습니다.</p></dd></div>
    </dl>
    <p class="caption press">더 보기 · ${ext(LINKS.diary, '에이전트 일기')} · ${ext(LINKS.github, 'GitHub')}</p>
  </div>
</section>
`,
};

const sb = {
  path: 'ai/second-brain.html', nav: 'ai',
  title: '세컨브레인 · 김현규',
  description: `회의록·요구사항·의사결정을 연결된 지식으로 쌓는 팀 단위 AI 시스템. 회의록 작성 ${F.secondBrain.minutes}, 요구사항 ${F.secondBrain.requirements} 축적.`,
  body: casePage({
    back, eyebrow: 'AI · 2025.02 – 현재 · 운영 중',
    title: '휘발되던 회의와 결정을<br>추적 가능한 자산으로',
    lead: `회의록, 요구사항, 의사결정이 사람의 기억과 메신저에 흩어져 사라지던 문제를 풀기 위해 만든 시스템입니다. 30억 규모 통합시스템 프로젝트 팀에 사내 최초로 팀 단위로 적용했습니다.`,
    summary: [['역할', '설계 · 구축 · 팀 전파'], ['기간', '2025.02 – 현재'], ['팀 적용', '2026.07 – · 통합시스템 팀 5명'], ['결과', `회의록 ${F.secondBrain.minutes}`]],
    sections: [
      { h: '문제', body: '<p>큰 프로젝트일수록 "이 요구사항은 어느 회의에서 나왔지?", "이 결정은 누가 왜 했지?"를 찾는 데 시간이 많이 듭니다. 회의록은 작성에 1시간씩 걸렸고, 써 둔 기록도 서로 연결되지 않아 다시 찾기 어려웠습니다.</p>' },
      { h: '구조', body: `<figure class="figure"><div class="frame"><ol class="flow"><li><b>수집</b><span>Plaud(AI 녹음기) 회의 녹음, 문서, 외부 데이터</span></li><li><b>변환</b><span>Claude Code가 회의록·요구사항 초안 작성</span></li><li><b>전처리</b><span>옵시디언 규칙 검사(린팅)</span></li><li><b>분류</b><span>태그와 백링크로 연결</span></li><li><b>위키</b><span>회의 → 요구사항 → 결정 추적</span></li></ol></div><figcaption>데이터 수집부터 위키 구축까지 5단계</figcaption></figure><ul><li>회의록 작성 규칙을 표준화해 팀에 전파했습니다. 팀원은 문서화 대신 회의에 집중합니다.</li><li>요구사항, 프로세스 정의, 화면 프로토타입 템플릿을 표준화하고 AI가 초안을 채우게 했습니다.</li><li>운영 원칙은 외부망 전용, 개인정보 미취급, 비식별 자료만 사용입니다.</li></ul><h3>그래프 뷰어를 웹으로</h3><p>쌓인 노트를 한눈에 보도록 노트 간 관계를 2D·3D 지식 그래프와 요구사항 표로 보여 주는 웹 뷰어를 Claude Code와 함께 이틀 만에 만들었습니다(커밋 21회). 근거 회의가 없는 요구사항과 바뀐 요구사항이 바로 보입니다.</p><ul><li>보기 6가지: 표, 3D 브레인, 자유, 별자리, 계층, 타임라인</li><li>데이터는 GitHub에 올리지 않고 비공개 저장소(Supabase)에 두며, 열람 명단에 있는 사람만 로그인해 봅니다.</li><li>비식별 노트 중 바뀐 것만 60분마다 자동으로 올리고, 마지막 업로드 시각을 화면에 표시합니다.</li></ul>` },
      { h: '화면', body: '<div class="shots shots--2"><img src="/assets/img/work/secondbrain-1.webp" alt="3D 지식 그래프 보기" loading="lazy" width="1600" height="1000"><img src="/assets/img/work/secondbrain-2.webp" alt="별자리 보기: 핵심 주장 노트를 원 위에 고정한 그래프" loading="lazy" width="1600" height="1000"></div><p class="caption">샘플 데이터로 만든 화면입니다. 실제 프로젝트 데이터는 공개하지 않습니다.</p>' },
      { h: '결과', body: results([[F.secondBrain.minutes, '회의록 작성 시간'], [F.secondBrain.weekly, '주간보고 작성 시간 (도입 초기)'], [F.secondBrain.requirements, '요구사항 축적'], [F.secondBrain.decisions, '의사결정 축적']]) + '<p>흩어지던 업무 지식을 팀 자산으로 운영한 사내 첫 사례입니다.</p>' },
      { h: '배운 점', body: '<p>AI를 팀에 들이는 데 가장 중요했던 것은 규칙이었습니다. 작성 규칙과 템플릿을 먼저 정하니 사람마다 다른 기록이 같은 모양으로 쌓였고, 그래야 연결이 생겼습니다.</p>' },
    ],
    next: T.kg,
  }),
};

const kg = {
  path: 'ai/knellgrave.html', nav: 'ai',
  title: '넬그레이브 · 김현규',
  description: 'AI 에이전트와 1인 개발한 세로형 다크판타지 서바이버 슈팅 게임. 기획과 품질 기준은 사람이, 개발은 AI가.',
  body: casePage({
    back, eyebrow: `개인 프로젝트 · 프로토타입 ${F.knellgrave.version}`,
    title: '개발 전문가가 아닌 PM이<br>AI 에이전트와 게임 만들기',
    lead: '『넬그레이브: 마지막 종지기』는 한 손으로 15분 한 판을 즐기는 세로형 다크판타지 서바이버 슈팅 게임입니다. PM이 AI 에이전트만으로 실제 제품을 어디까지 만들 수 있는지 확인하려고 시작했습니다.',
    summary: [['역할', '기획 · 플레이 피드백 · 아트 디렉팅'], ['AI가 맡은 일', '코드 · 테스트 · 픽셀 아트'], ['상태', `프로토타입 ${F.knellgrave.version}`], ['버전', `${F.knellgrave.versions} 반복`]],
    sections: [
      { h: '화면', body: '<div class="shots"><img src="/assets/img/work/knellgrave-1.webp" alt="넬그레이브 타이틀 화면" loading="eager" width="780" height="1688"><img src="/assets/img/work/knellgrave-2.webp" alt="캐릭터 선택 화면: 마지막 종지기, 도자기 마녀 노아, 그림자 기사 오르윈" loading="eager" width="780" height="1688"><img src="/assets/img/work/knellgrave-3.webp" alt="전투 화면: 적에게 둘러싸인 플레이어와 HUD" loading="eager" width="780" height="1688"><img src="/assets/img/work/knellgrave-4.webp" alt="보스전 화면: 거종 장군 바르함" loading="eager" width="780" height="1688"></div>' },
      { h: '만든 것', body: '<ul><li>조작은 이동만 하고 공격은 자동, 레벨업 때 카드 3장 중 1장을 고르는 로그라이트 구조</li><li>고유 공격과 엔딩을 가진 캐릭터 3종, 페이즈가 3단계인 보스 5종, 스테이지 4개와 적 16종 이상</li><li>무기·패시브 진화 9종과 궁극기, 피난처 영구 강화, 유물 8종, 동료, 도감, 회차 모드</li><li>세계 지도와 마을 4곳, 생존자의 선택지·퍼즐·부탁, 주인공의 정체가 드러나는 반전 엔딩</li><li>튜토리얼, 쉬운 난이도 모드, 저장 데이터 손상 복구</li><li>기획서에는 KPI 가설, 수익 모델, 리스크 표, IP·상표 점검, 출시 체크리스트까지 담았습니다.</li></ul>' },
      { h: '사람과 AI의 역할 분담', body: `<dl class="rows"><div class="row"><dt>사람</dt><dd class="row-body"><p>기획, 플레이 피드백, 아트 디렉팅, 일러스트 리터칭. "처음 하는 사람이 한 손으로 폰을 들고 할 때"를 기준으로 모든 결정을 점검했습니다.</p></dd></div><div class="row"><dt>Claude</dt><dd class="row-body"><p>코드 전체(Phaser 3), 테스트, 시나리오 초안. 픽셀 스프라이트와 모션은 Claude가 PixelLab을 MCP(AI와 외부 도구를 잇는 규격)로 연결해 직접 생성했습니다.</p></dd></div><div class="row"><dt>리뷰 에이전트</dt><dd class="row-body"><p>UX, UI, 레벨디자인 관점의 에이전트들이 직접 플레이하고 리뷰했습니다(v1.9에서 5명, v2.2에서 3명).</p></dd></div><div class="row"><dt>일러스트</dt><dd class="row-body"><p>Morphic으로 생성하고 사람이 리터칭했습니다.</p></dd></div></dl>` },
      { h: '품질을 지킨 방법', body: `<p>AI가 빠르게 만드는 만큼 깨지는 것도 빨랐습니다. 그래서 배포 조건을 먼저 정했습니다.</p><ul><li>배포 전마다 회귀 테스트 <strong>${F.knellgrave.regression}</strong>과 봇 자동 플레이 검증을 돌립니다.</li><li>회고에서 작업 규칙 <strong>${F.knellgrave.rules}</strong>를 만들고, 하나라도 빠지면 배포하지 않습니다. 예: 두 가지 폰 크기(390×844, 360×640)에서 캡처해 눈으로 확인, 자주 누르는 버튼은 엄지 영역에 44px 이상, 일괄 치환 금지, 흐름을 바꾸면 테스트도 같은 수정에서 고치기.</li><li>성능: ${F.knellgrave.perf}, 6판 연속 플레이에서 메모리 누수 0.</li><li>페이지 용량이 16.2MB로 한도를 넘자 96색 양자화로 14.9MB까지 줄였습니다.</li></ul>` },
      { h: '배운 점', body: '<ol class="case-list"><li><strong>"완료"의 기준은 실제 폰 화면입니다.</strong> 화면에서 확인하기 전에 완료로 넘긴 일이 반복돼, 두 화면 크기 캡처를 배포 조건으로 삼았습니다.</li><li><strong>한 곳을 고치면 다른 곳이 깨집니다.</strong> 일괄 치환으로 1.5초가 1.5ms로 바뀐 사고 이후, 흐름 변경과 테스트 수정을 한 묶음으로 처리합니다.</li><li><strong>만든 사람과 하는 사람의 기준은 다릅니다.</strong> 플레이어 피드백 5건이 모두 이 차이에서 나왔고, 이후 결정은 처음 하는 사람 기준으로 점검합니다.</li></ol>' },
    ],
    prev: T.sb, next: T.ad,
  }),
};

const ad = {
  path: 'ai/admin-generator.html', nav: 'ai',
  title: '어드민 화면 제너레이터 · 김현규',
  description: '요구사항을 넣으면 디자인 시스템 규격대로 어드민 화면과 화면정의서를 만드는 AI 도구. PPT 화면설계서를 대체하는 것이 목표.',
  body: casePage({
    back, eyebrow: '개인 프로젝트 · 2026.10 · 약 4주 · 사내 파일럿 제안 준비',
    title: 'PPT 화면설계서 대신<br>동작하는 화면을 넘기기',
    lead: 'PM이 요구사항을 넣으면 디자인 시스템 규격대로 동작하는 어드민 화면을 AI가 만들고, PM은 클릭으로 고친 뒤 화면정의서와 함께 개발자에게 넘깁니다. 문제 정의, PRD, 구현까지 약 4주 동안 직접 진행했습니다.',
    summary: [['역할', '문제 정의 · PRD · 구현 지휘'], ['기간', '2026.10 · 약 4주'], ['상태', '사내 파일럿 제안 준비'], ['목표', '화면당 30분 이내']],
    sections: [
      { h: '문제', body: '<p>어드민 화면 하나가 현업 → PM → 디자이너 → 퍼블리셔 → 개발자 5단계를 거쳤고, PM이 PPT로 목업을 그리는 단계가 병목이었습니다. 화면 하나에 30분~1시간, 정보가 많으면 2~3시간이 걸렸습니다.</p><ul><li>상태·권한별 케이스를 미리 볼 시간이 없었습니다.</li><li>개발 중에 항목·버튼 추가 요청이 화면마다 생겨 수정 개발로 돌아갔습니다.</li><li>전달 단계마다 기획 의도가 조금씩 빠졌습니다.</li></ul><p>PM 인터뷰(5라운드, 25문항)로 이 병목을 확인했습니다.</p>' },
      { h: '만든 것', body: `<figure class="figure"><div class="frame"><ol class="flow"><li><b>요청서</b><span>화면명, 패턴, 항목, 버튼 동작, 상태별 케이스</span></li><li><b>AI 생성</b><span>Claude가 JSON 화면 스키마 생성, 검증 실패 시 자동 재시도</span></li><li><b>렌더링</b><span>디자인 시스템 컴포넌트로 그리고 샘플 데이터 채움</span></li><li><b>클릭 편집</b><span>속성 패널, 자연어 수정, 케이스용 화면 복제</span></li><li><b>내보내기</b><span>미리보기 URL, 화면정의서, HTML, PNG, JSON</span></li></ol></div><figcaption>요청서에서 개발 전달까지 PM 혼자 끝내는 흐름</figcaption></figure><h3>AI를 제약된 시스템으로 설계</h3><ul><li>AI가 자유롭게 HTML을 쓰지 않고 <strong>정해진 JSON 스키마만</strong> 출력하게 했습니다. 디자인 규격을 강제할 수 있고, 같은 입력에서 결과가 흔들리는 것도 줄었습니다.</li><li>시스템 프롬프트와 참고 화면은 프롬프트 캐싱으로 재사용하고, 사용자별 일일 한도와 호출별 비용 로그를 둡니다. 화면당 비용은 약 350~650원으로 추정했습니다.</li><li>실제 고객 정보는 쓰지 않고 샘플 데이터를 자동으로 채웁니다.</li></ul><p class="caption">React 19 · TypeScript · Vite · Supabase · Vercel · Anthropic SDK</p>` },
      { h: '화면', body: '<figure class="figure"><div class="frame frame--img"><img src="/assets/img/work/admin-generator.webp" alt="어드민 화면 제너레이터의 화면 목록: 여신·수신·마케팅 영역의 생성된 화면 12개" loading="lazy" width="1600" height="682"></div><figcaption>생성한 화면 목록. 영역·패턴별로 모아 보고, 열기·복제로 바로 이어서 작업합니다</figcaption></figure>' },
      { h: '목표 지표', body: results([['30분 이내', '새 화면 하나 (현재 30분~3시간)', '목표'], ['10개 이상', '1시간에 만드는 화면 컨셉', '목표'], ['0건', '개발자가 되묻는 항목', '목표']]) + '<p class="caption">파일럿 전이라 모두 목표치입니다. 결과가 나오면 업데이트합니다.</p>' },
      { h: '배운 점', body: '<p>AI에게 자유를 줄수록 결과를 믿기 어려웠습니다. 출력 형식을 스키마로 묶고 검증과 재시도를 붙이자, 현업에 넘길 수 있는 수준으로 결과가 안정됐습니다.</p>' },
    ],
    prev: T.kg,
  }),
};

export default [list, sb, kg, ad];

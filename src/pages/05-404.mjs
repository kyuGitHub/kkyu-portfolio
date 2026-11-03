import { icon } from '../../scripts/lib.mjs';

export default {
  path: '404.html', nav: '', noindex: true,
  title: '페이지를 찾을 수 없습니다 · KKYU',
  description: '요청한 페이지를 찾을 수 없습니다.',
  body: `
<section class="hero">
  <div class="container">
    <span class="eyebrow">404</span>
    <h1 class="display2">페이지를 찾을 수 없습니다</h1>
    <p class="lead">주소가 바뀌었거나 없는 페이지입니다. 예전 포트폴리오 링크로 오셨다면 아래에서 새 페이지로 이동해 주세요.</p>
    <div class="btn-row">
      <a class="btn" href="/">홈으로 ${icon.arrow}</a>
      <a class="btn btn--secondary" href="/work.html">Work 보기</a>
    </div>
  </div>
</section>
`,
};

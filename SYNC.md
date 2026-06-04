# 동기화 워크플로우

## 단일 진리원 (Single Source of Truth)

**GitHub `kyuGitHub/kkyu-portfolio` 의 `main` 브랜치가 진리.**

다른 PC에서 작업하든, 어떤 도구를 쓰든 — 운영에 반영되려면 *반드시* GitHub main으로 들어와야 한다.

---

## 새 PC / 새 세션에서 작업 시작할 때

```bash
# 1) 최신 받기
git pull origin main

# 2) 작업

# 3) 커밋
git add -A
git commit -m "..."

# 4) GitHub로 푸시 (이게 진리원 갱신)
git push origin main

# 5) Vercel 배포 — 아래 둘 중 하나
```

## Vercel 배포 — 두 가지 모드

### 모드 A: 자동 (권장, *셋업 필요*)

Vercel ↔ GitHub Integration이 연결돼 있으면 → `git push` 한 방으로 자동 배포된다.

**셋업 방법 (한 번만):**

1. https://vercel.com/dashboard/integrations 에서 GitHub 앱 설치
2. 프로젝트 `kkyu-portfolio` Settings → Git → "Connect Git Repository" → `kyuGitHub/kkyu-portfolio` 선택
3. 또는 셋업 후 CLI로: `vercel git connect https://github.com/kyuGitHub/kkyu-portfolio.git`

### 모드 B: 수동 (현재 상태)

GitHub Integration 없으면 push 후 직접 배포:

```bash
vercel --prod --yes
```

⚠️ **수동 모드의 함정:** push했는데 vercel 배포를 까먹으면 *GitHub과 Vercel이 어긋남*. 다른 PC에서 같은 일 반복하면 *분기 사고* 발생 (이 repo가 한 번 겪은 적 있음 — `kkyu-portfolio` vs `kkyu-portfolio-repo` 중복 프로젝트 생긴 원인).

---

## 시작 전 체크리스트

```bash
git fetch origin
git status                          # working tree clean?
git log --oneline origin/main..HEAD # 푸시 안 한 거 있나?
git log --oneline HEAD..origin/main # pull 안 한 거 있나?
```

세 줄 다 깨끗하면 동기화 OK. 어긋남 있으면 *작업 시작 전에* 정리.

---

## Vercel 프로젝트 ID

| 프로젝트 | ID | 용도 |
|---|---|---|
| `kkyu-portfolio` | `prj_GVzFtUBxr33i75gi1HJ2xQndyg8W` | **운영 (이 폴더)** |
| `kkyu-portfolio-repo` | `prj_OmqrHXCaDbiAphPqcI0tDZVc91tu` | 중복 — 삭제 예정 |
| `kkyu-ds` | (별개) | Design System (별도 repo) |

`.vercel/project.json`이 `kkyu-portfolio`를 가리키는지 확인하고 작업할 것.

---

## 응급 복구 — 다른 환경이 더 최신이라면

운영 vercel이 로컬보다 최신일 때 (이번 케이스):

```bash
# vercel 프로덕션에서 파일 받기
BASE="https://kkyu-portfolio.vercel.app"
for f in index.html about.html portfolio.html agent-ai.html; do
  curl -s "$BASE/$f" -o "$f"
done
for f in assets/shared.css assets/tokens.css assets/shared.js; do
  curl -s "$BASE/$f" -o "$f"
done
```

단, GitHub main이 vercel보다 최신이면 `git pull origin main`이 정답.

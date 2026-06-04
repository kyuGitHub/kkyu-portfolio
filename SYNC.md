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

## Vercel 배포 — 자동 모드

Vercel ↔ GitHub Integration *연결 완료* (2026-06-04). `git push origin main` 한 방으로 운영에 자동 반영된다.

- Vercel 프로젝트: `kkyu-portfolio` (`prj_GVzFtUBxr33i75gi1HJ2xQndyg8W`)
- 연결된 repo: `kyuGitHub/kkyu-portfolio` (branch: `main`)
- 검증: 빈 커밋 push → 18초 만에 신규 deployment 생성 확인

**비상시 수동 배포:** `vercel --prod` (CLI 직접 트리거)

⚠️ **수동 배포 함정:** auto-deploy 있으니 수동 배포는 *피해라*. CLI로 직접 배포한 게 GitHub에 없는 변경분이면 다음 push에서 vercel이 덮어쓰며 *분기 사고*. 과거 이 repo에서 발생함 — 중복 프로젝트 `kkyu-portfolio-repo`가 그 흔적 (2026-06-04 삭제 완료).

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

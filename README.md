# Picture to Pick

> 🧰 간단한 사진 이름 편집 도구

## 기술 스택

- NextJS
- Tailwindcss
- Vercel
- Storybook

## 디렉토리 구조

```
ㄴ app
  ㄴ lib
    ㄴ hooks - 커스텀 훅
    ㄴ store - 전역 상태 및 변경 함수
    ㄴ types - 커스텀 타입
    ㄴ utils - 편의 기능
  ㄴ ui
    ㄴ common - 여러 페이지에 걸쳐 사용되는 컴포넌트
    ㄴ components - 기본 컴포넌트
    ㄴ [page] - 페이지 별로 사용되는 컴포넌트
```

- `ui/common`, `ui/components`의 컴포넌트들은 각 index.tsx로 접근
- 페이지 별 컴포넌트의 명명은 `[page]/[component].tsx`로 하되, 사용 시 `[Page][Component]`로 사용

## 기능 소개

- 사진 업로드

- 사진 미리보기

- 사진 이름 편집

- 사진 다운로드

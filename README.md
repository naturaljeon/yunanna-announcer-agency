# 로컬 실행

1. 의존성 설치: `npm install`
2. 개발 서버 실행: `npm run dev`
3. 프로덕션 빌드: `npm run build`
4. 프리뷰: `npm run preview`

## 콘텐츠 관리 방법

정적 폴더만 교체해서 대표자 사진과 Our MCs 멤버를 관리할 수 있습니다.

### 대표자 사진
- 폴더: `content/representative/`
- 첫 번째로 발견된 이미지 파일을 사용합니다.
- 지원 확장자: `png, jpg, jpeg, webp, avif, gif`

예시
```
content/representative/photo.jpg
```

### Our MCs 멤버
- 폴더: `content/mcs/<slug>/`
- `meta.json`과 `photo.*`를 두면 자동 반영됩니다. `photo.*`가 없으면 폴더 내 첫 이미지가 사용됩니다.
- 지원 확장자: `png, jpg, jpeg, webp, avif, gif`

`meta.json` 예시
```json
{
  "id": 1,
  "name": "홍길동",
  "title": "프리랜서 MC",
  "description": "기업/공공 행사 전문 MC",
  "career": ["KTV 앵커", "국제 포럼 진행"]
}
```

폴더 예시
```
content/mcs/hong-gildong/meta.json
content/mcs/hong-gildong/photo.jpg
```

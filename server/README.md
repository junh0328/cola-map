### 💻 서버 실행 방법

config 폴더 내 dev.env 파일 생성 후  
아래와 같이 작성

```
PORT=yourPort
MONGODB_URL=yourMongoUrl
JWT_SECRET=yourJWTSecretKey
```

✔ MONGODB_URL의 경우 슬랙 채널 고정메시지 참고

server 폴더 내에서 실행  
`npm install` - 필요 모듈 설치  
`npm run dev` - 서버 실행

</br>

### 📄 API

- #### GET
  - /cola - 전체 제보(가게) 목록 조회
  - /cola/:id - id 값에 해당하는 제보(가게) 조회
- #### POST
  - /cola - 제보(가게) 생성
- #### DELETE
  - /cola/:id - id 값에 해당하는 제보(가게) 삭제

</br>

### 📄 변수명

- storeName: 가게이름(String)
- latitude: 위도(Number)
- longitude: 경도(Number)
- category: 콜라/펩시(String)

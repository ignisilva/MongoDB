# MongoDB & express

# 백엔드 

- 관리 & 인증에 초점

# mongodb

- connect 설정
  - IP open 관련
    - 운영중엔 백엔드 IP / 회사 IP 정도만 열어주면 됨
  - 연결 방법 설정
    - [ ] shell (터미널)
    - [ ] application 
    - [x] Compass (클라이언트 프로그램)

# mongodb 스키마

- 스키마가 정해져있지 않음 (schemaless)

- 비정형 데이터 저장에 강함

- 객체를 저장하므로, 형식에서 자유로움


# mongodb CRUD 명령어

- 콘솔 사용시, _id를 사용하고 싶다면,
  - > let OnjectID = require('mongodb').ObjectID
  - 이후 사용
  - db.COLLECTION_NAME.findOne({ _id: ObjectID("...") })

- use COLLECTION_NAME
  - 새로운 document 생성

- db.COLLECTION_NAME.insertOne({...})
  - COLLECTION_NAME에 데이터 삽입

- db.COLLECTION_NAME.find()
  - COLLECTION_NAME 내부 데이터 전부 조회

- db.COLLECTION_NAME.findOne({name:"test})
  - COLLECTION_NAME 내부 데이터 하나 조회
  - depth가 깊을 경우, findOne({"name.first":"test"})

- db.COLLECTION_NAME.updateOne({name: "test"}, {$set:{ age:30 }})
  - 첫번째 object는 변경할 데이터 선택(찾기)
  - 두번째 object는 데이터 변경
  - $set 이외에 $inc도 있음
    - set: 해당 값으로 수정
    - inc: 해당 값을 기존 값에 더함

- db.COLLECTION_NAME.deleteOne({...})
  - 삭제

# mongodb vs RDBMS 구조

- == 는 유사하다의 의미로 사용되었음

- mongodb vs RDBMS
  - database === database
  - collection == table
  - document == row

# middleware 순서

- CORS
- JSON.parse
- authenticate
- logging
- router1
- router2

# 비동기 (Asynchronous) 프로그래밍

- Event Driven

- Non-Blocking I/O

# Async Await를 활용한 동기, 비동기 전환 기법

- 전부 동기로 작동
```
async createPost = () => {
  await User.findOne({...})   // |findOne|
  await Blog.insertOne({...}) //          |insertOne|
  await User.updateOne({...}) //                    |updateOne|
  await LogApi({...})         //                              |LogApi|
  return "ok"
}
```

- 일기 동기로 작동, 일부 비동기 작동
```
async createPost = () => {
  await User.findOne({...}) // |findOne|
  await Promise.all([
    Blog.insertOne({...})   //          |insertOne|
    User.updateOne({...})   //           |updateOne|
  ])
  await LogApi({...})       //                     |LogApi|
}
```
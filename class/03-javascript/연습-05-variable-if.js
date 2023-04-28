// 데이터 타입, 연산자 실습

1 + 1;
// 2
1 + "만원";
// '1만원'
1 + "1";
// '11'
1 - "1";
// 0
"검은" + "고양이";
// '검은고양이'
"123" == 123;
// true
"123" === 123;
// false
true && true;
// true
true && false;
// false
false || true;
// true
!false;
// true
!true;
// false

// 조건문 1
if (1 + 1 === 2) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1375:2 정답입니다
undefined;
if (true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1700:2 정답입니다
// undefined
if (!true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1722:4 틀렸습니다
// undefined
if (0) {
  // 거짓같은 값에 속하기에 false. if는 true여야 실행되기에 else문이 실행됨.
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
// VM1766:4 틀렸습니다
// undefined

// 조건문 실습 2

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};
// undefined
if (profile.age >= 20) {
  console.log("성인입니다");
} else if (profile.age >= 8) {
  console.log("학생입니다");
} else if (profile.age > 0) {
  console.log("어린이입니다");
} else {
  // 이부분은 에러헨들링. 유저들이 잘못 입력할 시를 방지.
  console.log("잘못입력하신것 같네요");
}
// VM2739:4 학생입니다
// undefined

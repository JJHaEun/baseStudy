const chiledren = ["철수", "유리", "짱구"];
// undefined

for (let i = 0; i < chiledren.length; i++) {
  console.log(`${chiledren[i]} 입니다`);
}
// VM766:2 철수 입니다
// VM766:2 유리 입니다
// VM766:2 짱구 입니다
// undefined
for (let i = 0; i < 3; i++) {
  console.log(`${chiledren[i]} 입니다`);
}
// VM840:2 철수 입니다
// VM840:2 유리 입니다
// VM840:2 짱구 입니다
// undefined

let persons = [
  { name: "철수", age: 12 },
  { name: "유리", age: 16 },
  { name: "도우너", age: 5 },
  { name: "도우너", age: 5 },
  { name: "도비", age: 3 },
];
// undefined

for (let count = 0; count < persons.length; count++) {
  if (persons[count]["age"] >= 20) {
    console.log(`${persons[count]["name"]}님은 성인입니다`);
  } else if (persons[count]["age"] > 8) {
    console.log(`${persons[count]["name"]}님은 청소년입니다`);
  } else if (persons[count]["age"] <= 8) {
    console.log(`${persons[count]["name"]}님은 어린이입니다`);
  }
}
// for (let count = 0; count < persons.length; count++) {
//   if (persons[count].age >= 20) {
//     console.log(`${persons[count].name}님은 성인입니다`);
//   } else if (persons[count].age > 8) {
//     console.log(`${persons[count].name}님은 청소년입니다`);
//   } else if (persons[count].age <= 8) {
//     console.log(`${persons[count].name}님은 어린이입니다`);
//   }
// }
// VM2560:5 철수님은 청소년입니다
// VM2560:5 유리님은 청소년입니다
// VM2560:7 도우너님은 어린이입니다
// VM2560:7 도우너님은 어린이입니다
// VM2560:7 도비님은 어린이입니다
// undefined

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
//   undefined
for (let fr = 0; fr < fruits.length; fr++) {
  console.log(`${fruits[fr]["number"]} ${fruits[fr]["title"]}`);
  //   console.log(fruits[fr]["number"] + " " + fruits[fr]["title"]);
  // 변수 + " " + 변수
}
//   VM3110:2 1 레드향
//   VM3110:2 2 샤인머스켓
//   VM3110:2 3 산청딸기
//   VM3110:2 4 한라봉
//   VM3110:2 5 사과
//   VM3110:2 6 애플망고
//   VM3110:2 7 딸기
//   VM3110:2 8 천혜향
//   VM3110:2 9 과일선물세트
//   VM3110:2 10 귤

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
// undefined
// for(let i = 0 ; i< fruits.length;i++){
//     console.log(fruits[i]["number"] fruits[i]["title"])
// // VM10078:2 Uncaught SyntaxError: missing ) after argument list
// for(let i = 0 ; i< fruits.length;i++){
//     console.log(fruits[i]["number"] fruits[i]["title"])
// }
// VM10097:2 Uncaught SyntaxError: missing ) after argument list
// for(let i = 0 ; i< fruits.length;i++){
//     console.log(fruits[i]["number"] "," fruits[i]["title"])
// }
// VM10206:2 Uncaught SyntaxError: missing ) after argument list
// for(let i = 0 ; i< fruits.length;i++){
//     let number = fruits[i]["number"]
//     let title = fruits[i]["title"]
//     console.log(number," "title)
// }
// VM10725:4 Uncaught SyntaxError: missing ) after argument list
// for(let i = 0 ; i< fruits.length;i++){
//     let number = fruits[i]["number"]
//     let title = fruits[i]["title"]
//     console.log(number title)
// }
// VM10786:4 Uncaught SyntaxError: missing ) after argument list
for (let i = 0; i < fruits.length; i++) {
  let number = fruits[i]["number"];
  let title = fruits[i]["title"];
  console.log(number);
}
// VM10825:4 1
// VM10825:4 2
// VM10825:4 3
// VM10825:4 4
// VM10825:4 5
// VM10825:4 6
// VM10825:4 7
// VM10825:4 8
// VM10825:4 9
// VM10825:4 10
// undefined
for (let i = 0; i < fruits.length; i++) {
  let number = fruits[i]["number"];
  let title = fruits[i]["title"];
  console.log(`${number} ${title}`);
}
// VM11002:4 1 레드향
// VM11002:4 2 샤인머스켓
// VM11002:4 3 산청딸기
// VM11002:4 4 한라봉
// VM11002:4 5 사과
// VM11002:4 6 애플망고
// VM11002:4 7 딸기
// VM11002:4 8 천혜향
// VM11002:4 9 과일선물세트
// VM11002:4 10 귤
// undefined

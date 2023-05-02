// 타이머 만들기 10초 카운트 다운
let time = 10;
// undefined
setInterval(() => {
  if (time >= 0) {
    console.log(time);
    time = time - 1;
  }
}, 1000);
2;
// VM2683:3 10
// VM2683:3 9
// VM2683:3 8
// VM2683:3 7
// VM2683:3 6
// VM2683:3 5
// VM2683:3 4
// VM2683:3 3
// VM2683:3 2
// VM2683:3 1
// VM2683:3 0

// 3분 타이머 만들기!!
let timer = 180;
// undefined
setInterval(() => {
  if (time >= 0) {
    const min = Math.floor(timer / 60);
    const sec = String(timer % 60).padStart(2, "0");
    console.log(`${min}:${sec}`);
    timer = timer - 1;
  }
}, 1000);
// 2:59
// VM4642:5 2:58
// VM4642:5 2:57
// VM4642:5 2:56
// VM4642:5 2:55
// VM4642:5 2:54

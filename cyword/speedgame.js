let startTime;
let endTime;
const records = [];
let timeoutId;
const startGame = () => {
  const screen = document.getElementById("screen");
  const result = document.getElementById("result");

  if (screen.classList.contains("wait")) {
    // 대기
    // screen.classList.remove("wait");
    // screen.class.add("ready");
    screen.classList.replace("wait", "ready");
    screen.textContent = "녹색이 되면 클릭하세요";
    timeoutId = setTimeout(() => {
      startTime = new Date();
      screen.classList.replace("ready", "now");
      screen.textContent = "지금이에요!!";
    }, Math.floor(Math.random() * 1000) + 2000); // 3자리의 아무수에 + 2000 = 2000 ~ 3000 사이의 수
  } else if (screen.classList.contains("ready")) {
    // 준비
    screen.textContent = "너무 성급하세요!!";
  } else if (screen.classList.contains("now")) {
    // 시작
    endTime = new Date();
    // result.textContent = `현재: ${endTime - startTime}ms`;
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((acc, cur) => acc + cur) / records.length; // acc에 계속해서 현재값 cur을 더해감
    const most_Fast = records.sort((a, b) => (a > b ? 1 : -1))[0];
    console.log(most_Fast);
    result.textContent = `현재: ${current}ms 평균${average}ms 최고: ${most_Fast}`;
    // 반복해서 측정해야함. 따라서 측정이 끝날때마자 startTime과 endTime을 null로 비워줌
    startTime = null;
    endTime = null;

    screen.classList.replace("now", "wait");

    screen.innerText = "클릭해서 시작하세요!!";
    // innerText 와 textContent동일
  }
};

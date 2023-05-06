const startGame = () => {
  const screen = document.getElementById("screen");
  const result = document.getElementById("result");

  if (screen.classList.contains("wait")) {
    // 대기
    // screen.classList.remove("wait");
    // screen.class.add("ready");
    screen.classList.replace("wait", "ready");
    screen.textContent = "녹색이 되면 클릭하세요";
    setTimeout(() => {
      screen.classList.replace("ready", "now");
      screen.textContent = "지금이에요!!";
    }, Math.floor(Math.random() * 1000) + 2000); // 3자리의 아무수에 + 2000 = 2000 ~ 3000 사이의 수
  } else if (screen.classList.contains("ready")) {
    // 준비
  } else if (screen.classList.contains("now")) {
    // 시작
  }
};

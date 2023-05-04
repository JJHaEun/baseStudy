// 타이머가 작동중인자 아닌자 별도로 저장하기.

let isStarted = false;

const sendRandomNumber = () => {
  if (isStarted === false) {
    // 타이머가 작동중이 아닐때
    isStarted === true; // 작동되게 true로 변경해줌
    document.getElementById("confirm").disabled = false;
    // 다시 처음에는 활성화시킴
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    const random = document.getElementById("random");
    random.innerText = token;
    random.style.color = "#" + token;
    //  random.style.color =  "#"+(parseInt(Math.random()*0xffffff)).toString(16);
    // 헥스코드는 6자리. #이 붙은 형태이니 위에서 6자리를 만든 token에 #만 붙여주면 됨. 그럼 token이라는 숫자사체가 헥스코드가 됨.

    const timer = document.getElementById("timer");
    let time = 180;

    let timerIn;
    timerIn = setInterval(() => {
      // 변수에 setInterval이 할당이 될때 실행이되고,
      if (time >= 0) {
        const min = Math.floor(time / 60);
        const sec = String(time % 60).padStart(2, "0");

        timer.innerText = `${min}:${sec}`;
        time = time - 1;
      } else {
        document.getElementById("confirm").disabled = true;
        isStarted = false; // 타이머 작동 끝
        clearInterval(timerIn); // 변수에 있는 setInterval함수를 삭제. // 후에 재시작도 가능.
      }
    }, 1000);
  } else {
  }
  // 타이머 작동중일때
};

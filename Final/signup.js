const checkValidation = () => {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password1 = document.getElementById("password").value;
  let password2 = document.getElementById("passwordchek").value;

  if (email && name && password1 && password2 && password1 === password2) {
    // value를 이용해 값을 가져오면 그건 전부 string!!
    // 모든 input이 비어있지 않을때
    document.getElementById("signup_button").disabled = false;
    document.getElementById("signup_button").style =
      "color: #0068FF; background:white; border: 1px solid #0068FF;border-radius: 10px;";
  } else {
    document.getElementById("signup_button").disabled = true;
  }
};

const changeFocus = function () {
  let phone1 = document.getElementById("phone1").value;
  if (phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
};
const changeFocus2 = function () {
  let phone2 = document.getElementById("phone2").value;

  if (phone2.length === 4) {
    document.getElementById("phone3").focus();
  }
};

const chageDisables = () => {
  let phone1 = document.getElementById("phone1").value;
  let phone2 = document.getElementById("phone2").value;
  let phone3 = document.getElementById("phone3").value;
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    document.getElementById("send_number").disabled = false;
    // document.getElementById("stoptimer").disabled = false;
    // document.getElementById("stoptimer").style =
    //   "background: #0068ff;border-radius: 7px;color: #ffffff;";
  } else {
    document.getElementById("send_number").disabled = true;
    // document.getElementById("stoptimer").disabled = true;
  }
};

// 타이머가 작동중인자 아닌자 별도로 저장하기.

let isStarted = false;
let timerIn;
const sendRandomNumber = () => {
  if (isStarted === false) {
    // 타이머가 작동중이 아닐때
    isStarted === true; // 작동되게 true로 변경해줌
    document.getElementById("stoptimer").disabled = false;
    // 다시 처음에는 활성화시킴
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    const random = document.getElementById("random_number");
    random.innerText = token;
    //  random.style.color =  "#"+(parseInt(Math.random()*0xffffff)).toString(16);
    // 헥스코드는 6자리. #이 붙은 형태이니 위에서 6자리를 만든 token에 #만 붙여주면 됨. 그럼 token이라는 숫자사체가 헥스코드가 됨.

    const timer = document.getElementById("timer");
    let time = 180;

    timerIn = setInterval(() => {
      // 변수에 setInterval이 할당이 될때 실행이되고,
      if (time >= 0) {
        const min = Math.floor(time / 60);
        const sec = String(time % 60).padStart(2, "0");

        timer.innerText = `${min}:${sec}`;
        time = time - 1;
      } else {
        document.getElementById("stoptimer").disabled = true;
        isStarted = false; // 타이머 작동 끝
        clearInterval(timerIn); // 변수에 있는 setInterval함수를 삭제. // 후에 재시작도 가능.
      }
    }, 1000);
  } else {
  }
  // 타이머 작동중일때
};

const checkOk = () => {
  isStarted = false;
  document.getElementById("stoptimer").disabled = true;
  clearInterval(timerIn);
};

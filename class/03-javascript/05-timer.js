const sendRandomNumber = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  const random = document.getElementById("random");
  random.innerText = token;
  random.style.color = "#" + token;
  //  random.style.color =  "#"+(parseInt(Math.random()*0xffffff)).toString(16);
  // 헥스코드는 6자리. #이 붙은 형태이니 위에서 6자리를 만든 token에 #만 붙여주면 됨. 그럼 token이라는 숫자사체가 헥스코드가 됨.

  const timer = document.getElementById("timer");
  let time = 180;
  setInterval(() => {
    if (time >= 0) {
      const min = Math.floor(time / 60);
      const sec = String(time % 60).padStart(2, "0");

      timer.innerText = `${min}:${sec}`;
      time = time - 1;
    } else {
      document.getElementById("confirm").disabled = true;
    }
  }, 1000);
};

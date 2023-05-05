const menuHome = () => {
  //  iframe의 src를 바꿔줘야함. => 속성을 바꾸는 것. 따라서 setAttribute를 사용. 첫번쩨 배개변수는 지정할 속성, 두번째는 값
  document.getElementById("contents_frame").setAttribute("src", "home.html");
  document.getElementById("home").style = "color:black; background:white;"; // 인라인 스타일 주는 방법.
  document.getElementById("game").style = "color:white; background:#298eb5;";
  document.getElementById("speed").style = "color:white; background:#298eb5;";
};

const menuGame = () => {
  document.getElementById("contents_frame").setAttribute("src", "game.html");
  document.getElementById("game").style = "color:black; background:white;";
  document.getElementById("home").style = "color:white; background:#298eb5;"; // 인라인 스타일 주는 방법.
  document.getElementById("speed").style = "color:white; background:#298eb5;";
};

const menuSpeedGame = () => {
  document
    .getElementById("contents_frame")
    .setAttribute("src", "speedgame.html");
  document.getElementById("speed").style = "color:black; background:white;";
  document.getElementById("home").style = "color:white; background:#298eb5;";
  document.getElementById("game").style = "color:white; background:#298eb5;";
};

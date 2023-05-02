const send = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  const random = document.getElementById("random");
  random.innerText = token;
  random.style.color = "#" + token;
  //  random.style.color =  "#"+(parseInt(Math.random()*0xffffff)).toString(16);
  // 헥스코드는 6자리. #이 붙은 형태이니 위에서 6자리를 만든 token에 #만 붙여주면 됨. 그럼 token이라는 숫자사체가 헥스코드가 됨.
};

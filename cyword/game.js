const startWord = () => {
  let word_input = document.getElementById("word_input").value;
  let word = document.getElementById("word").innerText;
  let lastWord = word[word.length - 1]; // 제시어의 마지막 글자와
  // 입력한 첫글자를 비교
  if (lastWord === word_input[0]) {
    document.getElementById("result").innerText = "성공!!";
    document.getElementById("word").innerText = word_input;
    // 위에서 변수에 담아준 word가 사용이 안됨...
    document.getElementById("word_input").value = "";
    document.getElementById("word_input").focus();

    // 입력후 입력창 비우기
  } else {
    document.getElementById("result").innerText = "제시어를 확인해 주세요";
    document.getElementById("word_input").value = "";
    document.getElementById("word_input").focus();
    // 입력후 입력창 비우기
  }
};
const onClickLotto = () => {
  const candidate = Array(45)
    .fill()
    .map((el, i) => i + 1);
  const shuffle = [];
  for (let i = candidate.length; i > 0; i--) {
    const random = Math.floor(Math.random() * candidate.length); //45까지 중 랜덤숫자뽑기
    const spliceArr = candidate.splice(random, 1);
    const val = spliceArr[0];
    shuffle.push(val);
  }
  const winNumber = shuffle.slice(0, 6); // 두번째 인자는 하나 적게 작동. 즉, 6번째 인덱스 전까지 자름.
  const bonus = shuffle[6];
  const number = document.getElementById("number");
  const bonusBall = document.getElementById("bonus");

  for (let i = 0; i < winNumber.length; i++) {
    const ball = document.createElement("span");
    ball.className = "ball";
    ball.textContent = winNumber[i];
    number.appendChild(ball);
  }
  const bonusNumber = document.createElement("span");
  bonusNumber.className = "ball";
  bonusNumber.textContent = bonus;
  bonusBall.appendChild(bonusNumber);

  document.getElementById("lotto_picker").disabled = true;
};

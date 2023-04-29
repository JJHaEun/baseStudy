const greeting = () => {
  if (document.getElementById("target").innerText === "Hello") {
    document.getElementById("target").innerText = "Word"; // target이라는 id를 가진코드 텍스트를 Word로 재할당
    document.getElementById("input").value = "Word"; // target이라는 id를 가진코드 텍스트를 Word로 재할당
  } else {
    document.getElementById("target").innerText = "Hello"; // target이라는 id를 가진코드 텍스트를 Word로 재할당
  }
};
// innerText는 시작태그와 종료태그 사이의 내용을 바꿔주는것.
// input태그의 경우 종료태그 없이 하나로 쓰이기에 사이 내용이 들어갈 수 없음. 이때는 value를 사용
// document.getElementById("target").value = "Hello";

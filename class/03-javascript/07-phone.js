// 첫번쩨 input에 정해진  글자 수를 채우면 다음 input으로 포커스 옯김.
// 두번째 input도 정해진 글자 수를 채우면 다음 input으로 포커스 옮기기
const changeFocus = function () {
  let phone1 = document.getElementById("p1").value;
  if (phone1.length === 3) {
    document.getElementById("p2").focus();
  }
};
const changeFocus2 = () => {
  let phone2 = document.getElementById("p2").value;

  if (phone2.length === 4) {
    document.getElementById("p3").focus();
  }
};

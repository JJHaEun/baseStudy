const checkValidation = () => {
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  if (email && password1 && password2 && password1 === password2) {
    // value를 이용해 값을 가져오면 그건 전부 string!!
    // 모든 input이 비어있지 않을때
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
};
const changeFocus = () => {
  let phone1 = document.getElementById("phone1").value;
  if (phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
};
const changeFocus2 = () => {
  let phone2 = document.getElementById("phone2").value;

  if (phone2.length === 4) {
    document.getElementById("phone3").focus();
  }
};

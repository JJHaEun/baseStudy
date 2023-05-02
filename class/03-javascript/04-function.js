const send = () => {
  document.getElementById("random").innerText = String(
    Math.floor(Math.random() * 1000000)
  ).padStart(6, "0");
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const getBody = document.querySelector("body");
//console.log(getBody);
const getButton = document.querySelector("button");
const getSpan = document.querySelector(".color");
function clickhendler() {
  let newRandomColor = getRandomHexColor()
  getBody.style.backgroundColor = newRandomColor;
  getSpan.textContent = newRandomColor;
}


getButton.addEventListener("click", clickhendler);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const getInput = document.querySelector("input");
const getDiv = document.querySelector("div#boxes");

let createdBoxes = []; 
let boxSize = 30;

function createBoxes(amount) {
  if (amount <= 100 && amount >= 1) {
    for (let i = 0; i < amount; i++) {
      const elementDiv = document.createElement("div");
      elementDiv.style.width = `${boxSize}px`;
      elementDiv.style.height = `${boxSize}px`;
      boxSize += 10;
      getDiv.appendChild(elementDiv);
      const randomColor = getRandomHexColor();
      elementDiv.style.backgroundColor = randomColor;
      createdBoxes.push(elementDiv);
    }
    getInput.value = '';
  }
}

function destroyBoxes() {
  createdBoxes.forEach(box => box.remove());
  createdBoxes = [];
}

buttonCreate.addEventListener('click', () => {
  const amount = parseInt(getInput.value, 10);
  createBoxes(amount);
});
buttonDestroy.addEventListener('click', destroyBoxes);
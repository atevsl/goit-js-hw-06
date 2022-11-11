function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxesEl = document.querySelector('#boxes');
const amountEl = document.querySelector('#controls>[type="number"]');
const btnCreateEl = document.querySelector('#controls>[data-create]');
const btnDestroyEl = document.querySelector('#controls>[data-destroy]');

btnCreateEl.addEventListener('click', () => {
  const amount = amountEl.value;
  createBoxes(amount);
});

btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 20;
  const markUp = [];
  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement('div');
    size += 10;
    newEl.style.width = `${size}px`;
    newEl.style.height = `${size}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    markUp.push(newEl);
  }
  divBoxesEl.append(...markUp);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
  amountEl.value = '';
}

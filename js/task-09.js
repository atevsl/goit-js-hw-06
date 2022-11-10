function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const changeColorTextEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  changeColorTextEl.textContent = currentColor;
});

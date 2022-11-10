const fontSixeControlEl = document.querySelector('#font-size-control');
const magicTextEl = document.querySelector('#text');

fontSixeControlEl.addEventListener('input', () => {
  magicTextEl.style.fontSize = `${fontSixeControlEl.value}px`;
});

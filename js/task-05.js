const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  if (inputName.value === '') {
    spanName.textContent = 'Anonymous';
  } else spanName.textContent = inputName.value;
});

let counterValue = 0;

const buttonDecEll = document.querySelector('button[data-action="decrement"]');

const buttonIncEll = document.querySelector('button[data-action="increment"]');

const counterEll = document.querySelector('#value');

console.log(buttonDecEll);
console.log(buttonIncEll);
console.log(counterEll);

buttonDecEll.addEventListener('click', () => {
  counterValue -= 1;
  counterEll.textContent = counterValue;
});
buttonIncEll.addEventListener('click', () => {
  counterValue += 1;
  counterEll.textContent = counterValue;
});

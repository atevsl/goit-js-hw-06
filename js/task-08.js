const loginFormEl = document.querySelector('.login-form');
const emailEl = document.querySelector('[name="email"]');
const passwordEl = document.querySelector('[name="password"]');

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();

  if (!emailEl.value || !passwordEl.value) {
    return alert('Все поля должны быть заполнены!');
  }

  const {
    elements: { email, password },
  } = event.currentTarget;

  console.log(`email: ${email.value}, password: ${password.value}`);

  event.currentTarget.reset();
});

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsItemMarkup = [];

ingredients.forEach(ingredient => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemMarkup.push(ingredientsItemEl);
});

ingredientsEl.append(...ingredientsItemMarkup);

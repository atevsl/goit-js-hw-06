const numberOfCategories = document.querySelectorAll('#categories .item');
console.log('Number of categories: ', numberOfCategories.length);

for (let i = 0; i < numberOfCategories.length; i += 1) {
  console.log('Category: ', numberOfCategories[i].firstElementChild.textContent);
  console.log('Elements: ', numberOfCategories[i].lastElementChild.childElementCount);
}

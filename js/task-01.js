const numberOfCategories = document.querySelectorAll('#categories .item');
console.log('Number of categories: ', numberOfCategories.length);

for (let i = 0; i < numberOfCategories.length; i += 1) {
  console.log('Category: ', numberOfCategories[i].children[0].textContent);
  console.log('Elements: ', numberOfCategories[i].children[1].childElementCount);
}

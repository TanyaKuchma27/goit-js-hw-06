const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const itemRef = document.createElement("li");
  itemRef.classList.add('item');
  itemRef.textContent = ingredient;

  listRef.append(itemRef);
}






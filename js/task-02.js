const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elementsContainerEL = document.querySelector('#ingredients');
const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
const liEl = document.createElement('li');
liEl.textContent=`${ingredients[i]}`

elements.push(liEl)
};
elementsContainerEL.append(...elements)


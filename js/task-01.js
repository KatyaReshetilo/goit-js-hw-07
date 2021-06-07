const categoriesEl = document.querySelectorAll('li.item');

const numberOfCategories = () => { return console.log(`В списке ${categoriesEl.length} категории.`); };
numberOfCategories();

const message = categoriesEl.forEach(
    category => {
        const nameOfCategory = category.firstElementChild.textContent;
        const numberOfElements = category.querySelectorAll('ul>li').length;
       console.log(`Категория: ${nameOfCategory}
Количество элементов: ${numberOfElements}`);
    }
);






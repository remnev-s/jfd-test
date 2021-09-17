// КОНТЕЙНЕР ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
const templateList = document.querySelector('.elements__list');
const templateElement = document.querySelector('.template').content; //клон разметки

/* --------------ADD CARDS PAGE----------------------------- */
const initialCards = [
  {
    name: 'Наименование товара',
    image: './img/product-img.jpg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '10000 руб',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img.jpg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '10000 руб',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img.jpg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '10000 руб',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img.jpg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '10000 руб',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img.jpg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '10000 руб',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img.jpg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '10000 руб',
  },
];

/* ---------------------------------------------------------------------------- */

function createCard(item) {
  const listElement = templateElement
    .querySelector('.elements__list-item')
    .cloneNode(true);

  const elementsPhoto = listElement.querySelector('.elements__list-photo');
  const elementsTitle = listElement.querySelector('.elements__title');
  const elementsDescription = listElement.querySelector(
    '.elements__description'
  );
  const elementsPrice = listElement.querySelector('.elements__price');

  // добавляем данные из аргумента
  elementsPhoto.src = item.image;
  elementsTitle.textContent = item.name;
  elementsDescription.textContent = item.about;
  elementsPrice.textContent = item.price;

  return listElement; //вернул готовую карточку через return
}

// функция добавления карточку на страницу
function addCard(item, container) {
  const newCard = createCard(item);
  container.prepend(newCard);
}

// Карточки из коробки
initialCards.forEach(function (item) {
  addCard(item, templateList);
});

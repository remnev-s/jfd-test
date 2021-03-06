// КОНТЕЙНЕР ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
const templateList = document.querySelector('.elements__list');
const templateElement = document.querySelector('.template').content; //клон разметки

const nameProductInput = document.querySelector('.form-product__item-name'); // переменная наименования товара
const descriptionProductInput = document.querySelector(
  '.form-product__item-description'
); // переменная описание товара
const linkImageInput = document.querySelector('.form-product__item-link'); // переменная ссылки картинки
const priceInput = document.querySelector('.form-product__item-price'); // переменная цена товара
const addButtonCard = document.querySelector('.form-product__button'); // кнопка добавить товар

const addButton = document.querySelector('.form-product__button_action_add');
// const form = document.querySelector('.form-product');
const formname = document.forms.form;
/* --------------ADD CARDS PAGE----------------------------- */
const initialCards = [
  {
    name: 'Наименование товара',
    image: './img/product-img-leica.jpeg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '12300',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img-codac.jpeg',
    about: 'Довольно-таки интересное описание товара в несколько строк.',
    price: '1290',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img-ypiter.jpeg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '28500',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img-canon.jpeg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '17300',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img.jpg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '7000',
  },
  {
    name: 'Наименование товара',
    image: './img/product-img-optima.jpeg',
    about:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: '13700',
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
  elementsPrice.textContent = item.price += ' ₽';

  //обработчик на удаление карточки
  listElement
    .querySelector('.elements__button-delete')
    .addEventListener('click', function (evt) {
      console.log('yop');
      evt.target.closest('.elements__list-item').remove();
    });

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

/*Создание новой карточки*/
function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  addCard(
    (item = {
      name: nameProductInput.value,
      image: linkImageInput.value,
      about: descriptionProductInput.value,
      price: priceInput.value,
    }),
    templateList
  );
  document.querySelector('.form-product').reset();
  formname.reset();
  setSubmitButtonState(false);
}
form.addEventListener('submit', cardFormSubmitHandler);

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute('disabled');
    addButton.classList.remove('form-product__button_disabled');
  } else {
    addButton.setAttribute('disabled', true);
    addButton.classList.add('form-product__button_disabled');
  }
}

formname.addEventListener('input', function (evt) {
  const isValid =
    nameProductInput.value.length > 0 &&
    linkImageInput.value.length > 0 &&
    priceInput.value.length > 0;
  setSubmitButtonState(isValid);
});

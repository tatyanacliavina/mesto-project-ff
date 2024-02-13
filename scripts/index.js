// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
// @todo: Функция создания карточки
function addCard(element, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = element.link;
  cardImage.alt = element.name;

  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = element.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
deleteButton.addEventListener("click", () => {deleteCard(cardElement)});

  return cardElement;
};
// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
};
// @todo: Вывести карточки на страницу

initialCards.forEach((item) => {
  placesList.append(addCard(item,deleteCard));
});
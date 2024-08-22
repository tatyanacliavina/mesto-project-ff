export const imagePopup = document.querySelector(".popup_type_image");
export const formCard = document.querySelector('[name="new-place"]');
export const newCard = document.querySelector(".popup_type_new-card");
export const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const nameInputCard = formCard.querySelector(".popup__input_type_card-name");
const linkInputCard = formCard.querySelector(".popup__input_type_url");

export function addCard(element, deleteCard, onClick, likeIt) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const buttonLike = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = element.link;
  cardImage.alt = element.name;
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = element.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  
  deleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  cardImage.addEventListener("click", onClick);
  buttonLike.addEventListener("click", likeIt);

  return cardElement;
}

export function addCardForm(evt, closeMod, onClick) {
  evt.preventDefault();
  newCard.name = nameInputCard.value;
  newCard.link = linkInputCard.value;
  placesList.prepend(addCard(newCard, deleteCard, onClick, likeIt));
  formCard.reset();
  closeMod(newCard);
}

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function likeIt(item) {
  if (!item.target.classList.contains("card__like-button_is-active")) {
    item.target.classList.add("card__like-button_is-active");
  } else {
    item.target.classList.remove("card__like-button_is-active");
  }
}
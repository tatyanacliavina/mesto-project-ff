export function createCard(element, deleteCard, onClickImage, likeIt) {
  const cardTemplate = document.querySelector("#card-template").content;
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

  cardImage.addEventListener("click", onClickImage);
  buttonLike.addEventListener("click", likeIt);

  return cardElement;
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

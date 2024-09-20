import {likePut, likeDelete, promisDeleteCard} from "./api.js";
export function createCard(
  element,
  deleteCard,
  onClickImage,
  likeIt,
  currentUserID
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const buttonLike = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const likeCount = cardElement.querySelector(".card__like-count");
  cardImage.src = element.link;
  cardImage.alt = element.name;
  likeCount.textContent = element.likes.length;
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = element.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  if (currentUserID !== element.owner._id) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", () => {
      deleteCard(cardElement, element._id);
    });
  }

  if (element.likes.map(user => user._id).includes(currentUserID)) {
    buttonLike.classList.add("card__like-button_is-active");
  }

  cardImage.addEventListener("click", onClickImage);
  buttonLike.addEventListener("click", (event) =>
    likeIt(event, element._id, likeCount)
  );

  return cardElement;
}

export function deleteCard(cardElement, cardId) {
  promisDeleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.error(err);
  });
}

export function likeIt(item, cardId, likeCount) {
  if (!item.target.classList.contains("card__like-button_is-active")) {
    likePut(cardId)
      .then((result) => {
        item.target.classList.add("card__like-button_is-active");
        likeCount.textContent = result.likes.length;
      })
      .catch((err) => {
        console.error(err);
    });
  } else {
    likeDelete(cardId)
      .then((result) => {
        item.target.classList.remove("card__like-button_is-active");
        likeCount.textContent = result.likes.length;
      })
      .catch((err) => {
        console.error(err);
    });
  }
}

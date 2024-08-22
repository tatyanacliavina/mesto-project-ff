import { initialCards } from "./cards.js";
import "./index.css";
import {
  addCard,
  addCardForm,
  newCard,
  formCard,
  placesList,
  deleteCard,
  likeIt,
  imagePopup,
} from "./card.js";
import { openMod, closeMod, closeOverlay } from "./modal.js";

initialCards.forEach((item) => {
  placesList.append(addCard(item, deleteCard, onClick, likeIt));
});

const buttonEditProfile = document.querySelector(".profile__edit-button");
const typeEditPopup = document.querySelector(".popup_type_edit");
const buttonClose = document.querySelector(".popup__close");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCloseAdd = newCard.querySelector(".popup__close");
const buttonCloseImage = imagePopup.querySelector(".popup__close");
const formElement = document.querySelector('[name="edit-profile"]');
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

formCard.addEventListener("submit", event => addCardForm(event, closeMod, onClick) );

formElement.addEventListener("submit", handleFormSubmit);

buttonCloseImage.addEventListener("click", function () {
  closeMod(imagePopup);
});

buttonEditProfile.addEventListener("click", function () {
  openMod(typeEditPopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
});

buttonAdd.addEventListener("click", function () {
  openMod(newCard);
});

buttonClose.addEventListener("click", function () {
  closeMod(typeEditPopup);
});

buttonCloseAdd.addEventListener("click", function () {
  closeMod(newCard);
});

imagePopup.addEventListener("click", (event) =>
  closeOverlay(event, imagePopup)
);

typeEditPopup.addEventListener("click", (event) =>
  closeOverlay(event, typeEditPopup)
);

newCard.addEventListener("click", (event) => closeOverlay(event, newCard));

function onClick(item) {
  const openedImage = imagePopup.querySelector(".popup__image");
  const textImage = imagePopup.querySelector(".popup__caption");
  openedImage.src = item.target.src;
  openedImage.alt = item.target.alt;
  textImage.textContent = item.target.alt;
  openMod(imagePopup);
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputVAlue = jobInput.value;
  profileTitle.textContent = nameInputValue;
  profileJob.textContent = jobInputVAlue;
  closeMod(typeEditPopup);
}
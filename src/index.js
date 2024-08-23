import { initialCards } from "./components/cards.js";
import "./index.css";
import { createCard, deleteCard, likeIt } from "./components/card.js";
import { openMod, closeMod, closeOverlay } from "./components/modal.js";

const cardsContainer = document.querySelector(".places__list");

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item, deleteCard, onClickImage, likeIt));
});

const buttonEditProfile = document.querySelector(".profile__edit-button");
const typeEditPopup = document.querySelector(".popup_type_edit");
const buttonClose = document.querySelector(".popup__close");
const buttonAdd = document.querySelector(".profile__add-button");
const cardModal = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const buttonCloseAdd = cardModal.querySelector(".popup__close");
const buttonCloseImage = imagePopup.querySelector(".popup__close");
const formProfile = document.querySelector('[name="edit-profile"]');
const nameInput = formProfile.querySelector(".popup__input_type_name");
const jobInput = formProfile.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const formCard = document.querySelector('[name="new-place"]');

formCard.addEventListener("submit", (event) => addCard(event, closeMod));

formProfile.addEventListener("submit", handleFormSubmitProfile);

buttonCloseImage.addEventListener("click", function () {
  closeMod(imagePopup);
});

buttonEditProfile.addEventListener("click", function () {
  openMod(typeEditPopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
});

buttonAdd.addEventListener("click", function () {
  openMod(cardModal);
});

buttonClose.addEventListener("click", function () {
  closeMod(typeEditPopup);
});

buttonCloseAdd.addEventListener("click", function () {
  closeMod(cardModal);
});

imagePopup.addEventListener("click", (event) =>
  closeOverlay(event, imagePopup)
);

typeEditPopup.addEventListener("click", (event) =>
  closeOverlay(event, typeEditPopup)
);

cardModal.addEventListener("click", (event) => closeOverlay(event, cardModal));

const openedImage = imagePopup.querySelector(".popup__image");
const textImage = imagePopup.querySelector(".popup__caption");
function onClickImage(event) {
  openedImage.src = event.target.src;
  openedImage.alt = event.target.alt;
  textImage.textContent = event.target.alt;
  openMod(imagePopup);
}
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputVAlue = jobInput.value;
  profileTitle.textContent = nameInputValue;
  profileJob.textContent = jobInputVAlue;
  closeMod(typeEditPopup);
}
function addCard(evt) {
  evt.preventDefault();
  const nameInputCard = formCard.querySelector(".popup__input_type_card-name");
  const linkInputCard = formCard.querySelector(".popup__input_type_url");
  cardModal.name = nameInputCard.value;
  cardModal.link = linkInputCard.value;
  cardsContainer.prepend(
    createCard(cardModal, deleteCard, onClickImage, likeIt)
  );
  formCard.reset();
  closeMod(cardModal);
}
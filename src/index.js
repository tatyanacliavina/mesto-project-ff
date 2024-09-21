import "./index.css";
import { createCard, deleteCard, likeIt } from "./components/card.js";
import { openMod, closeMod, closeOverlay } from "./components/modal.js";
import {nameButton, loading} from "./components/utils.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  promisProfile,
  promisCards,
  saveCard,
  saveInfoProfile,
  saveNewAvatar,
} from "./components/api.js";

let userId;

const cardsContainer = document.querySelector(".places__list");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const typeEditPopup = document.querySelector(".popup_type_edit");
const buttonCloseEditProfileForm = document.querySelector(".popup__close");
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
const formAvatar = document.querySelector('[name="update-avatar"]');
const popupAvatar = document.querySelector(".popup_type_update_avatar");
const avatarInput = popupAvatar.querySelector(".popup__input_type_url");
const buttonCloseUpAv = popupAvatar.querySelector(".popup__close");

const imageAvatar = document.querySelector(".profile__image");
const openedImage = imagePopup.querySelector(".popup__image");
const textImage = imagePopup.querySelector(".popup__caption");
const nameInputCard = formCard.querySelector(".popup__input_type_card-name");
const linkInputCard = formCard.querySelector(".popup__input_type_url");
const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form_input_type_error",
  errorClass: "form__input-error_active",
};

formCard.addEventListener("submit", (event) => addCard(event, closeMod));

formProfile.addEventListener("submit", handleFormSubmitProfile);

formAvatar.addEventListener("submit", avatarSubmit);

buttonEditProfile.addEventListener("click", function () {
  openMod(typeEditPopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  clearValidation(typeEditPopup, validConfig);
});

buttonAdd.addEventListener("click", function () {
  openMod(cardModal);
  formCard.reset();
});

imageAvatar.addEventListener("click", function () {
  formAvatar.reset();
  openMod(popupAvatar);
  clearValidation(formAvatar, validConfig);
});

enableValidation(validConfig);

buttonCloseImage.addEventListener("click", function () {
  closeMod(imagePopup);
});

buttonCloseUpAv.addEventListener("click", function () {
  closeMod(popupAvatar);
});

buttonCloseEditProfileForm.addEventListener("click", function () {
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

popupAvatar.addEventListener("click", (event) =>
  closeOverlay(event, popupAvatar)
);

loading(true);

cardModal.addEventListener("click", (event) => closeOverlay(event, cardModal));

Promise.all([promisProfile(), promisCards()])
  .then(([userInfo, cardInfo]) => {
    console.log(userInfo);
    updateProfileInfo(userInfo);
    userId = userInfo._id;
    cardInfo.forEach((item) => {
      cardsContainer.append(
        createCard(item, deleteCard, onClickImage, likeIt, userId)
      );
    });
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    loading(false);
  });

function onClickImage(event) {
  openedImage.src = event.target.src;
  openedImage.alt = event.target.alt;
  textImage.textContent = event.target.alt;
  openMod(imagePopup);
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  nameButton(formProfile, "Сохранение...");
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  saveInfoProfile(nameInputValue, jobInputValue)
    .then((result) => {
      updateProfileInfo(result);
      closeMod(typeEditPopup);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      nameButton(formProfile, "Сохранить");
    });
}

function addCard(evt) {
  evt.preventDefault();
  nameButton(formCard, "Сохранение...");
  saveCard(nameInputCard.value, linkInputCard.value)
    .then((result) => {
      cardsContainer.prepend(
        createCard(result, deleteCard, onClickImage, likeIt, userId)
      );
      formCard.reset();
      clearValidation(formCard, validConfig);
      closeMod(cardModal);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      nameButton(formCard, "Сохранить");
    });
}

function updateProfileInfo(userInfoDto) {
  profileTitle.textContent = userInfoDto.name;
  profileJob.textContent = userInfoDto.about;
  imageAvatar.style.backgroundImage = `url(${userInfoDto.avatar})`;
}

function avatarSubmit(evt) {
  evt.preventDefault();
  const avatarLink = avatarInput.value;
  nameButton(popupAvatar, "Сохранение...");
  saveNewAvatar(avatarLink)
    .then((res) => {
      imageAvatar.style.backgroundImage = ` url(${res.avatar})`;
      clearValidation(formAvatar, validConfig);
      closeMod(popupAvatar);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      nameButton(popupAvatar, "Сохранить");
    });
}
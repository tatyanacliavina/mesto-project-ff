(()=>{"use strict";function e(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=o.querySelector(".card__like-button"),i=o.querySelector(".card__image");return i.src=e.link,i.alt=e.name,o.querySelector(".card__title").textContent=e.name,o.querySelector(".card__delete-button").addEventListener("click",(function(){t(o)})),i.addEventListener("click",n),c.addEventListener("click",r),o}function t(e){e.remove()}function n(e){e.target.classList.contains("card__like-button_is-active")?e.target.classList.remove("card__like-button_is-active"):e.target.classList.add("card__like-button_is-active")}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function c(e){"Escape"===e.key&&document.querySelector(".popup_is-opened")&&r(document.querySelector(".popup_is-opened"))}function i(e,t){e.target.classList.contains("popup_is-opened")&&r(t)}var p=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(r){p.append(e(r,t,b,n))}));var u=document.querySelector(".profile__edit-button"),a=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup__close"),s=document.querySelector(".profile__add-button"),l=document.querySelector(".popup_type_new-card"),_=document.querySelector(".popup_type_image"),m=l.querySelector(".popup__close"),y=_.querySelector(".popup__close"),v=document.querySelector('[name="edit-profile"]'),f=v.querySelector(".popup__input_type_name"),k=v.querySelector(".popup__input_type_description"),q=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),L=document.querySelector('[name="new-place"]');L.addEventListener("submit",(function(o){return function(o){o.preventDefault();var c=L.querySelector(".popup__input_type_card-name"),i=L.querySelector(".popup__input_type_url");l.name=c.value,l.link=i.value,p.prepend(e(l,t,b,n)),L.reset(),r(l)}(o)})),v.addEventListener("submit",(function(e){e.preventDefault();var t=f.value,n=k.value;q.textContent=t,S.textContent=n,r(a)})),y.addEventListener("click",(function(){r(_)})),u.addEventListener("click",(function(){o(a),f.value=q.textContent,k.value=S.textContent})),s.addEventListener("click",(function(){o(l)})),d.addEventListener("click",(function(){r(a)})),m.addEventListener("click",(function(){r(l)})),_.addEventListener("click",(function(e){return i(e,_)})),a.addEventListener("click",(function(e){return i(e,a)})),l.addEventListener("click",(function(e){return i(e,l)}));var E=_.querySelector(".popup__image"),g=_.querySelector(".popup__caption");function b(e){E.src=e.target.src,E.alt=e.target.alt,g.textContent=e.target.alt,o(_)}f.addEventListener("input",(function(){f.validity.valid?f.classList.remove("form__input_type_error"):f.classList.add(".form_input_type_error")}))})();
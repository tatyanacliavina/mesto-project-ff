(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-22",headers:{authorization:"afba6626-4902-4e72-b000-2c6e7befb6da","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__like-button"),i=c.querySelector(".card__image"),u=c.querySelector(".card__like-count");i.src=e.link,i.alt=e.name,u.textContent=e.likes.length,c.querySelector(".card__title").textContent=e.name;var l=c.querySelector(".card__delete-button");return o!==e.owner._id?l.remove():l.addEventListener("click",(function(){t(c,e._id)})),e.likes.map((function(e){return e._id})).includes(o)&&a.classList.add("card__like-button_is-active"),i.addEventListener("click",n),a.addEventListener("click",(function(t){return r(t,e._id,u)})),c}function r(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){n.remove()})).catch((function(e){console.error(e)}))}function o(n,r,o){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(r).then((function(e){n.target.classList.remove("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.error(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){n.target.classList.add("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.error(e)}))}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function i(e){"Escape"===e.key&&document.querySelector(".popup_is-opened")&&c(document.querySelector(".popup_is-opened"))}function u(e,t){e.target.classList.contains("popup_is-opened")&&c(t)}var l,s=document.querySelector(".places__chopper");function d(e,t){e.querySelector(".popup__button").textContent=t}function p(e){e?s.classList.add("chopper_visible"):s.classList.remove("chopper_visible")}function f(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),t.setCustomValidity(""),r.classList.remove(n.errorClass),r.textContent=""}function _(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function y(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){f(e,n,t)})),_(n,r,t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,h=document.querySelector(".places__list"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup__close"),L=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_new-card"),k=document.querySelector(".popup_type_image"),g=E.querySelector(".popup__close"),C=k.querySelector(".popup__close"),x=document.querySelector('[name="edit-profile"]'),A=x.querySelector(".popup__input_type_name"),U=x.querySelector(".popup__input_type_description"),w=document.querySelector(".profile__title"),T=document.querySelector(".profile__description"),j=document.querySelector('[name="new-place"]'),O=document.querySelector('[name="update-avatar"]'),B=document.querySelector(".popup_type_update_avatar"),P=B.querySelector(".popup__input_type_url"),D=B.querySelector(".popup__close"),I=document.querySelector(".profile__image"),N=k.querySelector(".popup__image"),J=k.querySelector(".popup__caption"),M=j.querySelector(".popup__input_type_card-name"),V=j.querySelector(".popup__input_type_url"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form_input_type_error",errorClass:"form__input-error_active"};function z(e){N.src=e.target.src,N.alt=e.target.alt,J.textContent=e.target.alt,a(k)}function $(e){w.textContent=e.name,T.textContent=e.about,I.style.backgroundImage="url(".concat(e.avatar,")")}j.addEventListener("submit",(function(a){return a.preventDefault(),d(j,"Сохранение..."),void(i=M.value,u=V.value,fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:i,link:u})}).then(t)).then((function(e){h.prepend(n(e,r,z,o,l)),j.reset(),y(j,H),c(E)})).catch((function(e){console.error(e)})).finally((function(){d(j,"Сохранить")}));var i,u})),x.addEventListener("submit",(function(n){var r,o;n.preventDefault(),d(x,"Сохранение..."),(r=A.value,o=U.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){$(e),c(b)})).catch((function(e){console.error(e)})).finally((function(){d(x,"Сохранить")}))})),O.addEventListener("submit",(function(n){n.preventDefault();var r,o=P.value;d(B,"Сохранение..."),(r=o,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){I.style.backgroundImage=" url(".concat(e.avatar,")"),y(O,H),c(B)})).catch((function(e){console.error(e)})).finally((function(){d(B,"Сохранить")}))})),S.addEventListener("click",(function(){a(b),A.value=w.textContent,U.value=T.textContent,y(b,H)})),L.addEventListener("click",(function(){a(E),j.reset()})),I.addEventListener("click",(function(){O.reset(),a(B),y(O,H)})),v=H,Array.from(document.querySelectorAll(v.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorText):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(e,v)})),C.addEventListener("click",(function(){c(k)})),D.addEventListener("click",(function(){c(B)})),q.addEventListener("click",(function(){c(b)})),g.addEventListener("click",(function(){c(E)})),k.addEventListener("click",(function(e){return u(e,k)})),b.addEventListener("click",(function(e){return u(e,b)})),B.addEventListener("click",(function(e){return u(e,B)})),p(!0),E.addEventListener("click",(function(e){return u(e,E)})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,c,a=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,c)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];console.log(i),$(i),l=i._id,u.forEach((function(e){h.append(n(e,r,z,o,l))}))})).catch((function(e){console.error(e)})).finally((function(){p(!1)}))})();
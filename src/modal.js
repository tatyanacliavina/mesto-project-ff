export function closeMod(item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeEscape);
}

export function openMod(item) {
  item.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeEscape);
}

export function closeEscape(event) {
  const openModal = document.querySelector(".popup_is-opened");
  if (event.key == "Escape" && openModal) {
    closeMod(openModal);
  }
}

export function closeOverlay(event, elementToClose) {
  if (event.target.classList.contains("popup_is-opened")) {
    closeMod(elementToClose);
  }
}

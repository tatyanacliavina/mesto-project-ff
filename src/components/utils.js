const chopper = document.querySelector(".places__chopper");

export function nameButton(popup, name) {
  popup.querySelector(".popup__button").textContent = name;
}

export function loading(isLoading) {
  if (isLoading) {
    chopper.classList.add("chopper_visible");
  } else {
    chopper.classList.remove("chopper_visible");
  }
}

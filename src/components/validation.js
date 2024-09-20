function showInputError(
  formElement,
  inputElement,
  errorMessage,
  configuration
) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(configuration.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configuration.errorClass);
}

function hideInputError(formElement, inputElement, configuration) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(configuration.inputErrorClass);
  inputElement.setCustomValidity("");
  errorElement.classList.remove(configuration.errorClass);
  errorElement.textContent = "";
}

function isValid(formElement, inputElement, configuration) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorText);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configuration
    );
  } else {
    hideInputError(formElement, inputElement, configuration);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, configuration) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(configuration.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(configuration.inactiveButtonClass);
  }
}

function setEventListeners(formElement, configuration) {
  const inputList = Array.from(
    formElement.querySelectorAll(configuration.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    configuration.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, configuration);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, configuration);
      toggleButtonState(inputList, buttonElement, configuration);
    });
  });
}

export function enableValidation(configuration) {
  const formList = Array.from(
    document.querySelectorAll(configuration.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListeners(formElement, configuration);
  });
}

export function clearValidation(formElement, configuration) {
  const inputList = Array.from(
    formElement.querySelectorAll(configuration.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    configuration.submitButtonSelector
  );
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, configuration);
  });
  toggleButtonState(inputList, buttonElement, configuration);
}

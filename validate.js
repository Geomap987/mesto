const showError = (formaElement, inputElement, errorMessage, inputErrorClass) => {
  const inputError = formaElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  inputError.textContent = errorMessage;
  };

const hideError = (formaElement, inputElement, inputErrorClass) => {
  const inputError = formaElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  inputError.textContent = '';
  };

const checkInputValidity = (formaElement, inputElement, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showError(formaElement, inputElement, inputElement.validationMessage, inputErrorClass);
  } else {
    hideError(formaElement, inputElement, inputErrorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, submitButton, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute('disabled', 'disabled');
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  }
}

const setEventListeners = (formaElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass) => {
  const inputList = Array.from(formaElement.querySelectorAll(inputSelector));
  const submitButton = formaElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, submitButton, inactiveButtonClass);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      checkInputValidity(formaElement, inputElement, inputErrorClass);
      toggleButtonState(inputList, submitButton, inactiveButtonClass);
    });
  });
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formaElement) => {
    formaElement.addEventListener('submit', function(evt) {
    evt.preventDefault();
    });
    setEventListeners(formaElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass);
  });
}

const allForms = [{
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_invalid',
}];

allForms.forEach(item => enableValidation(item));


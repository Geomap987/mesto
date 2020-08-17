export default class FormValidator {
  constructor(validationConfig, targetForm) {
    this._formSelector = targetForm;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
  }

  _showError(formaElement, inputElement, errorMessage) {
    const inputError = formaElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    inputError.textContent = errorMessage;
  }

  _hideError(formaElement, inputElement) {
    const inputError = formaElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    inputError.textContent = "";
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(formaElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(
        formaElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideError(formaElement, inputElement);
    }
  }

  _toggleButtonState(inputList, submitButton) {
    if (this._hasInvalidInput(inputList)) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.setAttribute("disabled", true);
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.removeAttribute("disabled");
    }
  }

  _setEventListeners(formaElement) {
    const inputList = Array.from(
      formaElement.querySelectorAll(this._inputSelector)
    );
    const submitButton = formaElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, submitButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formaElement, inputElement);
        this._toggleButtonState(inputList, submitButton);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formaElement) => {
      formaElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formaElement);
    });
  }
}

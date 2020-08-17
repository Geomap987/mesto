import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._targetPopup = document.querySelector(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._targetPopup.querySelector(".popup__container");
  }

  _getInputValues() {
    this._inputList = this._targetPopup.querySelectorAll(".popup__input");
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListener() {
    
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popupForm.reset();
      this.close();
    });
    super.setEventListener();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

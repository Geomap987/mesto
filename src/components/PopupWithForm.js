import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
      super(popupSelector)
      this._targetPopup = document.querySelector(popupSelector)
      this._handleFormSubmit = handleFormSubmit
    }
  
    _getInputValues() {
      this._inputList = this._targetPopup.querySelectorAll('.popup__input')
      this._inputValues = {}
      this._inputList.forEach(input => {
        this._inputValues[input.name] = input.value;
      });
    
      return this._inputValues;
    }
  
    setEventListener() {
      const popupForm = this._targetPopup.querySelector('.popup__container')
      popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault()
        this._handleFormSubmit(this._getInputValues())
        popupForm.reset();
        this.closePopup()
      })
      super.setEventListener()
    }
  
    closePopup() {
      const popupForm = this._targetPopup.querySelector('.popup__container')
      popupForm.reset()
      super.closePopup()
    }
  }
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {  
    constructor(popupSelector, image, subtitle) {
      super(popupSelector)
      this._targetPopup = document.querySelector(popupSelector)
      this._image = image
      this._subtitle = subtitle
    }
  
    openPopup() {
       this._targetPopup.querySelector('.popup__bigphoto-image').src = this._image
       this._targetPopup.querySelector('.popup__bigphoto-subtitle').textContent = this._subtitle
       super.openPopup()
    }
  }
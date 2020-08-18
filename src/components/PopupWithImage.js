import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, image, subtitle) {
    super(popupSelector);
    this._targetPopup = document.querySelector(popupSelector);
    this._image = image;
    this._subtitle = subtitle;
  }

  open() {
    const bigPhotoImage = this._targetPopup.querySelector(".popup__bigphoto-image");
    const bigPhotoSubtitle = this._targetPopup.querySelector(".popup__bigphoto-subtitle");
    bigPhotoImage.src = this._image;
    bigPhotoImage.alt = this._subtitle;
    bigPhotoSubtitle.textContent = this._subtitle;
    super.open();
  }
}

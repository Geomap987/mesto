import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._targetPopup = document.querySelector(popupSelector);
  }

  open(image, subtitle) {
    const bigPhotoImage = this._targetPopup.querySelector(
      ".popup__bigphoto-image"
    );
    const bigPhotoSubtitle = this._targetPopup.querySelector(
      ".popup__bigphoto-subtitle"
    );
    bigPhotoImage.src = image;
    bigPhotoImage.alt = subtitle;
    bigPhotoSubtitle.textContent = subtitle;
    super.open();
  }
}

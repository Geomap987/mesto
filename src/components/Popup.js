export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._targetPopup = document.querySelector(popupSelector)
  }

  _escapeClosePopup(evt) {
    if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened')
    }
  }

  _popupOverlayClose(e) {
  if (e.target.classList.contains('popup_opened')) {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  }}

  openPopup() {
      document.addEventListener('keydown', this._escapeClosePopup);
      this._targetPopup.addEventListener('click', this._popupOverlayClose)
      this._targetPopup.classList.add('popup_opened');  
  }
    
  closePopup() {
    document.removeEventListener('keydown', this._escapeClosePopup);
    this._targetPopup.removeEventListener('click', this._popupOverlayClose)
    this._targetPopup.classList.remove('popup_opened');
  }

  setEventListener() {
    const closeButton = this._targetPopup.querySelector('.popup__close-button');
    closeButton.addEventListener('click', () => {this.closePopup()});
  }          
}
  
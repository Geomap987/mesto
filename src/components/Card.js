import PopupWithImage from './PopupWithImage.js';

export default class Card {
  constructor(data, cardSelector) {
    this._imageLink = data.imageLink;
    this._title = data.title;
    this._cardSelector = cardSelector;
  }
  
  _getTemplate() {
    const card = this._cardSelector.cloneNode(true);
    return card;
  }
  
  _likeIconHandler(evt) {
    evt.target.classList.toggle('photo-grid__like-icon_active');
  }
 
  _handleCardClick(evt) {
    const targetImage = evt.target.src;
    const targetSubtitle = evt.target.alt;
    const targetPhotoPopup = new PopupWithImage('.popup-bigphotopopup', targetImage, targetSubtitle)
    targetPhotoPopup.openPopup()
    targetPhotoPopup.setEventListener()
  }
  
  _deleteIconHandler(evt) {
    const closestCard = evt.target.closest('.photo-grid__card');
    closestCard.remove();
  }
  
  _setEventListener() {
    const cardPhoto = this._element.querySelector('.photo-grid__photo');
    const likeIcon = this._element.querySelector('.photo-grid__like-icon');
    const deleteIcon = this._element.querySelector('.photo-grid__delete-icon');
    likeIcon.addEventListener('click', this._likeIconHandler);
    deleteIcon.addEventListener('click', this._deleteIconHandler);
    cardPhoto.addEventListener('click', this._handleCardClick);
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardPhoto = this._element.querySelector('.photo-grid__photo');
    const cardTitle = this._element.querySelector('.photo-grid__title');
    cardPhoto.src = this._imageLink;
    cardTitle.textContent = this._title;
    cardPhoto.alt = cardTitle.textContent;
    this._setEventListener();
    return this._element;
  }
}
  

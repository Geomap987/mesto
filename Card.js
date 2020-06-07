const bigPhotoPopupImage = document.querySelector('.popup__bigphoto-image');
const bigPhotoPopupSubtitle = document.querySelector('.popup__bigphoto-subtitle');
const popupClassOpened = 'popup_opened';
const bigPhotoPopup = document.getElementById('bigphotopopup');

function openPopup(popup) {
  document.addEventListener('keydown', escapeClosePopup);
  popup.classList.add(popupClassOpened);}

function escapeClosePopup(e) {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
}

function closePopup(popup) {
  document.removeEventListener('keydown', escapeClosePopup);
  popup.classList.remove(popupClassOpened);
}
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
  
  _bigPhotoHandler(evt) {
    bigPhotoPopupImage.src = evt.target.src;
    bigPhotoPopupSubtitle.textContent = evt.target.alt;
    openPopup(bigPhotoPopup);
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
    cardPhoto.addEventListener('click', this._bigPhotoHandler);
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
  

import Card from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
    {
      title: 'Гостиная',
      imageLink: './images/livingroom.jpg'
    },
    {
      title: 'Кухня',
      imageLink: './images/kitchen.jpg'
    },
    {
      title: 'Балкон',
      imageLink: './images/balcony.jpg'
    },
    {
      title: 'Спальня',
      imageLink: './images/bedroom.jpg'
    },
    {
      title: 'Детская',
      imageLink: './images/babyroom.jpg'
    },
    {
      title: 'Ванна',
      imageLink: './images/bathroom.jpg'
    }
  ];

const popupProfile = document.getElementById('popupprofile');

const popupAddPhoto = document.getElementById('popupaddphoto');

const editButton = document.querySelector('.profile__edit-button');

const closeButtonProfile = document.getElementById('profilebutton');

const closeButtonPhoto = document.getElementById('photobutton');

const addButton = document.querySelector('.profile__add-button');

const formElement = document.getElementById('profileform');

const formAddPhoto = document.getElementById('addphotoform');

const title = document.querySelector('.profile__title');

const subtitle = document.querySelector('.profile__subtitle');

const inputName = document.getElementById('profilename');

const inputJob = document.getElementById('profilejob');

const inputPlace = document.getElementById('photoplace');

const inputLink = document.getElementById('photolink');

const bigPhotoPopup = document.getElementById('bigphotopopup');

const bigPhotoPopupImage = document.querySelector('.popup__bigphoto-image');

const bigPhotoPopupCloseButton = document.getElementById('bigphotobutton');

const bigPhotoPopupSubtitle = document.querySelector('.popup__bigphoto-subtitle');

const bigPhotoPopupContainer = document.querySelector('.popup__bigphoto-container ');

const cardTemplate = document.querySelector('.photo-grid__template').content;

const cardContainer = document.querySelector('.photo-grid__container');

const popupClassOpened = 'popup_opened';

const popupBigPhotoClassOpened = 'bigphoto-popup_opened';

const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_invalid',
  };


// добавление карточек

function addCard(item) {
    const card = new Card(item, cardTemplate);
    const cardElement = card.generateCard();
    cardContainer.append(cardElement); 
  }
  
  function addInitialCards() {
    initialCards.forEach(item => addCard(item));
  }
  
  addInitialCards();

// открытие и закрытие попапов

function openPopup(popup) {
  document.addEventListener('keydown', escapeClosePopup);
  popup.classList.add(popupClassOpened);}

function closePopup(popup) {
    document.removeEventListener('keydown', escapeClosePopup);
    popup.classList.remove(popupClassOpened);
  }

function hideError (formaElement, inputElement, inputErrorClass) {
    const inputError = formaElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    inputError.textContent = '';
}

function cleanErrorMessage(formaElement) {
  const allInputs = Array.from(formaElement.querySelectorAll(validationConfig.inputSelector));
  allInputs.map(input => hideError(formaElement, input, validationConfig.inputErrorClass));
}


//функция закрытия попапов по escape

function escapeClosePopup(e) {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
}

//попап профиля

function editButtonHandler() {
  inputName.value = title.textContent;
  inputJob.value = subtitle.textContent;
  cleanErrorMessage(popupProfile);
  openPopup(popupProfile);
}

editButton.addEventListener('click', editButtonHandler);

closeButtonProfile.addEventListener('click', function() {
  closePopup(popupProfile)
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup_opened')) {
    closePopup(e.target);
  }
});

// обработчик профиля

function profileSubmitHandler (evt) {
  evt.preventDefault();
  title.textContent = inputName.value; 
  subtitle.textContent = inputJob.value;
  closePopup(popupProfile);
}

formElement.addEventListener('submit', profileSubmitHandler);

//попап добавления фото
function addButtonHandler() {
  inputPlace.value = '';
  inputLink.value = '';
  cleanErrorMessage(popupAddPhoto);
  openPopup(popupAddPhoto);
}

addButton.addEventListener('click', addButtonHandler);

closeButtonPhoto.addEventListener('click', function() {
  closePopup(popupAddPhoto)
});

//обработчик добавления фото

function addPhotoSubmitHandler (evt) {
  evt.preventDefault();
  addCard({ title: inputPlace.value, imageLink: inputLink.value });
  closePopup(popupAddPhoto);
}

formAddPhoto.addEventListener('submit', addPhotoSubmitHandler);

//попап большое фото закрыть

bigPhotoPopupCloseButton.addEventListener('click', function() {
  closePopup(bigPhotoPopup)})

// валидация форм

const editForm = new FormValidator(validationConfig, ".popup__container_edit");
const addForm = new FormValidator(validationConfig, ".popup__container_add");
editForm.enableValidation();
addForm.enableValidation();
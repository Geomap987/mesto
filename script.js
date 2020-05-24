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

const bigPhotoPopup = document.querySelector('.bigphoto-popup');

const bigPhotoPopupImage = document.querySelector('.bigphoto-popup__image');

const bigPhotoPopupCloseButton = document.querySelector('.bigphoto-popup__close-button');

const bigPhotoPopupSubtitle = document.querySelector('.bigphoto-popup__subtitle');

const bigPhotoPopupContainer = document.querySelector('.bigphoto-popup__container');

const cardTemplate = document.querySelector('.photo-grid__template').content;

const cardContainer = document.querySelector('.photo-grid__container');

const allErrors = document.querySelectorAll('.popup__input-error');

const allInputs = document.querySelectorAll('.popup__input');

//генерация карточки

function generateCard(item) {
  const card = cardTemplate.cloneNode(true);
  const cardPhoto = card.querySelector('.photo-grid__photo');
  const deleteIcon = card.querySelector('.photo-grid__delete-icon');
  const likeIcon = card.querySelector('.photo-grid__like-icon'); 
  const cardTitle = card.querySelector('.photo-grid__title');
  cardPhoto.src = item.imageLink;
  cardTitle.textContent = item.title;
  cardPhoto.alt = cardTitle.textContent;
  deleteIcon.addEventListener('click', deleteIconHandler);
  likeIcon.addEventListener('click', likeIconHandler);
  cardPhoto.addEventListener('click', bigPhotoHandler);
  return card;
}

function addInitialCard(card, targetContainer) {
  targetContainer.prepend(generateCard(card));
}

function addInitialCards() {
  initialCards.forEach(card => addInitialCard(card, cardContainer));
}

addInitialCards();

//функции для кнопок карточки

function likeIconHandler(evt) {
  evt.target.classList.toggle('photo-grid__like-icon_active');
}

function deleteIconHandler(evt) {
  const closestCard = evt.target.closest('.photo-grid__card');
  closestCard.remove();
}

function bigPhotoHandler(evt) {
  bigPhotoPopup.classList.toggle('bigphoto-popup_opened');
  bigPhotoPopupImage.src = evt.target.src;
  bigPhotoPopupSubtitle.textContent = evt.target.alt;
  document.addEventListener('keydown', escapeClosePopup);
  }

// открытие и закрытие попапов

//очистка сообщений об ошибке валидации

function cleanErrorMessage() {
  allErrors.forEach((item) => item.textContent = '');
  allInputs.forEach((item) => item.classList.remove('popup__input_invalid'));
}

//функция закрытия попапов по escape

function escapeClosePopup(e) {
  if (e.key === 'Escape') {
    popupBigPhotoClose();
    popupProfileClose();
    popupPhotoClose ();
  };
}

//попап профиля

function popupProfileOpen () {
    popupProfile.classList.add('popup_opened');
    inputName.value = title.textContent;
    inputJob.value = subtitle.textContent;
    document.addEventListener('keydown', escapeClosePopup);
}

editButton.addEventListener('click', popupProfileOpen);

function popupProfileClose () {
    popupProfile.classList.remove('popup_opened');
    cleanErrorMessage();
    document.removeEventListener('keydown', escapeClosePopup);
}

closeButtonProfile.addEventListener('click', popupProfileClose);

popupProfile.addEventListener('click', function(e) {
  if (!formElement.contains(e.target)) {
    popupProfileClose();
  }
})

// обработчик профиля

function profileSubmitHandler (evt) {
  evt.preventDefault();
  title.textContent = inputName.value; 
  subtitle.textContent = inputJob.value;
  popupProfileClose ();
}

formElement.addEventListener('submit', profileSubmitHandler);

//попап добавления фото
function popupAddPhotoOpen () {
  popupAddPhoto.classList.add('popup_opened');
  inputPlace.value = '';
  inputLink.value = '';
  document.addEventListener('keydown', escapeClosePopup);
}

addButton.addEventListener('click', popupAddPhotoOpen);

function popupPhotoClose () {
  popupAddPhoto.classList.remove('popup_opened');
  cleanErrorMessage();
  document.removeEventListener('keydown', escapeClosePopup);
}

closeButtonPhoto.addEventListener('click', popupPhotoClose);

popupAddPhoto.addEventListener('click', function(e) {
  if (!formAddPhoto.contains(e.target)) {
    popupPhotoClose ();
  }
})

//обработчик добавления фото

function addPhotoSubmitHandler (evt) {
  evt.preventDefault();
  initialCards.push({ title: inputPlace.value, imageLink: inputLink.value });
  addInitialCard(initialCards[initialCards.length-1], cardContainer);
  popupPhotoClose ();
}

formAddPhoto.addEventListener('submit', addPhotoSubmitHandler);

//попап большое фото закрыть

function popupBigPhotoClose () {
  bigPhotoPopup.classList.remove('bigphoto-popup_opened');
  document.removeEventListener('keydown', escapeClosePopup);
}

bigPhotoPopupCloseButton.addEventListener('click', popupBigPhotoClose);

bigPhotoPopup.addEventListener ('click', function(e) {
if (!bigPhotoPopupContainer.contains(e.target) ) {
  popupBigPhotoClose();
}
});


  




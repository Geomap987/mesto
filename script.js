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

const popupClassOpened = 'popup_opened';

const popupBigPhotoClassOpened = 'bigphoto-popup_opened';

//функции для кнопок карточки

function likeIconHandler(element) {
  element.classList.toggle('photo-grid__like-icon_active');
}

function bigPhotoHandler(element) {
  bigPhotoPopupImage.src = element.src;
  bigPhotoPopupSubtitle.textContent = element.alt;
  openPopup(bigPhotoPopup, popupBigPhotoClassOpened);
}

function deleteIconHandler(element) {
  const closestCard = element.closest('.photo-grid__card');
  closestCard.remove()
}


//генерация карточки

function generateCard(item) {
  const card = cardTemplate.cloneNode(true);
  const cardPhoto = card.querySelector('.photo-grid__photo');
  const cardTitle = card.querySelector('.photo-grid__title');
  cardPhoto.src = item.imageLink;
  cardTitle.textContent = item.title;
  cardPhoto.alt = cardTitle.textContent;
  const likeIcon = card.querySelector('.photo-grid__like-icon');
  likeIcon.addEventListener('click', evt => likeIconHandler(evt.currentTarget));

  const deleteIcon = card.querySelector('.photo-grid__delete-icon');
  deleteIcon.addEventListener('click', evt => deleteIconHandler(evt.currentTarget));

  cardPhoto.addEventListener('click', evt => bigPhotoHandler(evt.currentTarget));
  return card;
}

function addCard(item) {
  const card = generateCard(item);
  cardContainer.append(card); 
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


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

//функции для кнопок карточки

function likeIconHandler() {
  const likeIcon = document.querySelector('.photo-grid__like-icon');
  likeIcon.addEventListener('click', evt => evt.target.classList.toggle('photo-grid__like-icon_active'))
}

function deleteIconHandler() {
  const deleteIcon = document.querySelector('.photo-grid__delete-icon');
  const closestCard = deleteIcon.closest('.photo-grid__card');
  deleteIcon.addEventListener('click', function() {
    closestCard.remove()});
}

function bigPhotoHandler() {
  const cardPhoto = document.querySelector('.photo-grid__photo');
  const cardTitle = document.querySelector('.photo-grid__title');
  cardPhoto.addEventListener('click', evt => {
    bigPhotoPopup.classList.toggle('bigphoto-popup_opened');
    bigPhotoPopupImage.src = cardPhoto.src;
    bigPhotoPopupSubtitle.textContent = cardTitle.textContent;
  })
}


//добавление карточек
function addCard(item) {
  const cardTemplate = document.querySelector('.photo-grid__template').content;
  const cardContainer = document.querySelector('.photo-grid__container');
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.photo-grid__photo').src = item.imageLink;
  card.querySelector('.photo-grid__title').textContent = item.title;
  cardContainer.prepend(card);
  deleteIconHandler();
  likeIconHandler();
  bigPhotoHandler();
}

function addInitialCards() {
  initialCards.forEach(item => addCard(item));
}

addInitialCards();


// открытие и закрытие попапов

//попап профиля

function popupProfileOpen () {
    popupProfile.classList.add('popup_opened');
    inputName.value = title.textContent;
    inputJob.value = subtitle.textContent
}

editButton.addEventListener('click', popupProfileOpen);

function popupProfileClose () {
    popupProfile.classList.remove('popup_opened')
}

closeButtonProfile.addEventListener('click', popupProfileClose);

// обработчик профиля

function profileSubmitHandler (evt) {
  evt.preventDefault();
  if (inputName.value.length !== 0) {
  title.textContent = inputName.value;};
  if (inputJob.value.length !== 0) {
  subtitle.textContent = inputJob.value;};
  popupProfileClose ();
}

formElement.addEventListener('submit', profileSubmitHandler);

//попап добавления фото
function popupAddPhotoOpen () {
  popupAddPhoto.classList.add('popup_opened');
}

addButton.addEventListener('click', popupAddPhotoOpen);

function popupPhotoClose () {
  popupAddPhoto.classList.remove('popup_opened')
}

closeButtonPhoto.addEventListener('click', popupPhotoClose);

//обработчик добавления фото

function addPhotoSubmitHandler (evt) {
  evt.preventDefault();
  initialCards.push({ title: inputPlace.value, imageLink: inputLink.value });
  addCard(initialCards[initialCards.length-1]);
  popupPhotoClose ();
}

formAddPhoto.addEventListener('submit', addPhotoSubmitHandler);

//попап большое фото убрать

function popupBigPhotoClose () {
  bigPhotoPopup.classList.remove('bigphoto-popup_opened')
}

bigPhotoPopupCloseButton.addEventListener('click', popupBigPhotoClose);




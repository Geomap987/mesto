import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

import "./index.css";
import {
  initialCards,
  editButton,
  addButton,
  inputName,
  inputJob,
  inputPlace,
  inputLink,
  cardTemplate,
  cardContainer,
  validationConfig,
} from "../utils/constants.js";

//попап с фотографией
const photoPopup = new PopupWithImage(".popup-bigphotopopup");
photoPopup.setEventListener();

// добавление 6 карточек на страницу

function createNewCard(item) {
  const card = new Card(item, cardTemplate, {
    handleCardClick: () => {
      const image = item.imageLink;
      const subtitle = item.title;
      photoPopup.open(image, subtitle);
    },
  });
  return card;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createNewCard(item);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  cardContainer
);
cardList.renderItems();

//попап профиля

const profilePopup = new PopupWithForm({
  popupSelector: ".popup-profile",
  handleFormSubmit: (inputValues) => {
    currentUser.setUserInfo(inputValues);
  },
});
profilePopup.setEventListener();

//попап добавления фотографий
const addPhotoPopup = new PopupWithForm({
  popupSelector: ".popup-addphoto",
  handleFormSubmit: (inputValues) => {
    const card = createNewCard(inputValues);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  },
});

addPhotoPopup.setEventListener();

//Информация о пользователе
const currentUser = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__subtitle",
});

//Хэндлер для кнопки открытия попапа добавления фото
function addButtonHandler() {
  inputPlace.value = "";
  inputLink.value = "";
  addPhotoPopup.open();
}
addButton.addEventListener("click", addButtonHandler);

//Хэндлер кнопки редактирования профиля
function editButtonHandler() {
  const userInfo = currentUser.getUserInfo();
  inputName.value = userInfo.name;
  inputJob.value = userInfo.job;
  profilePopup.open();
}
editButton.addEventListener("click", editButtonHandler);

//валидация
const editForm = new FormValidator(validationConfig, ".popup__container_edit");
editForm.enableValidation();

const addForm = new FormValidator(validationConfig, ".popup__container_add");
addForm.enableValidation();

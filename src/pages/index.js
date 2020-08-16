import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';
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
  validationConfig
} from '../utils/constants.js'


// добавление 6 карточек на страницу
const initialCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, cardTemplate)
    const cardElement = card.generateCard()
    initialCardList.addItem(cardElement)
  }
}, cardContainer)
initialCardList.renderItems()

//попап профиля

const profilePopup = new PopupWithForm ({
  popupSelector: '.popup-profile', 
  handleFormSubmit: (inputValues) => {
    currentUser.setUserInfo(inputValues)}
  }
)
profilePopup.setEventListener()

//попап добавления фотографий
const addPhotoPopup = new PopupWithForm ({
  popupSelector: '.popup-addphoto', 
  handleFormSubmit: (inputValues) => {
    console.log(inputValues)
    const array = []
    array.push(inputValues)
    const newCard = new Section({
      items: array,
      renderer: (item) => {
        const card = new Card(item, cardTemplate)
        const cardElement = card.generateCard()
        initialCardList.addItem(cardElement)
      }
    }, cardContainer)
  newCard.renderItems()
    }
  })
addPhotoPopup.setEventListener()

//Информация о пользователе
const currentUser = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__subtitle'}) 

//Хэндлер для кнопки открытия попапа добавления фото
function addButtonHandler() {
  inputPlace.value = ''
  inputLink.value = ''
  const addForm = new FormValidator(validationConfig, '.popup__container_add')
  addForm.enableValidation()
  addPhotoPopup.openPopup()
}
addButton.addEventListener('click', addButtonHandler)

//Хэндлер кнопки редактирования профиля
function editButtonHandler() {
  const userInfo = currentUser.getUserInfo()
  inputName.value = userInfo.name
  inputJob.value = userInfo.job
  profilePopup.openPopup()
  const editForm = new FormValidator(validationConfig, '.popup__container_edit')
  editForm.enableValidation()
}
editButton.addEventListener('click', editButtonHandler)






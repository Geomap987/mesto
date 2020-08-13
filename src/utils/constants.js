export const initialCards = [
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
export const editButton = document.querySelector('.profile__edit-button')
export const addButton = document.querySelector('.profile__add-button')
export const profileTitle = document.querySelector('.profile__title')
export const profileSubtitle = document.querySelector('.profile__subtitle')
export const inputName = document.getElementById('profilename')
export const inputJob = document.getElementById('profilejob')
export const inputPlace = document.getElementById('photoplace')
export const inputLink = document.getElementById('photolink')
export const cardTemplate = document.querySelector('.photo-grid__template').content
export const cardContainer = document.querySelector('.photo-grid__container')
export const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_invalid',
}
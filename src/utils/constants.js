import livingroom from "../images/livingroom.jpg";
import kitchen from "../images/kitchen.jpg";
import balcony from "../images/balcony.jpg";
import bedroom from "../images/bedroom.jpg";
import babyroom from "../images/babyroom.jpg";
import bathroom from "../images/bathroom.jpg";
export const initialCards = [
  {
    title: "Гостиная",
    imageLink: livingroom,
  },
  {
    title: "Кухня",
    imageLink: kitchen,
  },
  {
    title: "Балкон",
    imageLink: balcony,
  },
  {
    title: "Спальня",
    imageLink: bedroom,
  },
  {
    title: "Детская",
    imageLink: babyroom,
  },
  {
    title: "Ванна",
    imageLink: bathroom,
  },
];
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const inputName = document.getElementById("profilename");
export const inputJob = document.getElementById("profilejob");
export const inputPlace = document.getElementById("photoplace");
export const inputLink = document.getElementById("photolink");
export const cardTemplate = document.querySelector(".photo-grid__template")
  .content;
export const cardContainer = document.querySelector(".photo-grid__container");
export const validationConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_invalid",
};

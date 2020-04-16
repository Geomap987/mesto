const popup = document.querySelector('.popup');

const editButton = document.querySelector('.profile__edit-button');

const closeButton = document.querySelector('.popup__close-button');

const submitButton = document.querySelector('.popup__submit-button');

editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened')});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened')});

const formElement = document.querySelector('.popup__container');

const title = document.querySelector('.profile__title');

const subtitle = document.querySelector('.profile__subtitle');

const inputName = document.querySelector('.popup__input_title');

const inputJob = document.querySelector('.popup__input_subtitle');

inputName.placeholder = title.textContent;

inputJob.placeholder = subtitle.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault();
    if (inputName.value.length !== 0) {
    title.textContent = inputName.value;};
    if (inputJob.value.length !== 0) {
    subtitle.textContent = inputJob.value;};
    popup.classList.remove('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler);












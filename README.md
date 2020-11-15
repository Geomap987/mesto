# Проект 8: Место

## <https://geomap987.github.io/mesto/index.html>

### Основные задачи, реализованные в данном проекте
* Верстка страницы в соответсвии с макетом в Figma;
* Реализация адаптивной верстки, включая десктопную и мобильную версию;
* Использование Java Skript для реализации всплывающего окна формы редактирования профиля, добавления фотографий, открытия окна с увеличенной фотографией;
* Загрузка карточек через JS, добавление и удаление карточек через JS;
* Проставление лайка через JS;
* Плавное появление всплывающих окон.
* Валидация форм с помощью Java Script.
* Использование ООП, создание классов Popup, Section, UserInfo.
* Использование WebPack.

**Описание**

Данный проект разработан по макетам для разрешений: 1280 и 320 пикселей. Реализована плавная трансформация содержимого сайта при сжатии экрана. С помощью JS были сделаны окна, открывающееся при нажатии на кнопку редактирования и добавления фото. В форме редактирования профиля можно внести новые данные, которые автоматически отобразятся на странице. В форме добавления фото можно внести название и ссылку на фото и добавить новую карточку. При нажатии на карточку появляется окно с увеличенной фотографией. Через свойство visibility было реализовано плавное открытие попапов. С помощью JS реализована возможность добавлять и удалять карточки, ставить лайк. Была реализована валидация обеих форм с помощью Java Script. Ссылка на страницу 
<https://geomap987.github.io/mesto/index.html>

**Основные технологии**

* Для получения эффекта адаптивности были использованы медиазапросы, а также свойства flex-box и grid;
* Галерея реализована с помощью Grid;
* Для реализации окна Popup на JS было использовано добавление и удаление модификатора popup_opened при нажатии на кнопки редактирования и закрытия формы;
* С помощью JS было задано поведение формы при действии submit, когда введенные значения автоматически отображаются в профиле, добавляются фотографии;
* Начальные карточки добавляются из объекта при помощи метода prepend, пользовательские карточки добавляются методом push.


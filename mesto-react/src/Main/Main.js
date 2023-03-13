import React from "react";

function handleEditAvatarClick() {
  const popupAvatar = document.querySelector('.popup_type_avatar')
  popupAvatar.classList.add("popup_opened");
}
function handleEditProfileClick() {
  const popupAvatar = document.querySelector('.popup_type_profile')
  popupAvatar.classList.add("popup_opened");
}
function handleAddPlaceClick() {
  const popupAvatar = document.querySelector('.popup_type_place')
  popupAvatar.classList.add("popup_opened");
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="" alt="Аватар пользователя" />
            <button
              className="profile__avatar-button button"
              type="button"
              onClick={handleEditAvatarClick}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__edit-button button"
                type="button"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button button"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="cards"></section>
    </main>
  );
}

export default Main;

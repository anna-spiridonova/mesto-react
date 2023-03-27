import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() { 
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([resUserInfo, resInitialCards]) => {
      setCurrentUser(resUserInfo)
      setCards(resInitialCards);
    })
    .catch((err) => {
      console.log(err)
    });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setIsImagePopupOpen(false)
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true)
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);    
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((res) => {
        const newCards = cards.filter((c) => (c._id !== card._id && res));
        setCards(newCards);
      })
  }

  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        {/* форма редактора профиля */}
        <PopupWithForm
          name={"profile"}
          title={"Редактировать профиль"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-container">
            <label className="popup__label">
              <input
                type="text"
                id="name"
                className="popup__input popup__input_type_info popup__input_type_name"
                name="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="name-error popup__error"></span>
            </label>
            <label className="popup__label">
              <input
                type="text"
                id="job"
                className="popup__input popup__input_type_info popup__input_type_job"
                name="job"
                placeholder="О себе"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="job-error popup__error"></span>
            </label>
          </fieldset>
        </PopupWithForm>

        {/* форма создания карточки */}
        <PopupWithForm
          name={"place"}
          title={"Новое место"}
          buttonValue={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-container">
            <label className="popup__label">
              <input
                type="text"
                id="title"
                className="popup__input popup__input_type_info popup__input_type_title"
                name="name"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="title-error popup__error"></span>
            </label>
            <label className="popup__label">
              <input
                type="url"
                id="link"
                className="popup__input popup__input_type_info popup__input_type_link"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="link-error popup__error"></span>
            </label>
          </fieldset>
        </PopupWithForm>

        {/* форма подтверждения удаления */}
        <PopupWithForm
          name={"confirm"}
          title={"Вы уверены?"}
          buttonValue={"Да"}
        ></PopupWithForm>

        {/* форма редактора аватара */}
        <PopupWithForm
          name={"avatar"}
          title={"Обновить аватар"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-container">
            <label className="popup__label">
              <input
                type="url"
                id="avatar"
                className="popup__input popup__input_type_info popup__input_type_link"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="avatar-error popup__error"></span>
            </label>
          </fieldset>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

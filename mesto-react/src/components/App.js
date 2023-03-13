import '../index.css';
import Header from './Header/Header';
import Main from '../Main/Main';
import Footer from './Footer/Footer';

function App() { 
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
      
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__close-button button" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" method="POST" name="profileForm" noValidate>
            <fieldset className="popup__input-container">
              <label className="popup__label">
                <input type="text" id="name" className="popup__input popup__input_type_info popup__input_type_name" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
                <span className="name-error popup__error"></span>
              </label>
              <label className="popup__label">
                <input type="text" id="job" className="popup__input popup__input_type_info popup__input_type_job" name="job" placeholder="О себе" required minLength="2" maxLength="200" />
                <span className="job-error popup__error"></span>
              </label>
            </fieldset>
            <input type="submit" className="button popup__input popup__input_type_save" value="Сохранить" />
          </form>
        </div>
      </div>

      <div className="popup popup_type_place">
        <div className="popup__container">
          <button className="popup__close-button button" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" method="POST" name="placeForm" noValidate>
            <fieldset className="popup__input-container">
              <label className="popup__label">
                <input type="text" id="title" className="popup__input popup__input_type_info popup__input_type_title" name="name" placeholder="Название" required minLength="2" maxLength="30" />
                <span className="title-error popup__error"></span>
              </label>
              <label className="popup__label">
                <input type="url" id="link" className="popup__input popup__input_type_info popup__input_type_link" name="link" placeholder="Ссылка на картинку" required />
                <span className="link-error popup__error"></span>
              </label>
            </fieldset>
            <input type="submit" className="button popup__input popup__input_type_save" value="Создать" />
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <figure className="popup__image-container">
          <button className="popup__close-button button" type="button"></button>
          <img className="popup__image" src="#" alt="Фото" />
          <figcaption className="popup__image-title"></figcaption>
        </figure>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form">
            <input type="submit" className="button popup__input popup__input_type_save" value="Да" />
          </form>
          <button className="popup__close-button button" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close-button button" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" method="POST" name="avatarForm" noValidate>
            <fieldset className="popup__input-container">
              <label className="popup__label">
                <input type="url" id="avatar" className="popup__input popup__input_type_info popup__input_type_link" name="avatar" placeholder="Ссылка на картинку" required />
                <span className="avatar-error popup__error"></span>
              </label>
            </fieldset>
            <input type="submit" className="button popup__input popup__input_type_save" value="Сохранить" />
          </form>
        </div>
      </div>

      <template id="card-template">
        <article className="card">
          <button className="card__delete-button button" type="button"></button>
          <img className="card__image" src="#" alt="Фото" />
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button className="card__like-button button" type="button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>

    </div>
  );
}

export default App;

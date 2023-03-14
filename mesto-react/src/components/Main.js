import React from 'react';
import { api } from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар пользователя"
            />
            <button
              className="profile__avatar-button button"
              type="button"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards">
        {cards.map((item) => {
          return (
            <article className="card" key={item._id}>
              <button
                className="card__delete-button button"
                type="button"
              ></button>
              <img className="card__image" src={item.link} alt="Фото" />
              <div className="card__description">
                <h2 className="card__title">{item.name}</h2>
                <div className="card__like-container">
                  <button
                    className="card__like-button button"
                    type="button"
                  ></button>
                  <p className="card__like-counter">{item.likes.length}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;

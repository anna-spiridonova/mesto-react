function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <article className="card">
      <button
        className="card__delete-button button"
        type="button"
      ></button>
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button button"
            type="button"
          ></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
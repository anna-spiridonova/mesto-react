function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__image-container">
        <button className="popup__close-button button" type="button"></button>
        <img className="popup__image" src="#" alt="Фото" />
        <figcaption className="popup__image-title"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
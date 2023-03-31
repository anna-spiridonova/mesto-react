import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const nameRef = useRef();
  const linkRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
    nameRef.current.value = '';
    linkRef.current.value = ''
  }

  return (
    <PopupWithForm
      name={"place"}
      title={"Новое место"}
      buttonValue={"Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
            ref={nameRef}
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
            ref={linkRef}
          />
          <span className="link-error popup__error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

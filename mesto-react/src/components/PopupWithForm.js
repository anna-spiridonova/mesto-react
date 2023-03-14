import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <input
            type="submit"
            className="button popup__input popup__input_type_save"
            value={props.buttonValue}
          />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

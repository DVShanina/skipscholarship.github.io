import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

export default function Header() {
    return (
        <header className="header">
            <div className="header__link">
                <Link to ="/">Прогуляй стипендию!</Link>
            </div>
            <form className="header__form">
                <label className="header__form__lable" for="header__form__input" >Размер стипендии </label> 
                <input className="header__form__input" type="text" name="header__form__input" /> 
                <p className="header__form__lable">₽</p>
            </form>
            <button className="header__button"> Добавить место </button>
        </header>
          )
    }

import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__link">
                <Link to ="/">Прогуляй стипендию!</Link>
            </div>
            <form className="header__form">
                <label className="header__label" for="header__input" >Размер стипендии: </label> 
                <input className="header__input" type="text" name="header__input" /> 
                <span className="header__label">₽</span>
            </form>
            <button className="header__button"> Добавить место </button>
        </header>
          )
    }

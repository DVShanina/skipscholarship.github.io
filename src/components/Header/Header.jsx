import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
    const [scholarshipValue, setScholarship] = useState('2000')
    const handleChangeScholarship = (value) => {
        setScholarship(value)
    }

    return (
        <header className="header">
            <div className="header__link">
                <Link to ="/">Прогуляй стипендию!</Link>
            </div>
            <form className="header__form">
                <label className="header__label" for="header__input" >Размер стипендии: </label> 
                <input 
                id="scholarship"
                className="header__input" 
                type="text" 
                name="header__input"
                value={scholarshipValue}
                onChange={(event) => setScholarship(event.target.value)}
                /> 
                <span className="header__label">₽</span>
            </form>
            <button className="header__button"> Добавить место </button>
        </header>
          )
    }

import React from "react";
import { Link } from "react-router-dom";
 
export default function Header() {
    return (
        <header className="header-block">
            <div className="header-block_link">
                <Link to ="/">Прогуляй стипендию!</Link>
            </div>
            <form className="header-block_form">
                <label className="header-block_form_lable" for="header-block_form_input" >Размер стипендии </label> 
                <input className="header-block_form_input" type="text" name="header-block_form_input" /> 
                <p className="header-block_form_lable">₽</p>
            </form>
            <button className="header-block_button">
                <Link to ="/Edit"> Добавить место </Link>
            </button>
        </header>
          )
    }

import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import "./Header.scss";
import setValue from "../../store/actions/scholarshipValueAction";

export function Percent ({check}) {
   const scholarship = document.getElementById("scholarship").value;
   if (scholarship == 0) {
    return 0
   }
    else return parseInt(check*100/scholarship)
   } 

export function Header() {

    const currentValue = useSelector(state => state.currentValue)
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(setValue);
      };
  
    //   const [scholarshipValue, setScholarship] = useState('2000')
     
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
                value={currentValue}
                onChange={handleChange}
                /> 
             
                <span className="header__label">₽</span>
            </form>
            <button className="header__button"> Добавить место </button>
        </header>
          )
    }

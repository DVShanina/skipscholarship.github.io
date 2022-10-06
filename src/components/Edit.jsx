import { render } from "@testing-library/react";
import React from "react";
import {BrowserRouter, Route, Link } from "react-router-dom";

  export default function Edit() {
    return  ( 
  <section className="Edit">
    
    <div className="Edit-return">
      <Link to ="/" className="Edit-return_Link"> « Вернуться к списку </Link>
    </div>

    <div className="Edit-h1">
      Добавление места
    </div>

    <form className="Edit-form">
       <section className="Edit-form_blocks Edit-form_blocks_info">
          <div className="Edit-form_blocks_block">
           <p className="Edit-form_blocks_block_lable">Название:</p>
           <input className="Edit-form_blocks_block_input" placeholder="Введите название места"></input>
          </div>
          <div className="Edit-form_blocks_block">
           <p className="Edit-form_blocks_block_lable">Адрес:</p>
           <input className="Edit-form_blocks_block_input" placeholder="Введите точный адрес места"></input>
          </div>
          <div className="Edit-form_blocks_block">
           <p className="Edit-form_blocks_block_lable">Средний чек:</p>
           <input className="Edit-form_blocks_block_input" placeholder="Введите размер среднего чека,руб."></input>
          </div>
          <div className="Edit-form_blocks_block">
           <p className="Edit-form_blocks_block_lable">Категория:</p>
           <select className="Edit-form_blocks_block_select">
	           <option>Бар</option>
	           <option>Кафе</option>
	           <option>Ресторан</option>
	           <option>Кофейня</option>
           </select>
          </div>
          <div className="Edit-form_blocks_block">
           <p className="Edit-form_blocks_block_lable">Фото:</p>
           <input className="Edit-form_blocks_block_input" type="url" id="URL"></input>
           <div className="Edit-form_blocks_block_img" id="photo"></div>
          </div>
       </section>

       <section className="Edit-form_blocks Edit-form_blocks_plase">
          <div className="Edit-form_blocks_block">
           <p className="Edit-form_blocks_block_lable">Укажите место на карте:</p>
           <div className="Edit-form_blocks_block_Map"></div>
          </div>
       </section>
     </form>

  </section>
    )
    }
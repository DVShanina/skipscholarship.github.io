import React from "react";
import {BrowserRouter, Route, Link } from "react-router-dom";

export default function New_comment (){
  return (
    <section className="New_comment">
      <h1 className="New_comment_h1">Оставить отзыв</h1>
      <form className="New_comment_form">
        <div className="New_comment_form_block">
          <p className="New_comment_form_block_lable">Имя:</p>
          <input className="New_comment_form_block_input New_comment_form_block_input_name" placeholder="Введите свое имя"></input>
        </div>
        <div className="New_comment_form_block">
          <p className="New_comment_form_block_lable">Текст отзыва:</p>
          <input className="New_comment_form_block_input New_comment_form_block_input_text" placeholder=""></input>
        </div>
        <div className="New_comment_form_block">
          <div className="New_comment_form_block_submit">
        <p className="New_comment_form_block_submit_lable">Оцените заведение:</p>
        <button className="New_comment_form_block_submit_button">Отправить отзыв</button>
        </div>
        </div>
      </form>
    </section>
    )
}
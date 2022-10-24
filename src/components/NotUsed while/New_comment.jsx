import React from "react";


export default function New_comment (props){
  if (!props.show) {
    return null
  }
  return (
    <div className="modal" onClick={props.onClise}>
    <section className="New_comment" onClick={e => e.stopPropagation()}>
    <button onClick={props.onClose} className="New_comment_button_close">X</button>
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
    </div>
    )
}

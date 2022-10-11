import React, {useState} from "react";
import {BrowserRouter, Route, Link } from "react-router-dom";
import New_comment from "./New_comment";

export default function Detail(){
  const [show, setShow] = useState(false)
  
  return  ( 
    <section className="Edit">
      
      <div className="Edit-return">
        <Link to ="/" className="Edit-return_Link"> « Вернуться к списку </Link>
      </div>
  
      <div className="Edit-h1">
        Название места
      </div>
    <section className="Details">
    <section className="Detail">
      <div className="Detail-info">
        <p className="Detail-info_sum">Средний чек:</p>
        <p className="Detail-info_sum">Здесь можно прогулять:</p>
      </div>
      <div className="Detail-info">
        <div className="Detail-info_photo"></div>
              </div>
      <div className="Detail-info">
        <div className="Detail-info_Map"></div>
      </div>
    </section>

    <section className="Detail">
      <div className="Detail-info">
     <div className="Detail-info_title">
     <p className="Detail-info_title_name">Отзывы:</p>
     <button className="Detail-info_title_button" onClick = {() => setShow(true)}> Написать отзыв
     {/* <Link to ="/New_comment"> Написать отзыв </Link> */}
     <New_comment onClose={() => setShow(false)} show={show}/>
       </button>
       </div>
     <div className="Detail-info_review">
      <p className="Detail-info_review_name">Destroyer666</p>
      <div className="Detail-info_review_context"></div>
     </div>
     <div className="Detail-info_review">
      <p className="Detail-info_review_name">elena_polivoda</p>
      <div className="Detail-info_review_context"></div>
     </div>
     <div className="Detail-info_review">
      <p className="Detail-info_review_name">Елизавета С.</p>
      <div className="Detail-info_review_context"></div>
     </div>
     <div className="Detail-info_review">
      <p className="Detail-info_review_name">Andrey P</p>
      <div className="Detail-info_review_context"></div>
     </div>
     </div>
    </section>
    </section>
      </section>
      )
}


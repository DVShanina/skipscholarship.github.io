import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

export default function Filteres() {
  return (
       <section className="Filteres">

      <section className="Filter">
        <div className="Filter-elem Filter-elem_elem1">
          <p className="Filter-elem_label">Сколько процентов?</p>
          <div className="Filter-elem_block"></div>
        </div>
        <div className="Filter-elem Filter-elem_elem2">
          <p className="Filter-elem_label">Как:</p>
          <div className="Filter-elem_block "></div>
        </div>
        <div className="Filter-elem Filter-elem_elem3">
          <p className="Filter-elem_label">Где:</p>
          <div className="Filter-elem_block"></div>
        </div>
      </section>

      <section className="Filter Filter_grey">
        <div className="Filter-elem">
          <p className="Filter-elem_label">Показано:</p>
         </div>
      </section>

      <section className="Filter Filter_grey1">
      <div className="Filter-Map">
      <Link to ="/Detail">Место</Link>
      </div>
      </section>
    </section>
    
    )
    }
import React from "react";
import Layout from "../components/Layout/Layout"
import "../scss/PlaceList.scss"
import Slider from "../components/Slider/Slider"
import  RatingStars  from "../components/Rating/Rating";

  export default function PlaceList() {
        
    return  ( 
      <Layout>
        <section className="filteres">
              <div className="filteres__group">
                <Slider/>    
                             
               </div>
              <div className="filteres__group filteres__group_260px">
                <RatingStars/>               
               </div>
              <div className="filteres__group filteres__group_260px">
                  <span className="filteres__lable">Где:</span>
                  <select className="filteres__select">
	                       <option>Бар</option>
	                       <option>Кафе</option>
	                       <option>Ресторан</option>
	                       <option>Кофейня</option>
                  </select>
               </div>
        </section>
      </Layout>        
     )
  }
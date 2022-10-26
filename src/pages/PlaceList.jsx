import React from "react";
import Layout from "../components/Layout/Layout"
import "../scss/PlaceList.scss"
import Slider from "../components/Slider/Slider"
import  RatingStars  from "../components/Rating/Rating";

  export default function PlaceList() {
        
    return  ( 
      <Layout>
        <section className="filters">
              <div className="filters__slider">
                <Slider/>    
                             
               </div>
              <div className="filters__rating">
                <RatingStars/>               
               </div>
              <div className="filters__place">
                  <span className="filters__lable">Где:</span>
                  <select className="filters__select">
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
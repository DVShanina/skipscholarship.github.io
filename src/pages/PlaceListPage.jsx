import React from "react";
import Layout from "../components/Layout/Layout"
import "../scss/PlaceListPage.scss"
import Slider from "../components/Slider/Slider"
import  RatingStars  from "../components/Rating/Rating";
import PlaceList from "../components/PlaceList/PlaceList";
import Map from "../components/Map/Map";

  export default function PlaceListPage() {
        
    return  ( 
      <Layout>
        <section className="filters">
              <div className="filters__slider">
                  <Slider/>               
              </div>
              <div className="filters__rating">
                  <span className="filters__label">Как:</span>
                  <RatingStars/>               
              </div>
              <div className="filters__place">
                  <span className="filters__label">Где:</span>
                  <select className="filters__select">
	                       <option>Бар</option>
	                       <option>Кафе</option>
	                       <option>Ресторан</option>
	                       <option>Кофейня</option>
                  </select>
               </div>
        </section>
        <article className="place-list">
          <span className="place-list__info">Показано:</span>
          <section className="place-list__location">
              <div className="place-list__map">
                <Map/>
              </div>
              <section className="place-list__scroll">
                <PlaceList/>
              </section> 
          </section>        
        </article>
      </Layout>        
     )
  }
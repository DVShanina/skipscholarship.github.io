import React from "react";
import "./PlaceCard.scss";
import { Rating } from 'react-simple-star-rating'
import Icons from "../Icon/Icons";
import { Percent } from "../Header/Header";

export default function PlaceCard({id, name, rating, review, check, category, address}) {
    
   return (
        <>
         <div className="place-card" key={id}>
              <div className="place-card__nameicons">
                  <div className="place-card__name">{name}</div>
                  <div className="place-card__icon">
                  <Icons name='edit' size='14'/>         
                  </div>
                  <div className="place-card__icon">
                  <Icons name='del' size='18'/>         
                  </div>
              </div>
              <div className="place-card__ratingreview">
                  <div className="place-card__rating">
                    <Rating
                    fillColor='#FF3333'
                    size={18}
                    initialValue={rating}
                    readonly
                  /> 
                  </div>
                  <div className="place-card__review">(Отзывов:{review})</div>
            </div>
            <div className="place-card__check">
                <span>Средний чек: </span>
                <span className="place-card__sum">
                {check} ₽ <Percent check={check}/> % стипендии)
                </span>
            </div>
            <div className="place-card__categoryaddress">
                 <div className="place-card__category">{category},</div>
                 <div className="place-card__address">{address}</div>
            </div>
          </div>
        
     </>

    );
    }

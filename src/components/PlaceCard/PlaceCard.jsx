import React from "react";
import "./PlaceCard.scss";
import { Rating } from 'react-simple-star-rating'
import Icons from "../Icon/Icons";
import { Percent } from "../Header/Header";

export default function PlaceCard({card}) {
    
   return (
        <>
         <div className="place-card">
              <div className="place-card__nameicons">
                  <div className="place-card__name">{card.name}</div>
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
                    initialValue={card.rating}
                    readonly
                  /> 
                  </div>
                  <div className="place-card__review">(Отзывов:{card.review})</div>
            </div>
            <div className="place-card__check">
                <span>Средний чек: </span>
                <span className="place-card__sum">
                {card.check} ₽ (<Percent check={card.check}/> % стипендии)
                </span>
            </div>
            <div className="place-card__categoryaddress">
                 <div className="place-card__category">{card.category},</div>
                 <div className="place-card__address">{card.address}</div>
            </div>
          </div>
        
     </>

    );
    }

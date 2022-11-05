import React, {useEffect, useState} from "react";
import "./PlaceCard.scss";
import RatingStars from "../Rating/Rating";
import { Rating } from 'react-simple-star-rating'
import edit from '../PlaceCard/edit.svg'
import del from '../PlaceCard/delete.svg'

export default function PlaceCard() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch('https://635a9c556f97ae73a6320355.mockapi.io/cards')
        .then((res) => res.json())
        .then((result) => {
          setCards(result);
        });
    }, []);

    const percent = (check) => {
    const scholarship = document.getElementById("scholarship").value;
    return parseInt(check*100/scholarship)
   } 

   return (
        <>
        {cards.map((card) => (
          <div className="place-card" key={card.id}>
              <div className="place-card__nameicons">
                  <div className="place-card__name">{card.name}</div>
                  <img className="place-card__icon" src={edit}></img>
                  <img className="place-card__icon" src={del}></img>
              </div>
              <div className="place-card__ratingreview">
                  <div className="place-card__rating">
                    <Rating
                    fillColor='#FF3333'
                    size={18}
                    initialValue={card.rating}
                    onClick={function noRefCheck(){}}
                    readonly
                  /> 
                  </div>
                  <div className="place-card__review">(Отзывов:{card.review})</div>
            </div>
            <div className="place-card__check">
                <span>Средний чек: </span>
                <span className="place-card__sum">
                {card.check} ₽ ({percent (card.check)}% стипендии)
                </span>
            </div>
            <div className="place-card__categoryaddress">
                 <div className="place-card__category">{card.category},</div>
                 <div className="place-card__address">{card.address}</div>
            </div>
          </div>
        ))}
     </>

    );
    }

import React, {useEffect, useState} from "react";
import './PlaceList.scss'
import PlaceCard from "../PlaceCard/PlaceCard";

export default function PlaceList() {
  const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch('https://635a9c556f97ae73a6320355.mockapi.io/cards')
        .then((res) => res.json())
        .then((result) => {
          setCards(result);
        });
    }, []);

  

  return (
  <>
  {cards.map((card) => (
  <PlaceCard
  key={card.id} 
  card = {card}
  />
  ))}
    </>

  )
}




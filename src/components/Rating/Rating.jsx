import React, {useState} from "react";
import { Rating } from 'react-simple-star-rating'

export default function RatingStars() {
    const [rating, setRating] = useState(0)
    const handleChangeRating = (rate) => {
    setRating(rate)
    }
    
    return (
      <>
      <span>Как:</span>
      <div className="filteres__range">
          <Rating
          onClick={handleChangeRating}
          fillColor='#FF3333'
          size={22}
        />
      </div>
      </>
    )
  }
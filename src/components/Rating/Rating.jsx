import React, {useState} from "react";
import { Rating } from 'react-simple-star-rating'

export default function RatingStars() {
    const [rating, setRating] = useState(0)
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
  
      // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)
  
    return (
      <>
      <span className="filteres__lable">Как:</span>
      <div className="filteres__renge">
          <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          /* Available Props */
          fillColor='#FF3333'
          size={22}
        />
      </div>
      </>
    )
  }
import React, {useState} from "react";
import ReactSlider from 'react-slider';
import "./Slider.scss"

export default function Slider() {
    const [value, setValue] = useState([0,100])
    const handleChangeValue = (valueNow) => {
        setValue(valueNow)
}
return(
<>
<span>
Сколько: {value[0]}% - {value[1]}% стипендии
</span>
<div>
<ReactSlider
 id="slider"
 className="horizontal-slider"
 thumbClassName="thumb-slider"
 trackClassName="track-slider"
 defaultValue={[0, 100]}
 ariaLabel={['Lower thumb', 'Upper thumb']}
 ariaValuetext={state => `Сколько: ${state.valueNow}`}
 onChange={handleChangeValue}
//  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
 pearling
 minDistance={10}
  />
  </div>
  </>
 )



}
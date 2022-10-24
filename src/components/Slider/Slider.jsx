import React from "react";
import ReactSlider from 'react-slider';
import "./Slider.scss"

export default function Slider() {
return(
<>
<span className="filteres__lable">
Сколько: {ReactSlider.ariaValuetext} {/* не понимаю, как это сделать, чтобы я не пробовала, не работает  */}
</span>
<div className="filteres__slider">
<ReactSlider
 id="slider"
 className="horizontal-slider"
 thumbClassName="example-thumb"
 trackClassName="example-track"
 defaultValue={[0, 100]}
 ariaLabel={['Lower thumb', 'Upper thumb']}
 ariaValuetext={state => `Сколько: ${state.valueNow}`}
//  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
 pearling
 minDistance={10}
  />
  </div>
  </>
 )



}
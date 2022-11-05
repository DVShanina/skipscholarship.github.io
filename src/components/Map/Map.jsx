import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';

 const MapPlace = () => (
  <YMaps>
    <div>
      <Map 
      defaultState={{ center: [54.19, 48.22], zoom: 9, }}
      width='100%'
      height='590px'
      />
    </div>
  </YMaps>
);

export default MapPlace;
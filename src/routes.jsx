import React from "react";
import {BrowserRouter, Route, Link, Routes } from "react-router-dom";
import EditPlace from "./pages/EditPlace";
import PlaceDetail from "./pages/PlaceDetail";
import PlaceList from "./pages/PlaceList";
import NotFound from "./pages/NotFound";

export default function RoutesPage() {
    return (
        <BrowserRouter>
     <div className="main-route-place">
      <Routes>
        <Route exact path='/' element={<PlaceList/>}/>
        <Route exact path='/place-detail/:placeId' element={<PlaceDetail/>}/>
        <Route exact path='/edit-place/:placeId' element={<EditPlace/>}/>
        <Route exact path='*' element={<NotFound/>} />
        </Routes>
     </div>
        </BrowserRouter>
    )
}

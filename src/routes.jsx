import React from "react";
import {BrowserRouter, Route, Link, Routes } from "react-router-dom";
import EditPlace from "./pages/EditPlace";
import PlaceDetail from "./pages/PlaceDetail";
import PlaceListPage from "./pages/PlaceListPage";
import NotFound from "./pages/NotFound";

export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PlaceListPage/>}/>
                <Route exact path='/place-detail/:placeId' element={<PlaceDetail/>}/>
                <Route exact path='/edit-place/:placeId' element={<EditPlace/>}/>
                <Route exact path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

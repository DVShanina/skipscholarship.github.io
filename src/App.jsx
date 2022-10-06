import React from "react";
import {BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Filteres from "./components/Filteres";
import Edit from "./components/Edit";
import Detail from "./components/Detail";
import New_comment from "./components/New_comment";

function App() {
  return (
    <BrowserRouter>
    <div className="Homepage">
      <header className="Homepage-header">
          <div className="Homepage-header_elem1">
              <Link to ="/">Прогуляй стипендию!</Link>
          </div>
          <form className="Homepage-header_elem2">
          <label for="Homepage-header_elem2-input">Размер стипендии </label> 
          <input type="text" name="Homepage-header_elem2-input" class="Homepage-header_elem2-input"/> 
          <p>р</p>
          </form>
          <button className="Homepage-header_elem3">
          <Link to ="/Edit"> Добавить место </Link>
            </button>
           </header>
    </div>

    <div className="main-route-place">
    <Routes>
      <Route exact path='/' element={<Filteres/>}/>
      <Route exact path='/Edit' element={<Edit/>}/>
      <Route exact path='/Detail' element={<Detail/>}/>
      <Route exact path='/New_comment' element={<New_comment/>}/>
     </Routes>
     </div>
   </BrowserRouter>
   );
   }

export default App;

import React from "react";
import { Link } from "react-router-dom";

  export default function NotFound() {
    return  ( 
  <div>
  <h2>NotFound</h2>
  <Link to ="/" className="NotFound">Вернуть на главную</Link>
  </div>
    )
  }

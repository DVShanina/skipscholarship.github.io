import React from "react";
import { Link } from "react-router-dom";

  export default function NotFound() {
    return  ( 
  <>
  <h2>NotFound</h2>
  <Link to ="/" className="not-found">Вернуться на главную</Link>
  </>
    )
  }

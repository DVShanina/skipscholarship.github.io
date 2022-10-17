import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

  export default function PlaceDetail() {
    return  ( 
      <React.Fragment>
        <section className="main">
        <Header/>
        <div className="content">PlaceDetail</div>
        <Footer/>
        </section>
        </React.Fragment>
      )
  }
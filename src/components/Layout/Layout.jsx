import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends React.Component {
    render(){
      return (
        <>
          <section className="main">
          <Header />
          <main className="content">{this.props.children}</main>
          <Footer />
          </section>
        </>
      )
    }
  }
  export default Layout;
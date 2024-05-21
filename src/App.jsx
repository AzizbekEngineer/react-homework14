import { Component, Fragment } from "react";
import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
import Hero from "./assets/components/hero/Hero";
import Product from "./assets/components/product/Product";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Product />
        <Footer />
      </Fragment>
    );
  }
}

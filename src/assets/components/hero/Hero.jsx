import { Component } from "react";
import heroImg from "../../images/hero.webp";
import "./hero.scss";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero container">
        <div className="hero__info">
          <h2 className="hero__title">ONE PRICE</h2>
          <h4 className="hero__desc">For order forms 3 to 10 items</h4>
          <button className="hero__btn">
            Buy <span>{">"}</span>
          </button>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="" />
        </div>
      </section>
    );
  }
}

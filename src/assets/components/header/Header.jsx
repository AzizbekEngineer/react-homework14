import { Component } from "react";
import heroLogo from "../../images/logo.png";
import kubLogo from "../../images/kub.svg";
import savatLogo from "../../images/savat.svg";
import bookLogo from "../../images/book.svg";
import smailLogo from "../../images/smail.svg";
import "./header.scss";

export default class Header extends Component {
  constructor() {
    super(),
      (this.state = {
        bool: false,
      });
  }
  render() {
    return (
      <header className="header">
        <nav className="container header__container navbar">
          <h2 className="header__logo">
            <a href="#">
              <img src={heroLogo} alt="" />
            </a>
          </h2>
          <div className="header__right">
            <div className="header__icons">
              <div className="header__icon">
                <img src={bookLogo} alt="" />
              </div>
              <span>Catalog</span>
            </div>
            <form action="" className="header__form">
              <input type="text" placeholder="Search..." />
              <button className="header__form__btn">Find</button>
            </form>
            <div className="header__icons">
              <div className="header__icon">
                <img src={kubLogo} alt="" />
              </div>
              <span>Orders</span>
            </div>
            <div className="header__icons">
              <div className="header__icon">
                <img src={savatLogo} alt="" />
              </div>
              <span>Cart</span>
            </div>
            <div className="header__icons">
              <div className="header__icon">
                <img src={smailLogo} alt="" />
              </div>
              <span>Sign in</span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

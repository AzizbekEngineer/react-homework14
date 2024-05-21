import { Component } from "react";
import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <ul className="footer__info__list">
              <li className="footer__info__item footer__item__title">
                ShOPPING WITH US
              </li>
              <li className="footer__info__item ">Support</li>
              <li className="footer__info__item ">Sales Calendar</li>
              <li className="footer__info__item ">AliExpress Guide</li>
            </ul>
            <ul className="footer__info__list">
              <li className="footer__info__item footer__item__title">
                COLLABORATE WITH US
              </li>
              <li className="footer__info__item ">Sell on AliExpress</li>
              <li className="footer__info__item ">Affiliate program </li>
              <li className="footer__info__item ">Blog for sellers</li>
            </ul>

            <ul className="footer__info__list">
              <li className="footer__info__item footer__item__title">
                ABOUT COMPANY
              </li>
              <li className="footer__info__item ">Press center</li>
              <li className="footer__info__item ">AliTech</li>
              <li className="footer__info__item ">Blog about company</li>
            </ul>
            <ul className="footer__info__list">
              <li className="footer__info__item footer__item__title">
                CONTACT US
              </li>
              <li className="footer__info__item ">VK</li>
              <li className="footer__info__item ">Одноклассники</li>
              <li className="footer__info__item ">Telegram</li>
              <li className="footer__info__item ">Dzen</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

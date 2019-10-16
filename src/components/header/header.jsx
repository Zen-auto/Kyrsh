import React, {Component} from 'react';
import './header.scss';
import ToCartBtn from './to-cart-btn';
import { Link } from 'react-router-dom';

export default class Header extends Component {


  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__container">
            <Link className="logo" to="/">E-shop</Link>
            <div className="header__actions">
              <ToCartBtn />
            </div>
          </div>
        </div>
      </header>
    )
  }
}
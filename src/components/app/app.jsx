import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './app.scss';
import Header from '../header'
import Sidebar from '../sidebar'
import GoodsContainer from '../goods-container'

export default class App extends Component {


  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <div className="container">
            <div className="main-content">
              <Sidebar />
              <GoodsContainer />
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            Footer
          </div>
        </footer>
      </div>
    )
  }
}
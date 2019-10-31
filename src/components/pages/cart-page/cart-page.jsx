import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Breadcrumbs from '../../breadcrumbs';

import './cart-page.scss';

class CartPage extends Component {

  state = {

  };




  render() {


    return(
      <div>
        <h1>Корзина</h1>


      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    goodsList: state.goods
  }
};

export default connect(mapStateToProps)(CartPage)
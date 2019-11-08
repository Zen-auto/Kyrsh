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
    const { items, total } = this.props;
    console.log(items)


    const renderRow = (item, index) => {
      const { id, title, price } = item;
      return (
        <tr key={ id }>
          <td>{ index + 1 }</td>
          <td>{ title }</td>
          <td>{ price }</td>
        </tr>
      )
    };


    return(
      <div>
        <h1>Корзина</h1>
        <table className="cart-table">
          <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
          </thead>

          <tbody>
            {
              items.map(renderRow)
            }
          </tbody>
        </table>

        <div className="total">
          Total: ${ total }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.orderTotal,
  }
};

export default connect(mapStateToProps)(CartPage)
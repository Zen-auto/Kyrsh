import React, {Component} from 'react';
import './to-cart-btn.scss';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

class ToCartBtn extends Component {

  render() {
    const { productsInCart } = this.props;

    return (
      <Link className="to-cart-btn" to="/cart" title="В корзину">
        <span className="to-cart-btn__quantity">
          { productsInCart }
        </span>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart
  }
};

export default connect(mapStateToProps)(ToCartBtn)
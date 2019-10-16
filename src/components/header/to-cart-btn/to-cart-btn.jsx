import React, {Component} from 'react';
import './to-cart-btn.scss';
import {connect} from "react-redux";

class ToCartBtn extends Component {

  render() {
    const { productsInCart } = this.props;

    return (
      <a className="to-cart-btn" href="" title="В корзину">
        <span className="to-cart-btn__quantity">
          22
        </span>
      </a>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state
  }
};

export default connect(mapStateToProps)(ToCartBtn)
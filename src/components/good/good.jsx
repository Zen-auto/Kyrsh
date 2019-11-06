import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import './good.scss';

class Good extends Component {

  render() {
    const { onAddedToCart } = this.props;
    const { id, categoryId, title, price, image, inCart } = this.props.good;
    const buyBtn = inCart ?
      <Link className='btn-light' to='/cart' title='Перейти в корзину'>Оформить</Link> :
      <button className='btn'
              onClick={ () => { onAddedToCart() }}>Купить
      </button>;

    return (
      <div className="good">

        <Link to={ `${categoryId}/${id}` } className="good__image-container" title={ title }>
          <img className="good__image" src={ image } alt={ title } />
        </Link>
        <div className="good__footer">
          <div className="good__descr">
            <Link to={ `${categoryId}/${id}` } className="good__title" title={ title }>{ title }</Link>
          </div>
          <div className="good__actions">
            <div className="good__price">$ { price }</div>

            { buyBtn }

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.goods
  }
};

export default connect(mapStateToProps)(Good)

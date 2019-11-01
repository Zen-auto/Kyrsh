import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './good.scss';

class Good extends Component {

  state = {
    inBasket: false
  };

  togglePuttingToCart() {
    this.setState((state) => {
      return {
        inBasket: !state.inBasket
      }
    })
  }

  render() {

    const { inBasket } = this.state;
    const { onAddedToCart } = this.props;
    const { id, categoryId, title, price, image } = this.props.good;
    const buyBtn = inBasket ? { class: 'btn-light', text: 'В корзине'} : { class: 'btn', text: 'Купить'};


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
            <button
              className={ buyBtn.class }
              onClick={ onAddedToCart }>
              { buyBtn.text }
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Good;
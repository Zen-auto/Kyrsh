import React, {Component} from 'react';

import './good.scss';

export default class Good extends Component {

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
    const { title, price, image } = this.props.good;
    const buyBtn = inBasket ? { class: 'btn-light', text: 'В корзине'} : { class: 'btn', text: 'Купить'};


    return (
      <div className="good">

        <a href="#" className="good__image-container">
          <img className="good__image" src={ image } alt={ title } />
        </a>
        <div className="good__descr">
          <a href="#" className="good__title">{ title }</a>
        </div>
        <div className="good__actions">
          <div className="good__price">$ { price }</div>
          <button
            className={ buyBtn.class }
            onClick={ () => this.togglePuttingToCart() }>
            { buyBtn.text }
          </button>
        </div>
      </div>
    )
  }
}
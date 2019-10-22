import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './detail-page.scss';

class DetailPage extends Component {

  findCurrentGood(goodsList, itemId) {
    for (let key in goodsList) {
      goodsList[key].forEach((category) => {
        if (category.id === itemId) {
          this.currentGood = category
        }
      })
    }
  }

  render() {
    const { goodsList, itemId } = this.props;

    this.findCurrentGood(goodsList, itemId);
    const { title, price, description, image } = this.currentGood;

    return(
      <div>
        <div className="detail-top">
          <div className="detail-top__image-wrapper">
            <img
              src={ image }
              alt={ title }
              title={ title }
              className="detail-top__image"
            />
          </div>
          <div className="detail-top__info">
            <h2 className="detail-top__title">{ title }</h2>
            <div className="detail-top__buy-block">
              <div className="detail-top__price">$ { price }</div>
              <button className="detail-top__btn btn">Купить</button>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="tabs">
            <div className="tabs__menu">
              <Link className="tabs__link">Отзывы</Link>
              <Link className="tabs__link">Характеристики</Link>
              <Link className="tabs__link tabs__link--active">Описание</Link>
            </div>
            <div className="tabs__content">
              <div className="tabs__content-item">
                <h3 className="info__title">Описание</h3>
                <div className="info__text">
                  { description }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    goodsList: state.goods
  }
};

export default connect(mapStateToProps)(DetailPage)
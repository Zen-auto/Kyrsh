import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Breadcrumbs from '../../breadcrumbs';

import './detail-page.scss';
import {goodAddedToCart} from "../../../store/actions";

class DetailPage extends Component {

  findCurrentGood(goodsList, itemId) {
    for (let key in goodsList) {
      goodsList[key].forEach(category => {
        if (category.id === itemId) {
          this.currentGood = category
        }
      })
    }
  }

  findCurrentTab() {
    for (let key in this.tabs) {
      if (key === this.props.currentTab) {
        this.activeTab = this.tabs[key];
      }
    }
  }

  togglePuttingToCart() {
    this.setState((state) => {
      return {
        inCart: !state.inCart
      }
    })
  }


  render() {
    const { goodsList, itemId, categoryId, currentTab, onAddedToCart } = this.props;

    this.findCurrentGood(goodsList, itemId);

    this.tabs = {
      opinion: {
        tabId: 'opinionTab',
        tabTitle: 'Отзывы',
        tabPathTo: `/${ this.props.categoryId }/${ this.props.itemId }/opinion`,
        tabContent: this.currentGood.opinion
      },
      characteristics: {
        tabId: 'characteristicsTab',
        tabTitle: 'Характеристики',
        tabPathTo: `/${ this.props.categoryId }/${ this.props.itemId }/characteristics`,
        tabContent: this.currentGood.characteristics
      },
      description: {
        tabId: 'descriptionTab',
        tabTitle: 'Описание',
        tabPathTo: `/${ this.props.categoryId }/${ this.props.itemId }`,
        tabContent: this.currentGood.description
      }
    };


    this.findCurrentTab();

    const { id, title, price, description, image, inCart } = this.currentGood;

    const buyBtn = inCart ?
      <Link className='detail-top__btn btn-light' to='/cart' title='Перейти в корзину'>Оформить</Link> :
      <button className='detail-top__btn btn'
              onClick={ () => {
                onAddedToCart(id, categoryId)
              }}>Купить
      </button>;




    return(
      <div>
        <Breadcrumbs
          links={[
            {
              id: 1,
              title: 'Каталог',
              path: '/'
            },
            {
              id: 2,
              title: categoryId,
              path: `/${ categoryId }`
            },
            {
              id: 3,
              title: title
            }
          ]}
        />

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

              { buyBtn }

            </div>
          </div>
        </div>

        <div className="info">
          <div className="tabs">
            <div className="tabs__menu">
              {
                Object.keys(this.tabs).map(tab => {
                  const tabClass = classNames('tabs__link', {
                    'tabs__link--active' : tab === currentTab
                  });

                  return (
                    <Link key={ this.tabs[tab].tabId }
                          to={  this.tabs[tab].tabPathTo }
                          className={ tabClass } >
                      { this.tabs[tab].tabTitle }
                    </Link>
                  )
                })
              }
            </div>
            <div className="tabs__content">

              <h3 className="info__title">{ this.activeTab.tabTitle }</h3>
              <div className="info__text">
                { this.activeTab.tabContent }
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedToCart: (id, categoryId) => dispatch(goodAddedToCart(id, categoryId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
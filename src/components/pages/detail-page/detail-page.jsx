import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './detail-page.scss';

class DetailPage extends Component {

  state = {
    tabs: {
      opinion: {
        tabId: 'opinionTab',
        tabTitle: 'Отзывы',
        tabPathTo: `${ this.props.pathName }/opinion`,
        tabContent: 'Контент отзывов'
      },
      characteristics: {
        tabId: 'characteristicsTab',
        tabTitle: 'Характеристики',
        tabPathTo: `${ this.props.pathName }/characteristics`,
        tabContent: 'Контент Характеристик'
      },
      description: {
        tabId: 'descriptionTab',
        tabTitle: 'Описание',
        tabPathTo: `${ this.props.pathName }`,
        tabContent: 'Контент описания'
      }
    }
  };

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
    for (let key in this.state.tabs) {
      if (key === this.props.currentTab) {
        this.activeTab = this.state.tabs[key];
      }
    }
  }


  render() {
    const { goodsList, itemId, currentTab, pathName } = this.props;

    this.findCurrentGood(goodsList, itemId);
    this.findCurrentTab();

    const { title, price, description, image } = this.currentGood;
    const { tabs } = this.state;

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
              {
                Object.keys(tabs).map(tab => {
                  const tabClass = classNames('tabs__link', {
                    'tabs__link--active' : tab === currentTab
                  });

                  return (
                    <Link key={ tabs[tab].tabId }
                          to={  tabs[tab].tabPathTo }
                          className={ tabClass } >
                      { tabs[tab].tabTitle }
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

export default connect(mapStateToProps)(DetailPage)
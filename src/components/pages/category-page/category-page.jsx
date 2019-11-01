import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Sidebar from '../../sidebar';

import { PhonesList, AbstractList, TabletsList, PcList, TvList } from '../../lists';
import Good from '../../good';
import Spinner from '../../spinner';
import Breadcrumbs from '../../breadcrumbs';

import './category-page.scss';
// import TabletsList from "../../lists/tablets-list";

class CategoryPage extends Component {

  state = {
    sortOrder: 'increase',
    toWhichPcNumberDisplayed: 8,
    toWhichTabletNumberDisplayed: 8,
    toWhichPhoneNumberDisplayed: 8,
    toWhichTvNumberDisplayed: 8,
    // loading: false,
    // canSendAjax: true
  };

  handleChange(e) {
    this.setState({
      sortOrder: e.target.value
    });
  }

  sortGoods() {
    if (this.state.sortOrder === 'decrease') {
      // сортировка по убыванию
      this.props.goodList.sort((prev, next) => next.price - prev.price)
    } else {
      // сортировка по возрастанию
      this.props.goodList.sort((prev, next) => prev.price - next.price)
    }
  }


  render() {
    const { goodList, title, categoryId } = this.props;

    let goodsListBlock = null;
    console.log(categoryId)
    switch(categoryId) {
      case 'tablets':
        goodsListBlock = <TabletsList goodList={ goodList } />;
        break;
      case 'pc':
        goodsListBlock = <PcList goodList={ goodList } />;
        break;
      case 'phones':
        goodsListBlock = <PhonesList goodList={ goodList } />;
        break;
      case 'tv':
        goodsListBlock = <TvList goodList={ goodList } />;
        break;

    }

    return(
      <Fragment>
        <Breadcrumbs
          links={[
            {
              id: 1,
              title: 'Каталог',
              path: '/'
            },
            {
              id: 2,
              title: title
            }
          ]}
        />

        <div className="main-content">
          <Sidebar />
          <div className="goods-container">
            <div className="goods-container__top">
              <h2 className="goods-container__title">{ title }</h2>
              <select className="goods-container__sorting" onChange={ e => this.handleChange(e) } >
                <option value="increase">Сначала дешевые</option>
                <option value="decrease">Сначала дорогие</option>
              </select>
            </div>

            { this.sortGoods() }

            {
              goodsListBlock
            }

          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(CategoryPage);
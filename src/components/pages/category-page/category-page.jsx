import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Sidebar from '../../sidebar/index'
import Good from '../../good/index';

import './category-page.scss';

class CategoryPage extends Component {

  state = {
    sortOrder: 'increase'
  };

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      sortOrder: value
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
    const { goodList, title, location } = this.props;

    return(
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

          <div className="goods-list">
            {
              goodList.map(good => {
                return (
                  <Good key={ good.id } good={ good } categoryUrl={ location.pathname }/>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CategoryPage);
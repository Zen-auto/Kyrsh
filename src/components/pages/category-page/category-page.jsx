import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Sidebar from '../../sidebar/index'
import Good from '../../good/index';

import './category-page.scss';

class CategoryPage extends Component {

  render() {
    const { goodList, title } = this.props;

    return(
      <div className="main-content">
        <Sidebar />
        <div className="goods-container">
          <div className="goods-container__top">
            <h2 className="goods-container__title">{ title }</h2>
          </div>
          <div className="goods-list">
            {
              goodList.map(good => {
                return (
                  <Good key={ good.id } good={ good}/>
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
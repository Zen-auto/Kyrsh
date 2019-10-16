import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Good from '../good';

class TabletsList extends Component {

  render() {
    const { tablets } = this.props;

    return(
      <Fragment>
        <h2>Tablets list</h2>
        <div className="goods-list">
          {
            tablets.map(good => {
              return (
                <Good key={ good.id } good={ good}/>
              )
            })
          }
        </div>
      </Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    tablets: state.goods.tablets
  }
};

export default connect(mapStateToProps)(TabletsList)
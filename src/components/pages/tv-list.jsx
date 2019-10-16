import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Good from '../good';

class TvList extends Component {

  render() {
    const { tv } = this.props;

    return(
      <Fragment>
        <h2>TV list</h2>
        <div className="goods-list">
          {
            tv.map(good => {
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
    tv: state.goods.tv
  }
};

export default connect(mapStateToProps)(TvList)
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Good from '../good';

class PhonesList extends Component {

  render() {
    const { phones } = this.props;

    return(
      <Fragment>
        <h2>Phones list</h2>
        <div className="goods-list">
          {
            phones.map(good => {
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
    phones: state.goods.phones
  }
};

export default connect(mapStateToProps)(PhonesList)
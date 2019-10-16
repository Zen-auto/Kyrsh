import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Good from '../good';

class PcList extends Component {

  render() {
    const { pc } = this.props;

    return(
      <Fragment>
        <h2>PC list</h2>
        <div className="goods-list">
          {
            pc.map(good => {
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
    pc: state.goods.pc
  }
};

export default connect(mapStateToProps)(PcList)
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TabletsList, PcList, PhonesList, TvList }from '../pages/';
import './goods-container.scss';


class GoodsContainer extends Component {

  render() {

    return (
      <div className="goods-container">

        <Route path="/" exact={ true }
               render={ () => <h2>all goods</h2>} />

        <Route path="/pcs" exact={ true }
               component={ PcList } />

        <Route path="/tablets" exact={ true }
               component={ TabletsList } />

        <Route path="/phones" exact={ true }
               component={ PhonesList } />

        <Route path="/tv" exact={ true }
               component={ TvList } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

export default connect(mapStateToProps)(GoodsContainer)
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.scss';
import Header from '../header';
import Sidebar from '../sidebar';
import Spinner from '../spinner';
import CategoriesList from '../categories-list';
import { CategoryPage, DetailPage } from '../pages';

import { withGoodstoreService } from '../hoc';
import { goodsLoaded, goodsRequested } from '../../store/actions';
import { compose } from "../../utils/compose";

class App extends Component {

  componentDidMount() {
    const { goodstoreService, goodsLoaded, goodsRequested } = this.props;
    goodsRequested();
      goodstoreService.getGoods()
        .then(data => goodsLoaded(data));
  }

  render() {

    const { goodsList, loading } = this.props;

    return (
      <div className="wrapper">
        <Header />
        <main>
          <div className="container">

            { loading ? (

              <Spinner />

            ) : (

              <Switch>

                <Route path="/" exact={true}
                       component={ CategoriesList }/>

                <Route path="/pc/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } />
                }}/>

                <Route path="/tablets/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } />
                }}/>

                <Route path="/phones/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } />
                }}/>

                <Route path="/tv/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } />
                }}/>



                <Route path="/pc"
                       render={({ location }) => <CategoryPage goodList={goodsList.pc} title="PC" location={ location } exact={true} />} />

                <Route path="/tablets"
                       render={({ location }) => <CategoryPage goodList={goodsList.tablets} title="Tablets" location={ location } exact={true} />} />

                <Route path="/phones"
                       render={({ location }) => <CategoryPage goodList={goodsList.phones} title="Phones" location={ location } exact={true} />} />

                <Route path="/tv"
                       render={({ location }) => <CategoryPage goodList={goodsList.tv} title="TV" location={ location } exact={true} />} />


                <Route render={() => <h2>Page not found</h2>} />


              </Switch>

            )}

          </div>
        </main>
        <footer className="footer">
          <div className="container">
            Footer
          </div>
        </footer>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    goodsList: state.goods,
    loading: state.loading
  }
};

const mapDispatchToProps = {
  goodsLoaded,
  goodsRequested
};

export default compose(
  withGoodstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(App);


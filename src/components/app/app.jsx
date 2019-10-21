import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.scss';
import Header from '../header';
import Sidebar from '../sidebar';
import Spinner from '../spinner';
import CategoriesList from '../categories-list';
import CategoryPage from '../pages/category-page';

import { withGoodstoreService } from '../hoc';
import { goodsLoaded, booksRequested } from '../../store/actions';
import { compose } from "../../utils/compose";

class App extends Component {

  componentDidMount() {
    const { goodstoreService, goodsLoaded, booksRequested } = this.props;
    booksRequested();
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
                       component={CategoriesList}/>

                <Route path="/pc"
                       render={() => <CategoryPage goodList={goodsList.pc} title="PC"/>} />

                <Route path="/tablets"
                       render={() => <CategoryPage goodList={goodsList.tablets} title="Tablets"/>} />

                <Route path="/phones"
                       render={() => <CategoryPage goodList={goodsList.phones} title="Phones"/>} />

                <Route path="/tv"
                       render={() => <CategoryPage goodList={goodsList.tv} title="TV"/>} />

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
  booksRequested
};

export default compose(
  withGoodstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(App);


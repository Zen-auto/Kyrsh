import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.scss';
import Header from '../header';
import Sidebar from '../sidebar';
import Spinner from '../spinner';
import CategoriesList from '../categories-list';
import { CategoryPage, DetailPage, CartPage } from '../pages';

import { withGoodstoreService } from '../hoc';
import { fetchGoods } from '../../store/actions';
import { compose } from "../../utils/compose";

class App extends Component {

  componentDidMount() {
    this.props.fetchGoods();
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

                <Route path="/cart" exact={true}
                       render={() => <CartPage /> }
                />

                {/* Tablets */}

                <Route path="/tablets/:id/characteristics"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="tablets"
                                  currentTab="characteristics"
                         />
                       }}/>

                <Route path="/tablets/:id/opinion"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="tablets"
                                  currentTab="opinion"
                         />
                       }}/>

                <Route path="/tablets/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="tablets"
                                  currentTab="description"
                         />
                }}/>

                <Route path="/tablets"
                       render={() =>
                         <CategoryPage
                           goodList={ goodsList.tablets }
                           title="Tablets"
                           categoryId="tablets"
                           exact={true}
                         />}
                />


                {/* PC */}

                <Route path="/pc/:id/characteristics"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="pc"
                                  currentTab="characteristics"
                         />
                }}/>

                <Route path="/pc/:id/opinion"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="pc"
                                  currentTab="opinion"
                         />
                }}/>

                <Route path="/pc/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="pc"
                                  currentTab="description"
                                />
                       }}/>

                <Route path="/pc"
                       render={() =>
                         <CategoryPage
                           goodList={goodsList.pc}
                           title="PC"
                           categoryId="pc"
                           exact={true}
                         />}
                />


                {/* Phones */}

                <Route path="/phones/:id/characteristics"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                 itemId={ id }
                                 categoryId="phones"
                                 currentTab="characteristics"
                         />
                       }}/>

                <Route path="/phones/:id/opinion"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="phones"
                                  currentTab="opinion"
                         />
                       }}/>

                <Route path="/phones/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="phones"
                                  currentTab="description"
                         />
                       }}/>

                <Route path="/phones"
                       render={() =>
                         <CategoryPage
                           goodList={ goodsList.phones }
                           title="Phones"
                           categoryId="phones"
                           exact={true}
                         />}
                />


                {/* TV */}

                <Route path="/tv/:id/characteristics"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="tv"
                                  currentTab="characteristics"
                         />
                       }}/>

                <Route path="/tv/:id/opinion"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="tv"
                                  currentTab="opinion"
                         />
                       }}/>

                <Route path="/tv/:id"
                       render={ ({ match }) => {
                         const { id } = match.params;
                         return <DetailPage
                                  itemId={ id }
                                  categoryId="tv"
                                  currentTab="description"
                         />
                       }}/>

                <Route path="/tv"
                       render={() =>
                         <CategoryPage
                           goodList={goodsList.tv}
                           title="TV"
                           categoryId="tv"
                           exact={true}
                         />}
                />




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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { goodstoreService } = ownProps;
  return {
    fetchGoods: fetchGoods(goodstoreService, dispatch)
  };
};

export default compose(
  withGoodstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(App);


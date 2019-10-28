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
import { fetchGoods } from '../../store/actions';
import { compose } from "../../utils/compose";

class App extends Component {

  componentDidMount() {
    this.props.fetchBooks();
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

                {/* Tablets */}

                <Route path="/tablets/:id/characteristics"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="characteristics" pathName={ location.pathname } />
                       }}/>

                <Route path="/tablets/:id/opinion"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="opinion" pathName={ location.pathname } />
                       }}/>

                <Route path="/tablets/:id"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="description" pathName={ location.pathname } />
                }}/>

                <Route path="/tablets"
                       render={({ location }) =>
                         <CategoryPage
                           goodList={goodsList.tablets}
                           title="Tablets"
                           location={ location }
                           exact={true}
                         />}
                />


                {/* PC */}

                <Route path="/pc/:id/characteristics"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="characteristics" pathName={ location.pathname } />
                       }}/>

                <Route path="/pc/:id/opinion"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="opinion" pathName={ location.pathname } />
                       }}/>

                <Route path="/pc/:id"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="description" pathName={ location.pathname } />
                       }}/>

                <Route path="/pc"
                       render={({ location }) =>
                         <CategoryPage
                           goodList={goodsList.pc}
                           title="PC"
                           location={ location }
                           exact={true}
                         />}
                />


                {/* Phones */}

                <Route path="/phones/:id/characteristics"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="characteristics" pathName={ location.pathname } />
                       }}/>

                <Route path="/phones/:id/opinion"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="opinion" pathName={ location.pathname } />
                       }}/>

                <Route path="/phones/:id"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="description" pathName={ location.pathname } />
                       }}/>

                <Route path="/phones"
                       render={({ location }) =>
                         <CategoryPage
                           goodList={goodsList.phones}
                           title="Phones"
                           location={ location }
                           exact={true}
                         />}
                />


                {/* TV */}

                <Route path="/tv/:id/characteristics"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="characteristics" pathName={ location.pathname } />
                       }}/>

                <Route path="/tv/:id/opinion"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="opinion" pathName={ location.pathname } />
                       }}/>

                <Route path="/tv/:id"
                       render={ ({ match, location }) => {
                         const { id } = match.params;
                         return <DetailPage itemId={ id } currentTab="description" pathName={ location.pathname } />
                       }}/>

                <Route path="/tv"
                       render={({ location }) =>
                         <CategoryPage
                           goodList={goodsList.tv}
                           title="TV"
                           location={ location }
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
    fetchBooks: fetchGoods(goodstoreService, dispatch)
  };
};

export default compose(
  withGoodstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(App);


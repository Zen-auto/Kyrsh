import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.scss';
import Header from '../header'
import Sidebar from '../sidebar'
import CategoriesList from '../categories-list'
import CategoryPage from '../pages/category-page';

class App extends Component {

  render() {
    const { goodsList } = this.props;

    return (
      <div className="wrapper">
        <Header />
        <main>
          <div className="container">
            <Switch>

              <Route path="/" exact={ true }
                     component={ CategoriesList } />

              <Route path="/pc" exact={ true }
                     render={() => <CategoryPage goodList={ goodsList.pc } title="PC"/>} />

              <Route path="/tablets" exact={ true }
                     render={() => <CategoryPage goodList={ goodsList.tablets } title="Tablets"/>} />

              <Route path="/phones" exact={ true }
                     render={() => <CategoryPage goodList={ goodsList.phones } title="Phones"/>} />

              <Route path="/tv" exact={ true }
                     render={() => <CategoryPage goodList={ goodsList.tv } title="TV"/>} />

              <Route render={() => <h2>Page not found</h2>} />

            </Switch>

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
    goodsList: state.goods
  }
};

export default connect(mapStateToProps)(App)
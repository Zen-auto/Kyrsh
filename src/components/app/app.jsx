import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.scss';
import Header from '../header'
import Sidebar from '../sidebar'
import CategoriesList from '../categories-list'
import CategoryPage from '../pages/category-page';

import { withGoodstoreService } from '../hoc';
import { goodsLoaded } from '../../store/actions';

class App extends Component {

  state = {
    isMounted: false
  };

  componentDidMount() {
    // receive data
    const { goodstoreService } = this.props;
    const data = goodstoreService.getGoods();

    // dispatch action to Store
    this.props.goodsLoaded(data);

    this.setState(state => {
      return {
        isMounted: true
      }
    });
  }

  render() {

    const { goodsList } = this.props;
    const { isMounted } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <main>
          <div className="container">

            { isMounted &&

              <Switch>

                <Route path="/" exact={true}
                       component={CategoriesList}/>

                <Route path="/pc"
                       render={() => <CategoryPage goodList={goodsList.pc} title="PC"/>}/>

                <Route path="/tablets"
                       render={() => <CategoryPage goodList={goodsList.tablets} title="Tablets"/>}/>

                <Route path="/phones"
                       render={() => <CategoryPage goodList={goodsList.phones} title="Phones"/>}/>

                <Route path="/tv"
                       render={() => <CategoryPage goodList={goodsList.tv} title="TV"/>}/>

                <Route render={() => <h2>Page not found</h2>}/>

              </Switch>

            }

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

const mapDispatchToProps = {
  goodsLoaded
};

export default withGoodstoreService()(connect(mapStateToProps, mapDispatchToProps)(App));
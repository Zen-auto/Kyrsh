import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Sidebar from '../../sidebar'
import Good from '../../good';
import Spinner from '../../spinner';
import Breadcrumbs from '../../breadcrumbs';

import './category-page.scss';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.goodsListRef = React.createRef();
  }

  state = {
    sortOrder: 'increase',
    toWhichProductNumberDisplayed: 8,
    loading: false,
    canSendAjax: true
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const documentHeight = document.documentElement.clientHeight;
      const bottomCoord = this.goodsListRef.current.getBoundingClientRect().bottom;

      if ((documentHeight >= bottomCoord + 100) && this.state.canSendAjax ) {
        let promise = new Promise((resolve) => {
          this.setState(state => {
            // показываем лоадер
            return ({
              loading: true,
              canSendAjax: false,
              toWhichProductNumberDisplayed: state.toWhichProductNumberDisplayed + 9
            })
          });
          resolve();
        });

        promise
          .then(() => {
            this.setState({
              // скрываем лоадер
              loading: false,
              canSendAjax: true
            });
          })
          .catch(err => console.log('Error: ' + err));
      }
    })

  }

  handleChange(e) {
    this.setState({
      sortOrder: e.target.value
    });
  }

  sortGoods() {
    if (this.state.sortOrder === 'decrease') {
      // сортировка по убыванию
      this.props.goodList.sort((prev, next) => next.price - prev.price)
    } else {
      // сортировка по возрастанию
      this.props.goodList.sort((prev, next) => prev.price - next.price)
    }
  }


  render() {
    const { goodList, title, location } = this.props;
    const { loading, toWhichProductNumberDisplayed } = this.state;
    const spinner = loading ? <Spinner /> : null;

    return(
      <Fragment>
        <Breadcrumbs
          links={[
            {
              id: 1,
              title: 'Каталог',
              path: '/'
            },
            {
              id: 2,
              title: title
            }
          ]}
        />

        <div className="main-content">
          <Sidebar />
          <div className="goods-container">
            <div className="goods-container__top">
              <h2 className="goods-container__title">{ title }</h2>
              <select className="goods-container__sorting" onChange={ e => this.handleChange(e) } >
                <option value="increase">Сначала дешевые</option>
                <option value="decrease">Сначала дорогие</option>
              </select>
            </div>

            { this.sortGoods() }

            <div className="goods-list" ref={ this.goodsListRef }>
              {
                goodList.map((good, index )=> {
                  while(index <= toWhichProductNumberDisplayed) {
                    return (
                      <Good key={ good.id } good={ good } categoryUrl={ location.pathname }/>
                    )
                  }
                })
              }

              { spinner }
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(CategoryPage);
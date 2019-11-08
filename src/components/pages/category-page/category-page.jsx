import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Sidebar from '../../sidebar';

import { PhonesList, AbstractList, TabletsList, PcList, TvList } from '../../lists';
import Good from '../../good';
import Spinner from '../../spinner';
import Breadcrumbs from '../../breadcrumbs';

import './category-page.scss';
import {goodAddedToCart} from "../../../store/actions";
// import TabletsList from "../../lists/tablets-list";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.pcListRef = React.createRef();
  }

  state = {
    sortOrder: 'increase',
    countGoodsRender: 8,
    // countGoodsRender: null,
    countPcRender: 8,
    countTabletsRender: 8,
    countPhonesRender: 8,
    countTvRender: 8,

    loading: false,
    canSendAjax: true
  };

  countGoodsRender = 8;
  // countPcRender = 8;
  // countTabletsRender = 8;
  // countPhonesRender = 8;
  // countTvRender = 8;

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


  fetchData(category) {
    const documentHeight = document.documentElement.clientHeight;
    const bottomCoord = this.pcListRef.current.getBoundingClientRect().bottom;

    if ((documentHeight >= bottomCoord + 100) && this.state.canSendAjax ) {
      let promise = new Promise((resolve) => {
        console.log(this.state.countTabletsRender)
        console.log(this.state.countPcRender)


        if (category === 'pc') {
          this.setState(state => {
            return ({
              countPcRender: state.countPcRender + 9
            })
          });
        } else if (category === 'tablets') {
          this.setState(state => {
            return ({
              countTabletsRender: state.countTabletsRender + 9
            })
          });
        }

        this.setState(state => {
          // показываем лоадер
          return ({
            loading: true,
            canSendAjax: false
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
  }

  // onScroll = () => this.fetchData();

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }


  render() {
    const { goodList, title, categoryId, onAddedToCart } = this.props;
    const { loading, countGoodsRender } = this.state;
    const spinner = loading ? <Spinner /> : null;

    // let goodsListBlock = null;
    // console.log(categoryId)
    switch(categoryId) {
      case 'tablets':
        this.onScroll = () => this.fetchData('tablets');
        this.countGoodsRender = this.state.countTabletsRender;
        // goodsListBlock = <TabletsList goodList={ goodList } />;
        break;
      case 'pc':
        this.onScroll = () => this.fetchData('pc');
        this.countGoodsRender = this.state.countPcRender;
        // goodsListBlock = <PcList goodList={ goodList } />;
        break;
      case 'phones':
        // goodsListBlock = <PhonesList goodList={ goodList } />;
        break;
      case 'tv':
        // goodsListBlock = <TvList goodList={ goodList } />;
        break;

    }

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

            {/*{*/}
              {/*goodsListBlock*/}
            {/*}*/}

            <div className="goods-list" ref={ this.pcListRef }>
              {
                goodList.map((good, index )=> {
                  while(index <= this.countGoodsRender) {
                    return (
                      <Good
                        key={ good.id }
                        good={ good }
                        onAddedToCart={ () => onAddedToCart(good.id, good.categoryId) }
                      />
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

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedToCart: (id, categoryId) => dispatch(goodAddedToCart(id, categoryId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
import React, { Component } from 'react';
import PhonesList from "./phones-list";

import Good from '../good';
import Spinner from '../spinner';

class AbstractList extends Component {
  constructor(props) {
    super(props);
    this.goodsListRef = React.createRef();
  }

  state = {
    // sortOrder: 'increase',
    toWhichProductNumberDisplayed: 8,
    loading: false,
    canSendAjax: true
  };

  fetchData() {
    const documentHeight = document.documentElement.clientHeight;
    const bottomCoord = this.pcListRef.current.getBoundingClientRect().bottom;

    if ((documentHeight >= bottomCoord + 100) && this.state.canSendAjax ) {
      let promise = new Promise((resolve) => {
        this.setState(state => {
          // показываем лоадер
          return ({
            loading: true,
            canSendAjax: false,
            toWhichGoodNumberDisplayed: state.toWhichGoodNumberDisplayed + 9
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

  onScroll = () => this.fetchData();

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }


  // render() {
  //   const { goodList } = this.props;
  //   const { loading, toWhichProductNumberDisplayed } = this.state;
  //   const spinner = loading ? <Spinner /> : null;
  //
  //   return (
  //     <div className="goods-list" ref={ this.goodsListRef }>
  //       {
  //         goodList.map((good, index )=> {
  //           while(index <= toWhichProductNumberDisplayed) {
  //             return (
  //               <Good key={ good.id } good={ good } />
  //             )
  //           }
  //         })
  //       }
  //
  //       { spinner }
  //     </div>
  //   )
  // }

};

export default AbstractList;
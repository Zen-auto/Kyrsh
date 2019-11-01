import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Good from '../good';
import Spinner from '../spinner';
import AbstractList from './abstract-list';

class TvList extends Component {
  constructor(props) {
    super(props);
    this.tvListRef = React.createRef();
  }

  state = {
    toWhichGoodNumberDisplayed: 8,
    loading: false,
    canSendAjax: true
  };

  fetchData() {
    const documentHeight = document.documentElement.clientHeight;
    const bottomCoord = this.tvListRef.current.getBoundingClientRect().bottom;

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

  componentDidMount() {
    window.addEventListener('scroll', () => this.fetchData())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.fetchData())
  }


  render() {
    const { goodList } = this.props;
    const { loading, toWhichGoodNumberDisplayed } = this.state;
    const spinner = loading ? <Spinner /> : null;

    return (
      <div className="goods-list" ref={ this.tvListRef }>
        {
          goodList.map((good, index )=> {
            while(index <= toWhichGoodNumberDisplayed) {
              return (
                <Good key={ good.id } good={ good } />
              )
            }
          })
        }

        { spinner }
      </div>
    )
  }

};

export default TvList;
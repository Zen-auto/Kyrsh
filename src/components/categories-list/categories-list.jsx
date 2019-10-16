import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './categories-list.scss';

export default class CategoriesList extends Component {

  state = {
    categories: [
      {
        title: 'PC',
        to: '/pc',
        image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/027707a1e1179a7be59792ef5b046234/3c39ed0f744d77e61eec7e55fd850655793796428f987617c34eef8e9ef927d4.jpg'
      },
      {
        title: 'Tablets',
        to: '/tablets',
        image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/530ccd1eba5a2073585245f1df9b57cc/7f6e5ac35b7c8e3cb8c08cb76ec8c18ecdab8311e693c816a17d8deed1a95d90.jpg'
      },
      {
        title: 'Phones',
        to: '/phones',
        image: 'https://c.dns-shop.ru/thumb/st1/fit/320/250/369e1a1856c8b89c842ecc903e075598/220fdd343732b411f838ef206cfd0b95f50579968f4a22b9204163bf5677b02c.jpg'
      },
      {
        title: 'TV',
        to: '/tv',
        image: 'https://c.dns-shop.ru/thumb/st1/fit/320/250/c6cd9c361a03ef4061a6684019374688/9d46840392f5fb0b3f8cdec79892724d4844537e035a39b1a2aa477d7aee4dd8.jpg'
      }
    ]
  };

  render() {
    return (
      <div className="categories-list">
        { this.state.categories.map(category => {
          return (
            <Link to={ category.to } className="category" key={ category.to }>
                  <span className="category__image-box">
                    <img className="category__image" src={ category.image } />
                  </span>
              <span className="category__title">{ category.title }</span>
            </Link>
          )
        })}
      </div>
    )
  }
};
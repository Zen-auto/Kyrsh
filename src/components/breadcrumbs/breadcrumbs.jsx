import React from 'react';
import './breadcrumbs.scss';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ links }) => {
  let length = 0;
  for (let key in links) {
    length++
  }

  return (
    <div className="breadcrumbs">
      {
        links.map((link, index )=> {
          return (
            <div className="breadcrumbs__item" key={ link.id }>
              {
                index >= length - 1 ? (
                  link.title
                ) : (
                  <Link className="breadcrumbs__link" to={ link.path }>{ link.title }</Link>
                )
              }
            </div>
          )
        })
      }

    </div>
  )
};

export default Breadcrumbs;
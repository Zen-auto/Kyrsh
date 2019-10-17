import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import classNames from 'classnames';

import './sidebar.scss';

class Sidebar extends Component {

  state = {
    menuItems: [
      {
        id: 'pc',
        title: 'PC',
        path: '/pc'
      },
      {
        id: 'tablets',
        title: 'Tablets',
        path: '/tablets'
      },
      {
        id: 'phones',
        title: 'Phones',
        path: '/phones'
      },
      {
        id: 'tv',
        title: 'TV',
        path: '/tv'
      },
    ]
  };

  render() {
    const { menuItems } = this.state;
    const { location } = this.props;


    return (
      <aside className="sidebar">
        <div className="sidebar-menu">
          {
            menuItems.map(item => {

              const itemClass = classNames('sidebar-menu__item', {
                'sidebar-menu__item--active' : location.pathname === item.path
              });

              return (
                <Link className={ itemClass }
                      to={ item.path }
                      key={ item.id }>
                  { item.title }
                  </Link>
              )
            })
          }
        </div>

        <div className="sidebar-filters">

        </div>
      </aside>
    )
  }
}

export default withRouter(Sidebar);
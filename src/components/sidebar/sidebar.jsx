import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

export default class Sidebar extends Component {


  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-menu">
          <Link className="sidebar-menu__item" to="/pcs">PC</Link>
          <Link className="sidebar-menu__item" to="/tablets">Tablets</Link>
          <Link className="sidebar-menu__item" to="/phones">Phones</Link>
          <Link className="sidebar-menu__item" to="/tv">TV</Link>
        </div>
      </aside>
    )
  }
}
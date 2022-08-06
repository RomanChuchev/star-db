import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item sky">
          Luke Skywalker
        </li>
        <li className="list-group-item sky">
          Darth Vader
        </li>
        <li className="list-group-item sky">
          R2-D2
        </li>
      </ul>
    );
  }
}

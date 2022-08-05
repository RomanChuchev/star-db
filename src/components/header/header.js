import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a className='nav-link' href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <a  className="nav-link"
              data-bs-toggle="tab"
              href="#"
              aria-selected="false"
              role="tab"
              tabIndex="-1">
            People
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a  className="nav-link" 
              data-bs-toggle="tab"
              href="#"
              aria-selected="true"
              role="tab">
            Planets
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a  className="nav-link"
              href="#"
              aria-selected="false"
              tabIndex="-1"
              role="tab">
            Starships
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
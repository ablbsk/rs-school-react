import './header.scss';
import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <span className="logo" />
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">Home</li>
            <li className="navigation__item">About us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

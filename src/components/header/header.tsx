import './header.scss';
import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const Header: FunctionComponent = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Link className="header__link" to="/">
          <span className="logo" />
        </Link>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                className={classNames('navigation__link', {
                  'navigation__link--active': location.pathname === '/',
                })}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className={classNames('navigation__link', {
                  'navigation__link--active': location.pathname === '/about-us',
                })}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

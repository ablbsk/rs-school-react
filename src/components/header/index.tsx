import "./header.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Link className="header__link" to="/">
          <span className="logo" />
        </Link>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                className={({ isActive }) =>
                  classNames("navigation__link", {
                    "navigation__link--active": isActive,
                  })
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={({ isActive }) =>
                  classNames("navigation__link", {
                    "navigation__link--active": isActive,
                  })
                }
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={({ isActive }) =>
                  classNames("navigation__link", {
                    "navigation__link--active": isActive,
                  })
                }
                to="/feedback"
              >
                Feedback
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

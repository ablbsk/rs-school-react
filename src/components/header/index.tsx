import "./header.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { globalRoutes } from "../../utils/constants";

const Header: FunctionComponent = () => {
  const navigationItems = globalRoutes.map((item) => (
    <li key={item.title} className="navigation__item">
      <NavLink
        className={({ isActive }) =>
          classNames("navigation__link", {
            "navigation__link--active": isActive,
          })
        }
        to={item.path}
      >
        {item.title}
      </NavLink>
    </li>
  ));

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Link className="header__link" to="/">
          <span className="logo" />
        </Link>
        <nav className="navigation">
          <ul className="navigation__list">{navigationItems}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

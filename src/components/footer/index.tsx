import "./footer.scss";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <p className="footer__text">
          <span>Code by </span>
          <Link to="https://github.com/ablbsk/" className="footer__developer" target="_blank">
            <span>Aliaskei Balabushka</span>
          </Link>
          <span> 2023</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

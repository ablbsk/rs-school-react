import './footer.scss';
import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <p className="footer__text">
          <span>Code by </span>
          <a href="https://github.com/ablbsk/rs-school-react" className="footer__developer" target="_blank">Aliaskei Balabushka</a>
          <span> 2023</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

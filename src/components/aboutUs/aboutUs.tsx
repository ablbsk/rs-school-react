import './about-us.scss';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const AboutUs: FunctionComponent = () => {
  const modules = [
    { name: 'Components', isComplete: true },
    { name: 'Forms', isComplete: false },
    { name: 'Hooks', isComplete: false },
    { name: 'API', isComplete: false },
    { name: 'Redux', isComplete: false },
    { name: 'SSR/SSG', isComplete: false },
  ];

  const items = [1, 2, 3, 4, 5, 6].map((item, i) => (
    <li key={modules[i].name} className="about-us__item">
      {modules[i].isComplete ? (
        <span className="about-us__status about-us__status--complete">complete</span>
      ) : (
        <span className="about-us__status about-us__status--in-progress">in progress</span>
      )}
      <span className="about-us__separate">Week {item} — </span>
      <Link
        className="about-us__link"
        to={`https://github.com/rolling-scopes-school/tasks/tree/master/react/modules/module0${item}`}
      >
        React. {modules[i].name}
      </Link>
    </li>
  ));

  return (
    <div className="about-us">
      <div className="wrapper about-us__wrapper">
        <h2 className="about-us__header">About Us</h2>
        <h3 className="about-us__subheader">
          This is the project of the Rolling Scope School course —{' '}
          <Link
            className="about-us__link"
            to="https://github.com/rolling-scopes-school/tasks/tree/master/react"
          >
            React 2023 Q1
          </Link>
        </h3>
        <p className="about-us__title">Course program</p>
        <ul className="about-us__list">{items}</ul>
        <span className="about-us__img" />
      </div>
    </div>
  );
};

export default AboutUs;

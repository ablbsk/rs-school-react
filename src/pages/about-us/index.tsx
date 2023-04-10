import "./about-us.scss";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { courseModules } from "../../utils/constants";

const AboutUs: FunctionComponent = () => {
  const items = courseModules.map((item, i) => (
    <li key={courseModules[i].name} className="about-us__item">
      {courseModules[i].isComplete ? (
        <span className="about-us__status about-us__status--complete">complete</span>
      ) : (
        <span className="about-us__status about-us__status--in-progress">in progress</span>
      )}
      <span className="about-us__separate">Week {i + 1} — </span>
      <Link
        className="about-us__link"
        to={`https://github.com/rolling-scopes-school/tasks/tree/master/react/modules/module0${
          i + 1
        }`}
      >
        React. {courseModules[i].name}
      </Link>
    </li>
  ));

  return (
    <section className="about-us">
      <div className="wrapper about-us__wrapper">
        <h2 className="about-us__header">About Us</h2>
        <h3 className="about-us__subheader">
          This is the project of the Rolling Scope School course —{" "}
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
    </section>
  );
};

export default AboutUs;

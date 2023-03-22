import "./feedback.scss";
import React, { FunctionComponent } from "react";
import Form from "../form";

const Feedback: FunctionComponent = () => {
  return (
    <section className="feedback">
      <span className="feedback__img" />
      <div className="wrapper feedback__wrapper">
        <h2 className="feedback__header">Feedback</h2>
        <Form />
      </div>
    </section>
  );
};

export default Feedback;

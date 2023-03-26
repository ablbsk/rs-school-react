import "./feedback.scss";
import React, { Component } from "react";
import Form from "../form";
import { IFeedback, IFeedbackFields } from "../../interfaces";
import Item from "./item";

class Feedback extends Component<object, IFeedback> {
  constructor(props: object) {
    super(props);
    this.state = {
      feedbackList: [],
    };
  }

  getFeedback(feedback: IFeedbackFields) {
    const { feedbackList } = this.state;
    this.setState({ feedbackList: [...feedbackList, feedback] });
  }

  createFeedbackCard() {
    const { feedbackList } = this.state;
    const cards = feedbackList.map((item: IFeedbackFields, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Item key={`item-${i}`} feedback={item} />
    ));
    return <ul className="feedback__list">{cards}</ul>;
  }

  render() {
    const { feedbackList } = this.state;

    return (
      <section className="feedback">
        <span className="feedback__img" />
        <div className="wrapper feedback__wrapper">
          <h2 className="feedback__header">Feedback</h2>
          <Form addFeedback={(feedback) => this.getFeedback(feedback)} />
          {feedbackList ? this.createFeedbackCard() : null}
        </div>
      </section>
    );
  }
}

export default Feedback;

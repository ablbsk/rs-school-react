import "./feedback.scss";
import React, { Component, RefObject } from "react";
import Form from "../../components/form";
import { IFeedback, IFeedbackFields } from "../../interfaces";
import Item from "../../components/item";
import validate from "./validation";

class Feedback extends Component<object, IFeedback> {
  private readonly formRef: RefObject<HTMLFormElement>;

  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      feedbackList: [],
      errors: {
        username: null,
        continents: null,
        email: null,
        dateOfBirth: null,
        picture: null,
        rating: null,
        opinion: null,
        isConfirm: null,
      },
      isButtonActive: false,
      isNoticeShow: false,
    };
  }

  getFeedback(feedback: IFeedbackFields) {
    const errors = validate(feedback);

    this.setState({ errors }, () => {
      const result = Object.values(errors).every((item) => item === null);

      if (result) {
        const { feedbackList } = this.state;
        this.setState({ feedbackList: [...feedbackList, feedback] }, () => {
          if (this.formRef.current) {
            this.formRef.current.reset();
          }

          this.setState({ isButtonActive: false });
        });
        this.showNotice();
      }
    });
  }

  showNotice() {
    this.setState({ isNoticeShow: true }, () => {
      setTimeout(() => this.setState({ isNoticeShow: false }), 2000);
    });
  }

  createFeedbackCard() {
    const { feedbackList } = this.state;
    const cards = feedbackList.map((item: IFeedbackFields, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Item key={`item-${i}`} feedback={item} />
    ));
    return <ul className="feedback__list">{cards}</ul>;
  }

  isFormConfirm(e: React.MouseEvent<HTMLInputElement>) {
    const { checked } = e.target as HTMLInputElement;

    if (checked !== null) {
      this.setState({ isButtonActive: checked });
    }
  }

  render() {
    const { feedbackList, isButtonActive, errors, isNoticeShow } = this.state;

    return (
      <section className="feedback">
        <span className="feedback__img" />
        <div className="wrapper feedback__wrapper">
          <h2 className="feedback__header">Feedback</h2>
          <Form
            formRef={this.formRef}
            errors={errors}
            isButtonActive={isButtonActive}
            isNoticeShow={isNoticeShow}
            isFormConfirm={(e) => this.isFormConfirm(e)}
            addFeedback={(feedback) => this.getFeedback(feedback)}
          />
          {feedbackList ? this.createFeedbackCard() : null}
        </div>
      </section>
    );
  }
}

export default Feedback;

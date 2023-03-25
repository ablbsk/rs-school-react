import "./form.scss";
import React, { Component, FormEvent, Ref } from "react";
import { IFeedback } from "../../interfaces";
import validate from "./validation";
import Notice from "../notice";
import Error from "./error";
import Select from "./select";
import Radio from "./radio";
import Input from "./input";
import Date from "./date";
import Picture from "./picture";
import TextArea from "./textarea";

class Form extends Component<object, IFeedback> {
  private readonly formRef: Ref<HTMLFormElement>;

  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();

    this.state = {
      data: {
        username: null,
        continents: null,
        email: null,
        dateOfBirth: null,
        picture: null,
        rating: null,
        opinion: null,
        isConfirm: false,
      },
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

  handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (this.formRef) {
      const { current } = this.formRef;

      this.setState(
        {
          data: {
            username: current[0].value,
            continents: current[1].value,
            email: current[2].value,
            dateOfBirth: current[3].value,
            picture: current[4].value,
            // eslint-disable-next-line no-nested-ternary
            rating: current[5].checked ? "good" : current[6].checked ? "maybe" : "bad",
            opinion: current[8].value,
            isConfirm: current[9].checked,
          },
        },
        this.validateFields
      );
    }
  }

  validateFields() {
    const { data } = this.state;
    const errors = validate(data);

    this.setState({ data, errors }, () => {
      const result = Object.values(errors).every((item) => item === null);
      if (result) {
        this.showNotice();
      }
    });

    console.log(this.state);
  }

  checkAgreeCheckbox(e: React.MouseEvent<HTMLInputElement>) {
    const { checked } = e.target as HTMLInputElement;

    if (checked !== null) {
      this.setState({ isButtonActive: checked });
    }
  }

  showNotice() {
    this.setState({ isNoticeShow: true }, () => {
      setTimeout(() => this.setState({ isNoticeShow: false }), 2000);
    });
  }

  render() {
    const { errors, isButtonActive, isNoticeShow } = this.state;

    return (
      <>
        <div className="form">
          <h3 className="form__header">Send us your feedback!</h3>
          <div className="form__container">
            <form ref={this.formRef} className="form__form">
              <div className="form__section">
                <div className="form__line">
                  <Input label="Username" type="text" placeholder="Morty" error={errors.username} />
                  <Select error={errors.continents} />
                </div>
                <div className="form__line">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="morty.smith@gmail.com"
                    error={errors.email}
                  />
                  <Date error={errors.dateOfBirth} />
                </div>
                <div className="form__line">
                  <Picture error={errors.picture} />
                </div>
              </div>
              <div className="form__section">
                <div className="form__line form__line--center form__line--radio">
                  <Radio error={errors.rating} />
                </div>
                <div className="form__line">
                  <TextArea error={errors.opinion} />
                </div>
              </div>
              <div className="form__section form__section--wide">
                <label className="form__check">
                  <input
                    className="form__checkbox"
                    type="checkbox"
                    name="checkbox"
                    onClick={(e) => this.checkAgreeCheckbox(e)}
                  />
                  agree to send my data
                </label>
                <Error message={errors.isConfirm} />
                <button
                  className="button form__button"
                  type="submit"
                  onClick={(e: FormEvent) => this.handleSubmit(e)}
                  disabled={!isButtonActive}
                >
                  Create feedback
                </button>
              </div>
            </form>
          </div>
        </div>
        {isNoticeShow ? <Notice /> : null}
      </>
    );
  }
}

export default Form;

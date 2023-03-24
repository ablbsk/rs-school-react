import "./form.scss";
import React, { Component, FormEvent, Ref, RefObject } from "react";
import classNames from "classnames";
import { IFeedback, IFeedbackError } from "../../interfaces";
import validate from "./validation";

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

    this.setState({ data, errors });
  }

  // eslint-disable-next-line class-methods-use-this
  createError(error: string | null) {
    return (
      <span
        className={classNames("form__error", {
          "form__error--active": error,
        })}
      >
        {error}
      </span>
    );
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="form">
        <h3 className="form__header">Send us your feedback!</h3>
        <div className="form__container">
          <form ref={this.formRef} className="form__form">
            <div className="form__section">
              <div className="form__line">
                <label className="form__label" htmlFor="username">
                  Username
                  <input
                    id="username"
                    className="form__input form__item"
                    type="text"
                    placeholder="Morty"
                  />
                  {this.createError(errors.username)}
                </label>
                <label className="form__label form__label--short" htmlFor="continents">
                  Continents
                  <select
                    id="continents"
                    className="form__dropdown form__item form__item--short"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Select
                    </option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="north america">North America</option>
                    <option value="south america">South America</option>
                    <option value="antarctica">Antarctica</option>
                    <option value="australia">Australia</option>
                  </select>
                  {this.createError(errors.continents)}
                </label>
              </div>
              <div className="form__line">
                <label className="form__label" htmlFor="email">
                  Email
                  <input
                    className="form__input form__item"
                    id="email"
                    type="email"
                    placeholder="morty.smith@gmail.com"
                  />
                  {this.createError(errors.email)}
                </label>
                <label className="form__label form__label--short" htmlFor="birth">
                  Date of birth
                  <input id="birth" className="form__item" type="date" />
                  {this.createError(errors.dateOfBirth)}
                </label>
              </div>
              <div className="form__line">
                <label className="form__label form__label--file" htmlFor="avatar">
                  Profile picture
                  <input
                    className="form__file form__item"
                    type="file"
                    id="avatar"
                    accept="image/png, image/jpeg, image/jpg"
                  />
                  {this.createError(errors.picture)}
                </label>
              </div>
            </div>
            <div className="form__section">
              <div className="form__line form__line--center form__line--radio">
                <span className="form__label">Evaluate the project</span>
                <div className="form__radio-container">
                  <label htmlFor="ratingGood">
                    <input id="ratingGood" type="radio" name="rating" value="good" defaultChecked />
                    <span className="form__radio-icon icon--smile-good" />
                  </label>
                  <label htmlFor="ratingMaybe">
                    <input id="ratingMaybe" type="radio" name="rating" value="maybe" />
                    <span className="form__radio-icon icon--smile-maybe" />
                  </label>
                  <label htmlFor="ratingBad">
                    <input id="ratingBad" type="radio" name="rating" value="bad" />
                    <span className="form__radio-icon icon--smile-bad" />
                  </label>
                </div>
                <span className="form__error">* Wrong value</span>
              </div>
              <div className="form__line">
                <label className="form__label" htmlFor="description">
                  Describe your opinion
                  <textarea
                    id="description"
                    className="form__textarea form__item"
                    placeholder="What do you think about this animated series?"
                  />
                  {this.createError(errors.opinion)}
                </label>
              </div>
            </div>
            <div className="form__section form__section--wide">
              <label className="form__check" htmlFor="checkbox">
                <input className="form__checkbox" type="checkbox" id="checkbox" name="checkbox" />
                agree to send my data
              </label>
              {this.createError(errors.isConfirm)}
              <button
                className="button form__button"
                type="submit"
                onClick={(e: FormEvent) => this.handleSubmit(e)}
              >
                Create feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;

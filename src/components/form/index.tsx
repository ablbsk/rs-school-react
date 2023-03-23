import "./form.scss";
import React, { Component, Ref } from "react";

class Form extends Component<object, object> {
  private readonly formRef: Ref<HTMLFormElement>;

  private readonly usernameInput: Ref<HTMLInputElement>;

  private readonly continentsSelect: Ref<HTMLSelectElement>;

  private readonly emailInput: Ref<HTMLInputElement>;

  private readonly dateInput: Ref<HTMLInputElement>;

  private readonly fileInput: Ref<HTMLInputElement>;

  private readonly ratingGood: Ref<HTMLInputElement>;

  private readonly ratingMaybe: Ref<HTMLInputElement>;

  private readonly ratingBad: Ref<HTMLInputElement>;

  private readonly opinionTextarea: Ref<HTMLTextAreaElement>;

  private readonly confirmCheckbox: Ref<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();
    this.usernameInput = React.createRef();
    this.continentsSelect = React.createRef();
    this.emailInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileInput = React.createRef();
    this.ratingGood = React.createRef();
    this.ratingMaybe = React.createRef();
    this.ratingBad = React.createRef();
    this.opinionTextarea = React.createRef();
    this.confirmCheckbox = React.createRef();

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
      errors: null,
      isButtonDisabled: true,
    };
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    // this.setState({
    //   data: {
    //     username: this.usernameInput.current.value,
    //     continents: this.continentsSelect.current.value,
    //     email: this.emailInput.current.value,
    //     dateOfBirth: this.dateInput.current.value,
    //     picture: this.fileInput.current.value,
    //     rating: this.ratingGood.current.value || this.ratingMaybe.current.value || this.ratingBad.current.value,
    //     opinion: this.opinionTextarea.current.value,
    //     isConfirm: this.confirmCheckbox.current.value,
    //   },
    // });
    console.log(this.formRef);
  }

  render() {
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
                    ref={this.usernameInput}
                    id="username"
                    className="form__input form__item"
                    type="text"
                    placeholder="Morty"
                  />
                  <span className="form__error">* Wrong value</span>
                </label>
                <label className="form__label form__label--short" htmlFor="continents">
                  Continents
                  <select
                    ref={this.continentsSelect}
                    id="continents"
                    className="form__dropdown form__item form__item--short"
                  >
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="north america">North America</option>
                    <option value="south america">South America</option>
                    <option value="antarctica">Antarctica</option>
                    <option value="australia">Australia</option>
                  </select>
                  <span className="form__error">* Wrong value</span>
                </label>
              </div>
              <div className="form__line">
                <label className="form__label" htmlFor="email">
                  Email
                  <input
                    ref={this.emailInput}
                    className="form__input form__item"
                    id="email"
                    type="email"
                    placeholder="morty.smith@gmail.com"
                  />
                  <span className="form__error">* Wrong value</span>
                </label>
                <label className="form__label form__label--short" htmlFor="birth">
                  Date of birth
                  <input ref={this.dateInput} id="birth" className="form__item" type="date" />
                  <span className="form__error">* Wrong value</span>
                </label>
              </div>
              <div className="form__line">
                <label className="form__label form__label--file" htmlFor="avatar">
                  Profile picture
                  <input
                    ref={this.fileInput}
                    className="form__file form__item"
                    type="file"
                    id="avatar"
                    accept="image/png, image/jpeg, image/jpg"
                  />
                  <span className="form__error">* Wrong value</span>
                </label>
              </div>
            </div>
            <div className="form__section">
              <div className="form__line form__line--center form__line--radio">
                <span className="form__label">Evaluate the project</span>
                <div className="form__radio-container">
                  <label htmlFor="ratingGood">
                    <input
                      ref={this.ratingGood}
                      id="ratingGood"
                      type="radio"
                      name="rating"
                      value="good"
                    />
                    <span className="form__radio-icon icon--smile-good" />
                  </label>
                  <label htmlFor="ratingMaybe">
                    <input
                      ref={this.ratingMaybe}
                      id="ratingMaybe"
                      type="radio"
                      name="rating"
                      value="maybe"
                    />
                    <span className="form__radio-icon icon--smile-maybe" />
                  </label>
                  <label htmlFor="ratingBad">
                    <input
                      ref={this.ratingBad}
                      id="ratingBad"
                      type="radio"
                      name="rating"
                      value="bad"
                    />
                    <span className="form__radio-icon icon--smile-bad" />
                  </label>
                </div>
                <span className="form__error">* Wrong value</span>
              </div>
              <div className="form__line">
                <label className="form__label" htmlFor="description">
                  Describe your opinion
                  <textarea
                    ref={this.opinionTextarea}
                    id="description"
                    className="form__textarea form__item"
                    placeholder="What do you think about this animated series?"
                  />
                  <span className="form__error">* Wrong value</span>
                </label>
              </div>
            </div>
            <div className="form__section form__section--wide">
              <label className="form__check" htmlFor="checkbox">
                <input
                  ref={this.confirmCheckbox}
                  className="form__checkbox"
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                />
                agree to send my data
              </label>
              <span className="form__error">* Wrong value</span>
              <button
                className="button form__button"
                type="submit"
                onClick={(e: Event) => this.handleSubmit(e)}
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

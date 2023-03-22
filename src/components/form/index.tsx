import "./form.scss";
import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Form extends Component<object, object> {
  render() {
    return (
      <div className="form">
        <h3 className="form__header">Send us your feedback!</h3>
        <div className="form__container">
          <form className="form__form">
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
                  <span className="form__error">* Wrong value</span>
                </label>
                <label className="form__label form__label--short" htmlFor="continents">
                  Continents
                  <select id="continents" className="form__dropdown form__item form__item--short">
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
                    className="form__input form__item"
                    id="email"
                    type="email"
                    placeholder="morty.smith@gmail.com"
                  />
                  <span className="form__error">* Wrong value</span>
                </label>
                <label className="form__label form__label--short" htmlFor="birth">
                  Date of birth
                  <input id="birth" className="form__item" type="date" />
                  <span className="form__error">* Wrong value</span>
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
                  <span className="form__error">* Wrong value</span>
                </label>
              </div>
            </div>
            <div className="form__section">
              <div className="form__line form__line--radio">
                <span className="form__label">Evaluate the project</span>
                <div className="form__radio-container">
                  <label htmlFor="ratingGood">
                    <input id="ratingGood" type="radio" name="rating" value="good" />
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
                  <span className="form__error">* Wrong value</span>
                </label>
              </div>
            </div>
            <div className="form__section form__section--wide">
              <label className="form__check" htmlFor="checkbox">
                <input className="form__checkbox" type="checkbox" id="checkbox" name="checkbox" />I
                agree to send my data
              </label>
              <span className="form__error">* Wrong value</span>
              <button className="button form__button" type="submit">
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

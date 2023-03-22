import "./form.scss";
import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Form extends Component<object, object> {
  // rating (checkbox)
  // switcher (show full name option)
  // dropdown (country)

  render() {
    return (
      <div className="form">
        <h3 className="form__header">Send us your feedback!</h3>
        <div className="form__container">
          <form className="form__form">
            <div className="form__user">
              <div className="form__line">
                <label className="form__label" htmlFor="username">
                  Username
                  <input
                    className="form__input form__item"
                    id="username"
                    type="text"
                    placeholder="Morty"
                  />
                </label>
                <label htmlFor="continents">
                  Continents
                  <select
                    className="form__dropdown form__item form__item--short"
                    id="continents"
                    name="continents"
                  >
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="north america">North America</option>
                    <option value="south america">South America</option>
                    <option value="antarctica">Antarctica</option>
                    <option value="australia">Australia</option>
                  </select>
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
                </label>
                <label className="form__label form__item--short" htmlFor="birth">
                  Date of birth
                  <input className="form__date form__item" type="date" id="birth" />
                </label>
              </div>
              <div className="form__line">
                <label className="form__label form__label--file" htmlFor="avatar">
                  Profile picture
                  <input
                    className="form__file form__item"
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg, image/jpg"
                  />
                </label>
              </div>
            </div>
            <div className="form__rating">
              <div className="form__line">
                <label className="form__label" htmlFor="description">
                  Describe your opinion
                  <textarea
                    id="description"
                    className="form__textarea form__item"
                    placeholder="What do you think about this animated series?"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;

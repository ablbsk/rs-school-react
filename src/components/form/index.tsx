import "./form.scss";
import React, { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { FormType } from "../../types";
import { IForm } from "../../interfaces";
import { errorMessages, patterns } from "../../data/constants";
import Error from "./error";

const Form: FunctionComponent<FormType> = ({ addFeedback }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IForm>();

  const [isConfirm, setIsConfirm] = useState<boolean>(true);

  const onSubmit = (data: IForm) => {
    addFeedback({ ...data, picture: window.URL.createObjectURL(data.picture[0]) });
    reset();
  };

  const showError = (type: string) => {
    switch (type) {
      case "required":
        return <Error message={errorMessages.empty} />;
      case "pattern":
        return <Error message={errorMessages.wrong} />;
      default:
        return <Error message={errorMessages.wrong} />;
    }
  };

  return (
    <div className="form">
      <h3 className="form__header">Send us your feedback!</h3>
      <div className="form__container">
        <form className="form__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__section">
            <div className="form__line">
              <label className="form__label">
                Username
                <input
                  className="form__input form__item"
                  type="text"
                  placeholder="Morty"
                  {...register("username", { required: true, pattern: patterns.username })}
                />
                {errors.username ? showError(errors.username.type) : null}
              </label>
              <label className="form__label form__label--short">
                Continents
                <select
                  className="form__dropdown form__item form__item--short"
                  defaultValue="default"
                  {...register("continents", { required: true, pattern: patterns.continents })}
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
                {errors.continents ? showError(errors.continents.type) : null}
              </label>
            </div>
            <div className="form__line">
              <label className="form__label">
                Email
                <input
                  className="form__input form__item"
                  type="text"
                  placeholder="morty.smith@gmail.com"
                  {...register("email", { required: true, pattern: patterns.email })}
                />
                {errors.email ? showError(errors.email.type) : null}
              </label>
              <label className="form__label form__label--short">
                Date of birth
                <input
                  className="form__item"
                  type="date"
                  {...register("dateOfBirth", { required: true, pattern: patterns.dateOfBirth })}
                />
                {errors.dateOfBirth ? showError(errors.dateOfBirth.type) : null}
              </label>
            </div>
            <div className="form__line">
              <label className="form__label form__label--file">
                Profile picture
                <input
                  className="form__file form__item"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  {...register("picture", { required: true })}
                />
                {errors.picture ? showError(errors.picture.type) : null}
              </label>
            </div>
          </div>
          <div className="form__section">
            <div className="form__line form__line--center form__line--radio">
              <span className="form__label">Evaluate the project</span>
              <div className="form__radio-container">
                <label htmlFor="ratingGood" {...register("rating")}>
                  <input id="ratingGood" type="radio" name="rating" value="good" defaultChecked />
                  <span className="form__radio-icon icon--smile-good" />
                </label>
                <label htmlFor="ratingMaybe" {...register("rating")}>
                  <input id="ratingMaybe" type="radio" name="rating" value="maybe" />
                  <span className="form__radio-icon icon--smile-maybe" />
                </label>
                <label htmlFor="ratingBad" {...register("rating")}>
                  <input id="ratingBad" type="radio" name="rating" value="bad" />
                  <span className="form__radio-icon icon--smile-bad" />
                </label>
              </div>
              {errors.rating ? showError(errors.rating.type) : null}
            </div>
            <div className="form__line">
              <label className="form__label">
                Describe your opinion
                <textarea
                  className="form__textarea form__item"
                  placeholder="What do you think about this animated series?"
                  {...register("opinion", { required: true, pattern: patterns.opinion })}
                />
                {errors.opinion ? showError(errors.opinion.type) : null}
              </label>
            </div>
          </div>
          <div className="form__section form__section--wide">
            <label className="form__check">
              <input
                className="form__checkbox"
                type="checkbox"
                {...register("isConfirm", { required: true })}
                onClick={() => setIsConfirm(getValues("isConfirm"))}
              />
              agree to send my data
            </label>
            {errors.isConfirm ? showError(errors.isConfirm.type) : null}
            <button className="button form__button" type="submit" disabled={isConfirm}>
              Create feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

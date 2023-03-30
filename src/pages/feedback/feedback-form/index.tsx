import "./feedback-form.scss";
import React, { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { FeedbackFormType } from "../../../types";
import { IFeedbaclForm } from "../../../interfaces";
import { errorMessages, patterns } from "../../../utils/constants";
import InlineError from "../inline-error";

const FeedbackForm: FunctionComponent<FeedbackFormType> = ({ addFeedback }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFeedbaclForm>({ reValidateMode: "onSubmit" });

  const [isConfirm, setIsConfirm] = useState<boolean>(true);

  const onSubmit = (data: IFeedbaclForm) => {
    addFeedback({ ...data, picture: window.URL.createObjectURL(data.picture[0]) });
    reset();
  };

  const showError = (type: string) => {
    switch (type) {
      case "required":
        return <InlineError message={errorMessages.empty} />;
      case "minLength":
        return <InlineError message={errorMessages.short} />;
      case "maxLength":
        return <InlineError message={errorMessages.long} />;
      case "pattern":
        return <InlineError message={errorMessages.wrong} />;
      default:
        return <InlineError message={errorMessages.wrong} />;
    }
  };

  return (
    <div className="feedback-form">
      <h3 className="feedback-form__header">Send us your feedback!</h3>
      <div className="feedback-form__container">
        <form className="feedback-form__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="feedback-form__section">
            <div className="feedback-form__line">
              <label className="feedback-form__label">
                Username
                <input
                  className="feedback-form__input feedback-form__item"
                  type="text"
                  placeholder="Morty"
                  autoComplete="off"
                  {...register("username", {
                    required: true,
                    pattern: patterns.username,
                    minLength: 4,
                    maxLength: 20,
                  })}
                />
                {errors.username ? showError(errors.username.type) : null}
              </label>
              <label className="feedback-form__label feedback-form__label--short">
                Continents
                <select
                  className="feedback-form__dropdown feedback-form__item feedback-form__item--short"
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
            <div className="feedback-form__line">
              <label className="feedback-form__label">
                Email
                <input
                  className="feedback-form__input feedback-form__item"
                  type="text"
                  placeholder="morty.smith@gmail.com"
                  autoComplete="off"
                  {...register("email", {
                    required: true,
                    pattern: patterns.email,
                    minLength: 8,
                    maxLength: 24,
                  })}
                />
                {errors.email ? showError(errors.email.type) : null}
              </label>
              <label className="feedback-form__label feedback-form__label--short">
                Date of birth
                <input
                  className="feedback-form__item"
                  type="date"
                  {...register("dateOfBirth", { required: true, pattern: patterns.dateOfBirth })}
                />
                {errors.dateOfBirth ? showError(errors.dateOfBirth.type) : null}
              </label>
            </div>
            <div className="feedback-form__line">
              <label className="feedback-form__label feedback-form__label--file">
                Profile picture
                <input
                  className="feedback-form__file feedback-form__item"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  {...register("picture", { required: true })}
                />
                {errors.picture ? showError(errors.picture.type) : null}
              </label>
            </div>
          </div>
          <div className="feedback-form__section">
            <div className="feedback-form__line feedback-form__line--center feedback-form__line--radio">
              <span className="feedback-form__label">Evaluate the project</span>
              <div className="feedback-form__radio-container">
                <label htmlFor="ratingGood" {...register("rating")}>
                  <input id="ratingGood" type="radio" name="rating" value="good" defaultChecked />
                  <span className="feedback-form__rating icon--smile-good" />
                </label>
                <label htmlFor="ratingMaybe" {...register("rating")}>
                  <input id="ratingMaybe" type="radio" name="rating" value="maybe" />
                  <span className="feedback-form__rating icon--smile-maybe" />
                </label>
                <label htmlFor="ratingBad" {...register("rating")}>
                  <input id="ratingBad" type="radio" name="rating" value="bad" />
                  <span className="feedback-form__rating icon--smile-bad" />
                </label>
              </div>
              {errors.rating ? showError(errors.rating.type) : null}
            </div>
            <div className="feedback-form__line">
              <label className="feedback-form__label">
                Describe your opinion
                <textarea
                  className="feedback-form__textarea feedback-form__item"
                  placeholder="What do you think about this animated series?"
                  {...register("opinion", {
                    required: true,
                    pattern: patterns.opinion,
                    minLength: 20,
                    maxLength: 300,
                  })}
                />
                {errors.opinion ? showError(errors.opinion.type) : null}
              </label>
            </div>
          </div>
          <div className="feedback-form__section feedback-form__section--wide">
            <label className="feedback-form__check">
              <input
                className="feedback-form__checkbox"
                type="checkbox"
                {...register("isConfirm", { required: true })}
                onClick={() => setIsConfirm(getValues("isConfirm"))}
              />
              agree to send my data
            </label>
            {errors.isConfirm ? showError(errors.isConfirm.type) : null}
            <button className="button feedback-form__button" type="submit" disabled={isConfirm}>
              Create feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;

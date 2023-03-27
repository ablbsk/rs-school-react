import "./form.scss";
import React, { FunctionComponent, FormEvent } from "react";
import Notice from "../notice";
import Error from "./error";
import Select from "./select";
import Radio from "./radio";
import Input from "./input";
import Date from "./date";
import Picture from "./picture";
import TextArea from "./textarea";
import { FormType } from "../../types";

const Form: FunctionComponent<FormType> = ({
  formRef,
  errors,
  isButtonActive,
  isNoticeShow,
  isFormConfirm,
  addFeedback,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formRef) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { current } = formRef;
      const data = {
        username: current[0].value,
        continents: current[1].value,
        email: current[2].value,
        dateOfBirth: current[3].value,
        picture: current[4].files.length ? window.URL.createObjectURL(current[4].files[0]) : "",
        // eslint-disable-next-line no-nested-ternary
        rating: current[5].checked ? "good" : current[6].checked ? "maybe" : "bad",
        opinion: current[8].value,
        isConfirm: current[9].checked,
      };

      addFeedback(data);
    }
  };

  return (
    <>
      <div className="form">
        <h3 className="form__header">Send us your feedback!</h3>
        <div className="form__container">
          <form ref={formRef} className="form__form">
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
                  onClick={(e) => isFormConfirm(e)}
                />
                agree to send my data
              </label>
              <Error message={errors.isConfirm} />
              <button
                className="button form__button"
                type="submit"
                onClick={(e: FormEvent) => handleSubmit(e)}
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
};

export default Form;

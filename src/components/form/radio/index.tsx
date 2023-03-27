import React, { FunctionComponent } from "react";
import Error from "../error";
import { FormFieldType } from "../../../types";

const Radio: FunctionComponent<FormFieldType> = ({ error }) => {
  return (
    <>
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
      <Error message={error} />
    </>
  );
};

export default Radio;

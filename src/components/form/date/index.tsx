import React, { FunctionComponent } from "react";
import { FormFieldType } from "../../../types";
import Error from "../error";

const Date: FunctionComponent<FormFieldType> = ({ error }) => {
  return (
    <label className="form__label form__label--short">
      Date of birth
      <input className="form__item" type="date" />
      <Error message={error} />
    </label>
  );
};

export default Date;

import React, { FunctionComponent } from "react";
import { FormFieldType } from "../../../types";
import Error from "../error";

const Picture: FunctionComponent<FormFieldType> = ({ error }) => {
  return (
    <label className="form__label form__label--file">
      Profile picture
      <input
        className="form__file form__item"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      />
      <Error message={error} />
    </label>
  );
};

export default Picture;

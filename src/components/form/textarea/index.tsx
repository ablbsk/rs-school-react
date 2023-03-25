import React, { FunctionComponent } from "react";
import { FormFieldType } from "../../../types";
import Error from "../error";

const TextArea: FunctionComponent<FormFieldType> = ({ error }) => {
  return (
    <label className="form__label">
      Describe your opinion
      <textarea
        className="form__textarea form__item"
        placeholder="What do you think about this animated series?"
      />
      <Error message={error} />
    </label>
  );
};

export default TextArea;

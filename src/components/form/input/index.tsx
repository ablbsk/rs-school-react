import React, { FunctionComponent } from "react";
import { InputFiledType } from "../../../types";
import Error from "../error";

const Input: FunctionComponent<InputFiledType> = ({ error, label, type, placeholder }) => {
  return (
    <label className="form__label">
      {label}
      <input className="form__input form__item" type={type} placeholder={placeholder} />
      <Error message={error} />
    </label>
  );
};

export default Input;

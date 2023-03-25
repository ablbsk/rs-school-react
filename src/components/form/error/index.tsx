import "./error.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ErrorType } from "../../../types";

const Error: FunctionComponent<ErrorType> = ({ message }) => {
  return (
    <span
      className={classNames("form__error", {
        "form__error--active": message,
      })}
    >
      {message}
    </span>
  );
};

export default Error;

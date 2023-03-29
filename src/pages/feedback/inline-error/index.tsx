import "./inline-error.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ErrorType } from "../../../types";

const InlineError: FunctionComponent<ErrorType> = ({ message }) => {
  return (
    <span
      className={classNames("inline-error", {
        "inline-error--active": message,
      })}
    >
      {message}
    </span>
  );
};

export default InlineError;

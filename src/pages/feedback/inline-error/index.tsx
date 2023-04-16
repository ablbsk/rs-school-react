import "./inline-error.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { InlineErrorType } from "../../../types";

const InlineError: FunctionComponent<InlineErrorType> = ({ message }) => {
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

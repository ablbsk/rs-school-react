import "./spinner.scss";
import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { SpinnerType } from "../../types";

const Spinner: FunctionComponent<SpinnerType> = ({ isAbsolute }) => {
  return (
    <div className={classNames("spinner", { "spinner--absolute": isAbsolute })}>
      <img className="spinner__img" src="/spinner.png" alt="Loading data" />
    </div>
  );
};

export default Spinner;

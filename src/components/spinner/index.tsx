import "./spinner.scss";
import React, { FunctionComponent } from "react";

const Spinner: FunctionComponent = () => {
  return (
    <div className="spinner">
      <img className="spinner__img" src="../../../public/spinner.png" alt="Loading data" />
    </div>
  );
};

export default Spinner;

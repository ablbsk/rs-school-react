import "./not-found.scss";
import React, { FunctionComponent } from "react";

const NotFound: FunctionComponent = () => {
  return (
    <div className="not-found">
      <img className="not-found__img" src="../../../public/not-found.png" alt="Not found" />
    </div>
  );
};

export default NotFound;

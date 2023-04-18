import "./shadow.scss";
import React, { FunctionComponent } from "react";
import { ShadowType } from "../../types";

const Shadow: FunctionComponent<ShadowType> = ({ closeModal }) => {
  return <div className="shadow" onClick={closeModal} aria-hidden="true" />;
};

export default Shadow;

import React, { FunctionComponent } from "react";
import { FormFieldType } from "../../../types";
import Error from "../error";

const Select: FunctionComponent<FormFieldType> = ({ error }) => {
  return (
    <label className="form__label form__label--short">
      Continents
      <select className="form__dropdown form__item form__item--short" defaultValue="default">
        <option value="default" disabled>
          Select
        </option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="north america">North America</option>
        <option value="south america">South America</option>
        <option value="antarctica">Antarctica</option>
        <option value="australia">Australia</option>
      </select>
      <Error message={error} />
    </label>
  );
};

export default Select;

import "./item.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ItemType } from "../../../types";

const Item: FunctionComponent<ItemType> = ({ feedback }) => {
  return (
    <li className="item">
      <div className="item__wrapper">
        <img className="item__picture" src={feedback.picture} alt="Profile" />
        <div className="item__column">
          <h3 className="item__header">{feedback.username}</h3>
          <h4 className="item__subheader">{feedback.email}</h4>
          <div className="item__info">
            <span className="item__info-item">{feedback.continents}</span>
            <span className="item__info-item">({feedback.dateOfBirth})</span>
          </div>
        </div>
        <span
          className={classNames("item__info-item", {
            "icon--smile-good": feedback.rating === "good",
            "icon--smile-maybe": feedback.rating === "maybe",
            "icon--smile-bad": feedback.rating === "bad",
          })}
        />
        <p className="item__description">{feedback.opinion}</p>
      </div>
    </li>
  );
};

export default Item;

import "./feedback-card.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { FeedbackCardType } from "../../../types";

const FeedbackCard: FunctionComponent<FeedbackCardType> = ({ feedback }) => {
  return (
    <li className="feedback-card">
      <div className="feedback-card__wrapper">
        <img className="feedback-card__picture" src={feedback.picture} alt="Profile" />
        <div className="feedback-card__column">
          <h3 className="feedback-card__header">{feedback.username}</h3>
          <h4 className="feedback-card__subheader">{feedback.email}</h4>
          <div className="feedback-card__info">
            <span className="feedback-card__info-item">{feedback.continents}</span>
            <span className="feedback-card__info-item">({feedback.dateOfBirth})</span>
          </div>
        </div>
        <span
          className={classNames("feedback-card__info-item", {
            "icon--smile-good": feedback.rating === "good",
            "icon--smile-maybe": feedback.rating === "maybe",
            "icon--smile-bad": feedback.rating === "bad",
          })}
        />
        <p className="feedback-card__description">{feedback.opinion}</p>
      </div>
    </li>
  );
};

export default FeedbackCard;

import "./item.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ItemType } from "../../../types";

const Item: FunctionComponent<ItemType> = ({ feedback }) => {
  // const feedback = {
  //   continents: "north america",
  //   dateOfBirth: "2023-03-15",
  //   email: "mortykkk@gmail.com",
  //   isConfirm: true,
  //   opinion: "This is description, where i say, morty is one of the most beautiful person",
  //   picture: "C:\\fakepath\\not-found.png",
  //   rating: "maybe",
  //   username: "mortyc",
  // };

  // const getFile = (): string => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(feedback.picture[0]);
  //
  //   reader.onload = (e: ProgressEvent<FileReader>) => {
  //     if (e.target !== null) {
  //       console.log(e.target.result);
  //     }
  //   };
  //
  //   //reader.readAsArrayBuffer(file);
  // };

  return (
    <li className="item">
      <div className="item__wrapper">
        {/* <img className="item__picture" src={getFile()} alt={feedback.username} /> */}
        <span className="item__picture" />
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

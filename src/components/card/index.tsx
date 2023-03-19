import "./card.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { CardType } from "../../types";

const Card: FunctionComponent<CardType> = ({ character }) => {
  return (
    <article className="card">
      <div className="card__wrapper">
        <div className="card__column card__column--img">
          <img className="card__img" src={character.image} alt={character.name} />
        </div>
        <div className="card__column">
          <h4 className="card__header">{character.name}</h4>
          <div className="card__tags">
            <span
              className={classNames(
                "card__tag",
                { "card__tag--female": character.gender === "Female" },
                { "card__tag--male": character.gender === "Male" },
                { "card__tag--genderless": character.gender === "Genderless" }
              )}
            >
              {character.gender}
            </span>
            <span
              className={classNames(
                "card__tag",
                { "card__tag--alive": character.status === "Alive" },
                { "card__tag--dead": character.status === "Dead" }
              )}
            >
              {character.status}
            </span>
          </div>
          <div className="card__description">
            <p className="card__text">
              <span className="card__title">Species:</span>
              {character.species}
            </p>
            <p className="card__text">
              <span className="card__title">Type:</span>
              {character.type.length ? character.type : "-"}
            </p>
            <p className="card__text">
              <span className="card__title">Location:</span>
              {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;

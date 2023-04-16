import "./character-card.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { CharacterCardType } from "../../../types";

const CharacterCard: FunctionComponent<CharacterCardType> = ({ character, openModal }) => {
  return (
    <article className="character-card">
      <div className="character-card__wrapper">
        <div className="character-card__column character-card__column--img">
          <img className="character-card__img" src={character.image} alt={character.name} />
        </div>
        <div className="character-card__column">
          <h4
            className="character-card__header"
            onClick={() => openModal(character.id)}
            aria-hidden="true"
          >
            {character.name}
          </h4>
          <div className="character-card__tags">
            <span
              className={classNames(
                "tag",
                { "tag--female": character.gender === "Female" },
                { "tag--male": character.gender === "Male" },
                { "tag--genderless": character.gender === "Genderless" }
              )}
            >
              {character.gender}
            </span>
            <span
              className={classNames(
                "tag",
                { "tag--alive": character.status === "Alive" },
                { "tag--dead": character.status === "Dead" }
              )}
            >
              {character.status}
            </span>
          </div>
          <div className="character-card__description">
            <p className="character-card__text">
              <span className="character-card__title">Species:</span>
              {character.species}
            </p>
            <p className="character-card__text">
              <span className="character-card__title">Type:</span>
              {character.type.length ? character.type : "-"}
            </p>
            <p className="character-card__text">
              <span className="character-card__title">Location:</span>
              {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;

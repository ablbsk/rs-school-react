import "./character-card.scss";
import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { CharacterCardType } from "../../../types";

const CharacterCard: FunctionComponent<CharacterCardType> = ({ character }) => {
  return (
    <article className="character-card">
      <div className="character-card__wrapper">
        <div className="character-card__column character-card__column--img">
          <img className="character-card__img" src={character.image} alt={character.name} />
        </div>
        <div className="character-card__column">
          <h4 className="character-card__header">{character.name}</h4>
          <div className="character-card__tags">
            <span
              className={classNames(
                "character-card__tag",
                { "character-card__tag--female": character.gender === "Female" },
                { "character-card__tag--male": character.gender === "Male" },
                { "character-card__tag--genderless": character.gender === "Genderless" }
              )}
            >
              {character.gender}
            </span>
            <span
              className={classNames(
                "character-card__tag",
                { "character-card__tag--alive": character.status === "Alive" },
                { "character-card__tag--dead": character.status === "Dead" }
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

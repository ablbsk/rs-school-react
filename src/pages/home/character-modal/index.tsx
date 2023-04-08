import "./character-modal.scss";
import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { CharacterModalType } from "../../../types";

const CharacterModal: FunctionComponent<CharacterModalType> = ({
  characterWithEpisodes,
  closeModal,
}) => {
  const { character, episodes } = characterWithEpisodes;

  const episodesBlocks = episodes.map((item, index) => {
    let header = !index ? "First" : "Last";
    header = episodes.length < 2 ? "First/Last" : header;

    return (
      <div key={header} className="character-modal__ceil">
        <h3 className="character-modal__subheader">{header} seen in:</h3>
        <ul className="character-modal__list">
          <li className="character-modal__item">
            <span className="character-modal__title">Episode:</span>
            {item.name} ({item.episode})
          </li>
          <li className="character-modal__item">
            <span className="character-modal__title">Air date:</span>
            {item.airDate}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="character-modal">
      <h2 className="character-modal__header">{character.name}</h2>
      <span className="character-modal__close" onClick={closeModal} aria-hidden="true">
        X
      </span>
      <div className="character-modal__content">
        <div className="character-modal__ceil">
          <img className="character-modal__img" src={character.image} alt={character.name} />
        </div>
        <div className="character-modal__ceil">
          <div className="character-modal__tags">
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
          <ul className="character-modal__list">
            <li className="character-modal__item">
              <span className="character-modal__title">Species:</span>
              {character.species}
            </li>
            <li className="character-modal__item">
              <span className="character-modal__title">Type:</span>
              {character.type.length ? character.type : "-"}
            </li>
            <li className="character-modal__item">
              <span className="character-modal__title">Origin:</span>
              {character.origin.name}
            </li>
            <li className="character-modal__item">
              <span className="character-modal__title">Location:</span>
              {character.location.name}
            </li>
          </ul>
        </div>
        {episodesBlocks}
      </div>
    </div>
  );
};

export default CharacterModal;

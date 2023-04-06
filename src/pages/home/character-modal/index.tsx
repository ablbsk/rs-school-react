import "./character-modal.scss";
import React, { FunctionComponent } from "react";
import { CharacterModalType } from "../../../types";

const CharacterModal: FunctionComponent<CharacterModalType> = ({ character }) => {
  return (
    <div className="shadow">
      <div className="center">
        <div className="modal">
          <h2 className="modal__header">{character.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;

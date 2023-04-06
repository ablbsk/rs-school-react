import "./home-grid.scss";
import React, { FunctionComponent, useState } from "react";
import { HomeGridType } from "../../../types";
import CharacterCard from "../character-card";
import CharacterModal from "../character-modal";

const HomeGrid: FunctionComponent<HomeGridType> = ({ elements }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [chooseCharacter, setChooseCharacter] = useState<any>(null);

  const cards = elements.map((item) => (
    <CharacterCard
      character={item}
      key={`${item.name}-${item.id}`}
      openModal={(isShow, character) => {
        setShowModal(isShow);
        setChooseCharacter(character);
      }}
    />
  ));

  return (
    <>
      <section id="homeGrid" className="home-grid">
        <div className="wrapper home-grid__wrapper">
          {cards.length ? cards : <h2 className="home-grid__header">No results</h2>}
        </div>
      </section>
      {showModal && <CharacterModal character={chooseCharacter} />}
    </>
  );
};

export default HomeGrid;

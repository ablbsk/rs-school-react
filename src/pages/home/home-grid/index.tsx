import "./home-grid.scss";
import React, { FunctionComponent, useState } from "react";
import { HomeGridType } from "../../../types";
import { ICharacter } from "../../../interfaces";
import CharacterCard from "../character-card";
import CharacterModal from "../character-modal";
import Shadow from "../../../components/shadow";

const HomeGrid: FunctionComponent<HomeGridType> = ({ elements }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [character, setChooseCharacter] = useState<ICharacter | undefined>();

  const cards = elements.map((item) => (
    <CharacterCard
      character={item}
      key={`${item.name}-${item.id}`}
      openModal={(isShow, data) => {
        setShowModal(isShow);
        setChooseCharacter(data);
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
      {showModal && character && (
        <>
          <CharacterModal character={character} />
          <Shadow closeModal={() => setShowModal(false)} />
        </>
      )}
    </>
  );
};

export default HomeGrid;

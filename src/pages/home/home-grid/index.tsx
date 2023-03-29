import "./home-grid.scss";
import React, { FunctionComponent } from "react";
import { HomeGridType } from "../../../types";
import CharacterCard from "../character-card";

const HomeGrid: FunctionComponent<HomeGridType> = ({ elements }) => {
  const cards = elements.map((item) => (
    <CharacterCard character={item} key={`${item.name}-${item.id}`} />
  ));

  return (
    <section className="home-grid">
      <div className="wrapper home-grid__wrapper">
        {cards.length ? cards : <h2 className="home-grid__header">No results</h2>}
      </div>
    </section>
  );
};

export default HomeGrid;

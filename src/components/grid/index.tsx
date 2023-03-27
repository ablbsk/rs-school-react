import "./grid.scss";
import React, { FunctionComponent } from "react";
import { GridType } from "../../types";
import Card from "../card";

const Grid: FunctionComponent<GridType> = ({ characters }) => {
  const cards = characters.map((item) => <Card character={item} key={`${item.name}-${item.id}`} />);

  return (
    <section className="grid">
      <div className="wrapper grid__wrapper">
        {cards.length ? cards : <h2 className="grid__header">No results</h2>}
      </div>
    </section>
  );
};

export default Grid;

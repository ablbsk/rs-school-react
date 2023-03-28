import "./home.scss";
import React, { FunctionComponent, useState, useEffect, BaseSyntheticEvent } from "react";
import Grid from "../../components/grid";
import data from "../../data/data.json";
import { ICharacter } from "../../interfaces";

const Home: FunctionComponent = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem("searchHistory") || "");
  const [characters, setCharacters] = useState<ICharacter[]>(data.results);

  useEffect(() => {
    if (search.length) {
      localStorage.setItem("searchHistory", search);
    }
  }, [search]);

  const filterCards = (): void => {
    if (search.length) {
      const result = characters.filter((item) => item.name.toLowerCase().includes(search));
      setCharacters(result);
    }
  };

  const updateSearchValue = (e: BaseSyntheticEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.nativeEvent.inputType === undefined) {
      setSearch("");
      setCharacters(data.results);
    } else {
      setSearch(e.target.value);
    }
  };

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <div className="search">
          <span className="search__icon search__icon--search" />
          <input
            className="search__input"
            type="search"
            placeholder="What do you want to find?"
            onChange={(e: BaseSyntheticEvent) => updateSearchValue(e)}
          />
          <button className="search__button" type="button" onClick={filterCards}>
            <span className="search__icon search__icon--arrow" />
          </button>
        </div>
      </div>
      <Grid characters={characters} />
    </>
  );
};

export default Home;

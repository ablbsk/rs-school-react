import "./home.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ICharacter } from "../../interfaces";
import { getCharactersByQuery } from "../../services";
import HomeGrid from "./home-grid";
import Spinner from "../../components/spinner";
import Search from "./search";
import { RootState } from "../../types";

const Home: FunctionComponent = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { query } = useSelector((state: RootState) => state.search);

  useEffect((): void => {
    (async () => {
      try {
        setLoading(true);

        const charactersData = await getCharactersByQuery(query);
        const result = Object.hasOwn(charactersData, "results") ? charactersData.results : [];
        setCharacters(result);
        setLoading(false);
        localStorage.setItem("searchHistory", query);
      } catch {
        setLoading(false);
      }
    })();
  }, [query]);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search />
      </div>
      {loading ? <Spinner isAbsolute={false} /> : <HomeGrid elements={characters} />}
    </>
  );
};

export default Home;

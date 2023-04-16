import "./home.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ICharacter } from "../../interfaces";
import { getCharactersByQuery } from "../../services";
import HomeGrid from "./home-grid";
import Spinner from "../../components/spinner";
import Search from "./search";

const Home: FunctionComponent = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem("searchHistory") || "");
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [indicator, setIndicator] = useState<boolean>(true);

  useEffect((): void => {
    (async () => {
      try {
        if (indicator) {
          setLoading(true);
          setIndicator(false);

          const charactersData = await getCharactersByQuery(search);
          const result = Object.hasOwn(charactersData, "results") ? charactersData.results : [];
          setCharacters(result);
          setLoading(false);
          localStorage.setItem("searchHistory", search);
        }
      } catch {
        setLoading(false);
      }
    })();
  }, [indicator, search]);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search
          search={search}
          setSearch={(value) => setSearch(value)}
          setIndicator={(value) => setIndicator(value)}
        />
      </div>
      {loading ? <Spinner isAbsolute={false} /> : <HomeGrid elements={characters} />}
    </>
  );
};

export default Home;

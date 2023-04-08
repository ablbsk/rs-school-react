import "./home.scss";
import React, { FunctionComponent, useState } from "react";
import { ICharacter } from "../../interfaces";
import HomeGrid from "./home-grid";
import Spinner from "../../components/spinner";
import Search from "./search/search";

const Home: FunctionComponent = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search
          setCharacters={(data) => setCharacters(data)}
          setLoading={(value) => setLoading(value)}
        />
      </div>
      {loading ? <Spinner isAbsolute={false} /> : <HomeGrid elements={characters} />}
    </>
  );
};

export default Home;

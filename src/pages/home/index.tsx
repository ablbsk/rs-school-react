import "./home.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import HomeGrid from "./home-grid";
import Spinner from "../../components/spinner";
import Search from "./search";
import { RootState } from "../../types";

const Home: FunctionComponent = () => {
  const { characters, query, isLoading } = useSelector((state: RootState) => state.main);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search search={query} />
      </div>
      {isLoading ? <Spinner isAbsolute={false} /> : <HomeGrid elements={characters} />}
    </>
  );
};

export default Home;

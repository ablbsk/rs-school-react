import "./home.scss";
import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import HomeGrid from "./home-grid";
import Spinner from "../../components/spinner";
import Search from "./search";
import { RootState } from "../../types";
import { fetchCharactersByQuery } from "../../services";
import { useStoreDispatch } from "../../store";

const Home: FunctionComponent = () => {
  const dispatch = useStoreDispatch();

  const { characters, query, isLoading } = useSelector((state: RootState) => state.main);

  useEffect((): void => {
    dispatch(fetchCharactersByQuery(query));
  }, [dispatch, query]);

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

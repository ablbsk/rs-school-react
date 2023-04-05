import "./home.scss";
import React, {
  FunctionComponent,
  useState,
  useEffect,
  KeyboardEvent,
  useRef,
  BaseSyntheticEvent,
} from "react";
import HomeGrid from "./home-grid";
import Spinner from "../../components/spinner";
import { ICharacter } from "../../interfaces";
import { getCharactersByQuery } from "../../services";

const Home: FunctionComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>(localStorage.getItem("searchHistory") || "");
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect((): void => {
    setLoading(true);

    getCharactersByQuery(search).then((data) => {
      const result = Object.hasOwn(data, "results") ? data.results : [];
      setCharacters(result);
      setLoading(false);
    });

    localStorage.setItem("searchHistory", search);
  }, [search]);

  const updateSearchValue = (e: BaseSyntheticEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.nativeEvent.inputType === undefined) {
      setSearch("");
      localStorage.setItem("searchHistory", "");
    } else {
      setSearch(e.target.value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;

    if (e.key === "Enter") {
      setSearch(value);
    }
  };

  const arrowClick = (): void => {
    const { value } = searchRef.current as HTMLInputElement;
    setSearch(value);
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
            value={search}
            placeholder="What do you want to find?"
            ref={searchRef}
            onKeyDown={handleKeyDown}
            onChange={(e: BaseSyntheticEvent) => updateSearchValue(e)}
          />
          <button className="search__button" type="button" onClick={arrowClick}>
            <span className="search__icon search__icon--arrow" />
          </button>
        </div>
      </div>
      {loading ? <Spinner /> : <HomeGrid elements={characters} />}
    </>
  );
};

export default Home;

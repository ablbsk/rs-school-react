import "./search.scss";
import React, {
  BaseSyntheticEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { getCharactersByQuery } from "../../../services";
import { SearchType } from "../../../types";

const Search: FunctionComponent<SearchType> = ({ setCharacters, setLoading }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>(localStorage.getItem("searchHistory") || "");
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
  }, [search, indicator, setLoading, setCharacters]);

  const updateSearchValue = (e: BaseSyntheticEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.nativeEvent.inputType === undefined) {
      setSearch("");
      setIndicator(true);
      localStorage.setItem("searchHistory", "");
    } else {
      setSearch(e.target.value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;

    if (e.key === "Enter") {
      setSearch(value);
      setIndicator(true);
    }
  };

  const arrowClick = (): void => {
    const { value } = searchRef.current as HTMLInputElement;
    setSearch(value);
    setIndicator(true);
  };

  return (
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
  );
};

export default Search;

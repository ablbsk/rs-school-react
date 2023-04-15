import "./search.scss";
import React, { BaseSyntheticEvent, FunctionComponent, KeyboardEvent, useRef } from "react";
import { SearchType } from "../../../types";

const Search: FunctionComponent<SearchType> = ({ search, setSearch, setIndicator }) => {
  const searchRef = useRef<HTMLInputElement>(null);

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

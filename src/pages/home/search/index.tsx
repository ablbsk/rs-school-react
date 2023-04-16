import "./search.scss";
import React, { BaseSyntheticEvent, FunctionComponent, KeyboardEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../../store/search";

const Search: FunctionComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const updateSearchValue = (e: BaseSyntheticEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.nativeEvent.inputType === undefined) {
      dispatch(setQuery(""));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;

    if (e.key === "Enter") {
      dispatch(setQuery(value));
    }
  };

  const arrowClick = (): void => {
    const { value } = searchRef.current as HTMLInputElement;
    dispatch(setQuery(value));
  };

  return (
    <div className="search">
      <span className="search__icon search__icon--search" />
      <input
        className="search__input"
        type="search"
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

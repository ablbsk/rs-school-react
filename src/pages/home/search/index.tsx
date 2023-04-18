import "./search.scss";
import React, {
  BaseSyntheticEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { setQuery } from "../../../store/main";
import { SearchType } from "../../../types";
import { fetchCharactersByQuery } from "../../../services";
import { useStoreDispatch } from "../../../store";

const Search: FunctionComponent<SearchType> = ({ search }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const dispatch = useStoreDispatch();

  const [searchValue, setSearchValue] = useState<string>(search);

  useEffect((): void => {
    dispatch(fetchCharactersByQuery(search));
  }, [dispatch, search]);

  const updateSearchValue = (e: BaseSyntheticEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.nativeEvent.inputType === undefined) {
      setSearchValue("");
      dispatch(setQuery(""));
    } else {
      setSearchValue(e.target.value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;

    if (e.key === "Enter") {
      setSearchValue(value);
      dispatch(setQuery(value));
    }
  };

  const arrowClick = (): void => {
    const { value } = searchRef.current as HTMLInputElement;
    setSearchValue(value);
    dispatch(setQuery(value));
  };

  return (
    <div className="search">
      <span className="search__icon search__icon--search" />
      <input
        className="search__input"
        type="search"
        value={searchValue}
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

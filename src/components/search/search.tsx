import './search.scss';
import React, { FunctionComponent } from 'react';

const Search: FunctionComponent = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="What do you search?" />
      <span className="search__icon search__icon--search" />
      <span className="search__icon search__icon--arrow" />
    </div>
  );
};

export default Search;

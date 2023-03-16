import './home.scss';
import React, { FunctionComponent } from 'react';
import Grid from '../grid/grid';
import Search from '../search/search';
import data from '../../data/data.json';

const Home: FunctionComponent = () => {
  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search />
      </div>
      <Grid characters={data.results} />
    </>
  );
};

export default Home;

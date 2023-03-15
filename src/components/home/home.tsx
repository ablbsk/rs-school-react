import './home.scss';
import React, { FunctionComponent } from 'react';
import Header from '../header/header';
import Grid from '../grid/grid';
import Search from '../search/search';
import Footer from '../footer/footer';

const Home: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search />
      </div>
      <Grid />
      <Footer />
    </>
  );
};

export default Home;

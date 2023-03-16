import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/home';
import Header from '../header/header';
import Footer from '../footer/footer';
import AboutUs from '../aboutUs/aboutUs';
import NotFound from '../notFound/notFound';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

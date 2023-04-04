import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Header from "../header";
import Footer from "../footer";
import AboutUs from "../../pages/about-us";
import NotFound from "../../pages/not-found";
import Feedback from "../../pages/feedback";

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home";
import Header from "../header";
import Footer from "../footer";
import AboutUs from "../aboutUs";
import NotFound from "../notFound";
import Feedback from "../feedback";

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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

import { ThemeContext, ThemeColors } from "./assets/themes/ThemeContext";

import AboutProject from "./components/pages/AboutProject";

const App = () => {
  return (
    <ThemeContext.Provider value={ThemeColors.dark}>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Main  content={<AboutProject></AboutProject>}/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;

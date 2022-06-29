import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Main from ".components/layout/Main"

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Main content={<AboutProject />} />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;

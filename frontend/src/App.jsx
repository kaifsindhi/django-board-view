import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavigation from "./components/navigation/TopNavigation";
import Board from "./components/board/Board";
import Card from "./components/card/Card";
import Home from "./components/home/Home";

const App = (props) => {
  return (
    <>
      <TopNavigation />
      {/* <Card /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/b/:board_id" element={<Board />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavigation from "./components/navigation/TopNavigation";
import Board from "./components/board/Board";
import Card from "./components/board/Card";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <TopNavigation />
      <Card />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="b/:boardId" element={<Board Title="My First Board" />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;

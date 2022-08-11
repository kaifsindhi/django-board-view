import React from "react";
import List from "./List";
import TopBar from "./TopBar";
import ListTileAdd from "./ListTileAdd";
import "./board.css";

const Board = (props) => {
  return (
    <section className="board">
      <TopBar Title={props.Title} />
      <div className="board_flex">
        <List Title="My First List" />
        <List Title="My First List" />
        <ListTileAdd />
      </div>
    </section>
  );
};

export default Board;

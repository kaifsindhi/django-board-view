import React from "react";
import List from "./List";
import TopBar from "./TopBar";

const Board = (props) => {
  return (
    <section className="board">
      <TopBar Title={props.Title} />
      <List Title="My First List" />
    </section>
  );
};

export default Board;

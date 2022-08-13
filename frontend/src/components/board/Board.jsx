import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import List from "./List";
import TopBar from "./TopBar";
import ListTileAdd from "./ListTileAdd";
import "./board.css";

const Board = (props) => {
  const params = useParams();

  const [board, setBoard] = useState([]); // Board info
  const [lists, setLists] = useState([]); // Lists

  useEffect(() => {
    // Get board info
    fetch("http://127.0.0.1:8000/board/" + params.board_id)
      .then((response) => response.json())
      .then(setBoard);
  }, []);

  useEffect(() => {
    // Get lists
    fetch("http://127.0.0.1:8000/board/" + params.board_id + "/list/")
      .then((response) => response.json())
      .then(setLists);
  }, [lists]);

  return (
    <section className="board">
      <TopBar Title={board.Title} />
      <div className="board_flex">
        {lists.map((list) => (
          <List board_id={params.board_id} list={list} />
        ))}
        <ListTileAdd board_id={params.board_id} />
      </div>
    </section>
  );
};

export default Board;

import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import List from "./List";
import ListTileAdd from "./AddAListTile";
import "./board.css";

const Board = () => {
  const [action, setAction] = useState("");
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

  const editBoard = () => {
    console.log(board);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Id: board.Id,
        Title: board.Title,
      }),
    };
    fetch("http://127.0.0.1:8000/board/" + board.Id, requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  const renderCreateDefault = () => {
    return (
      <button className="title" onClick={() => setAction("edit")}>
        <h5>{board.Title}</h5>
      </button>
    );
  };

  const renderEditInput = () => {
    return (
      <form
        onSubmit={() => {
          setAction("");
          editBoard();
        }}
      >
        <input
          type="text"
          id="Title"
          value={board.Title}
          onChange={(e) =>
            setBoard({ Id: board.Id, Title: e.target.value })
          }
        />
      </form>
    );
  };

  return (
    <section className="board">
      <div className="top">
        {action === "" && renderCreateDefault()}
        {action === "edit" && renderEditInput()}
      </div>
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

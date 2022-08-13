import React from "react";
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";

const BoardTile = (props) => {
  const board = props.board;

  const deleteBoard = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Board: board.Id,
      }),
    };
    fetch("http://127.0.0.1:8000/board/" + board.Id, requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  return (
    <div>
      <div className="board_tile">
        <a href={"/b/" + board.Id}>
          <div className="title">
            <h6>{board.Title}</h6>
          </div>
        </a>
        <div className="icons">
          <a href={"/b/" + board.Id} />
          <button className="delete" onClick={() => deleteBoard()}>
            <div className="default">
              <AiOutlineDelete size={16} color="inherit" />
            </div>
            <div className="hover">
              <AiFillDelete size={16} color="inherit" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardTile;

import React from "react";

const BoardTile = (props) => {
  const board = props.board;
  
  return (
    <div>
      <a href={"/b/" + board.Id}>
        <div className="board_tile">
          <h6>{board.Title}</h6>
        </div>
      </a>
    </div>
  );
};

export default BoardTile;

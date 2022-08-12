import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const BoardTileAdd = () => {
  const [action, setAction] = useState("");
  const [board, setBoard] = useState({ Title: "" });
  // actions : Default"" / Create"create" / Delete"delete" / Edit"edit"

  const createBoard = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Title: board.Title,
      }),
    };
    fetch("http://127.0.0.1:8000/board/", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/b/" + data.Id));
  };

  const renderCreateBoard = () => {
    return (
      <form>
        <div>
          <div className="board_tile_create">
            <div className="board_tile_line">
              <input
                type="text"
                id="Title"
                placeholder="Enter a board title..."
                onChange={(e) => setBoard({ Title: e.target.value })}
              />
            </div>
            <div className="board_tile_2nd">
              <button
                className="add_board"
                onClick={() => {
                  // Create
                  setAction("");
                  createBoard();
                }}
              >
                Add board
              </button>
              <button className="cancel" onClick={() => setAction("")}>
                <MdOutlineCancel color="inherit" size={"100%"} />
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const renderCreateDefault = () => {
    return (
      <div onClick={() => setAction("create")}>
        <div className="board_tile_add">
          <h6>Create new board</h6>
        </div>
      </div>
    );
  };

  return (
    <>
      {action === "" && renderCreateDefault()}
      {action === "create" && renderCreateBoard()}
    </>
  );
};

export default BoardTileAdd;

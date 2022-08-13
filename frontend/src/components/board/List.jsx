import { useEffect, useState, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import ListTile from "./CardTile";
import ListAdd from "./AddACardTile";
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";

const List = (props) => {
  const list = props.list; // Information about the list
  const [tiles, setTiles] = useState([]); // List tiles

  useEffect(() => {
    // Get list tiles
    fetch(
      "http://127.0.0.1:8000/board/" +
        props.board_id +
        "/list/" +
        list.Id +
        "/card/"
    )
      .then((response) => response.json())
      .then(setTiles);
  }, [list]);

  const deleteList = () => {
    console.log(list.Id);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        List: list.Id,
      }),
    };
    fetch("http://127.0.0.1:8000/list/" + list.Id, requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  // console.log(tiles);

  return (
    <div>
      <div className="list">
        <div className="list_title">
          <h6>{list.Title}</h6>
          <button
            className="list_tile_edit delete"
            onClick={() => deleteList()}
          >
            <div className="default">
              <AiOutlineDelete size={12} color="inherit" />
            </div>
            <div className="hover">
              <AiFillDelete size={12} color="inherit" />
            </div>
          </button>
        </div>
        <ul>
          {tiles.map((tile) => (
            <ListTile tile={tile} />
          ))}
        </ul>
        <ListAdd list={list} />
        <div className="list_end_pad" />
      </div>
    </div>
  );
};

export default List;

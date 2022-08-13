import { useEffect, useState, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import ListTile from "./CardTile";
import ListAdd from "./AddACardTile";

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

  // console.log(tiles);

  return (
    <div>
      <div className="list">
        <div className="list_title">
          <h6>{list.Title}</h6>
          <button>
            <BsThreeDots size={16} color="black" />
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

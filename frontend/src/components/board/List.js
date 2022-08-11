import { useEffect, useState, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import ListTile from "./ListTile";

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
  }, []);

  console.log(tiles);

  return (
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
        {/* <ListTile Title="My First Card" />
        <ListTile Title="My First Card" /> */}
      </ul>
      <div className="list_title">
        <button className="list_add_card">
          <AiOutlinePlus size={16} color="gray" />
          <h6>Add a card</h6>
        </button>
        <button>
          <a title="Create from template">
            <HiOutlineTemplate size={16} color="gray" />
          </a>
        </button>
      </div>
      <div className="list_end_pad" />
    </div>
  );
};

export default List;

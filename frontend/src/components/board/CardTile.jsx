import React from "react";
import {
  AiOutlineEdit,
  AiFillEdit,
  AiOutlineDelete,
  AiFillDelete,
} from "react-icons/ai";

const ListTile = (props) => {
  const card = props.tile; // Information about the card

  const deleteCard = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Card: card.Id,
      }),
    };
    fetch("http://127.0.0.1:8000/card/" + card.Id, requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  return (
    <li>
      <div className="list_tile">
        <div className="list_tile_title">
          <h6>{card.Title}</h6>
          <button className="list_tile_edit edit">
            <div className="default">
              <AiOutlineEdit size={16} color="inherit" />
            </div>
            <div className="hover">
              <AiFillEdit size={16} color="inherit" />
            </div>
          </button>
          <button
            className="list_tile_edit delete"
            onClick={() => deleteCard()}
          >
            <div className="default">
              <AiOutlineDelete size={12} color="inherit" />
            </div>
            <div className="hover">
              <AiFillDelete size={12} color="inherit" />
            </div>
          </button>
        </div>
        {/* <div className="list_tile_title">
          <GrTextAlignFull size={14} color="gray" />
        </div> */}
      </div>
    </li>
  );
};

export default ListTile;

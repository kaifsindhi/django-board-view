import { useState } from "react";
import {
  AiOutlineEdit,
  AiFillEdit,
  AiOutlineDelete,
  AiFillDelete,
} from "react-icons/ai";

const ListTile = (props) => {
  const [card, setCard] = useState(props.tile);
  const [action, setAction] = useState("");

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

  const editCard = () => {
    console.log(card);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        List: card.List,
        Id: card.Id,
        Title: card.Title,
      }),
    };
    fetch("http://127.0.0.1:8000/card/" + card.Id, requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  const renderCreateDefault = () => {
    return (
      <div className="list_tile">
        <div className="list_tile_title">
          <h6>{card.Title}</h6>
          <button
            className="list_tile_edit edit"
            onClick={() => setAction("edit")}
          >
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
    );
  };

  const renderEditInput = () => {
    return (
      <form
        className="card"
        onSubmit={() => {
          setAction("");
          editCard();
        }}
      >
        <input
          type="text"
          id="Title"
          value={card.Title}
          onChange={(e) =>
            setCard({ List: card.List, Id: card.Id, Title: e.target.value })
          }
        />
      </form>
    );
  };

  return (
    <li>
      {action === "" && renderCreateDefault()}
      {action === "edit" && renderEditInput()}
    </li>
  );
};

export default ListTile;

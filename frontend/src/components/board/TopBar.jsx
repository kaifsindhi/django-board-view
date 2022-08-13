import { useState } from "react";
import { AiOutlineStar, AiFillStar, AiOutlineLock } from "react-icons/ai";
import { MdPublic } from "react-icons/md";

const TopBar = (props) => {
  const [action, setAction] = useState("");
  const [b, setBoardTitle] = useState(props.board);

  const editBoard = () => {
    console.log(b);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Id: b.Id,
        Title: b.Title,
      }),
    };
    fetch("http://127.0.0.1:8000/board/" + b.Id, requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  const renderCreateDefault = () => {
    return (
      <button className="title" onClick={() => setAction("edit")}>
        <h5>{props.board.Title}</h5>
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
        <input />
      </form>
    );
  };

  return (
    <div className="top">
      {action === "" && renderCreateDefault()}
      {action === "edit" && renderEditInput()}

      {/* <button className="icon dark">
        <div className="star">
          <AiOutlineStar color="inherit" size={20} />
        </div>
        <AiFillStar color="gold" size={20}/>
      </button> */}

      {/* <button className="divider">|</button> */}

      {/* <button className="item">
        <AiOutlineLock color="white" size={18} />
        <h5 className="hide_mobile">Private</h5>
        <MdPublic color="white" size={18}/>
        <h5 className="hide_mobile">Public</h5>
      </button> */}
    </div>
  );
};

export default TopBar;
//defunct
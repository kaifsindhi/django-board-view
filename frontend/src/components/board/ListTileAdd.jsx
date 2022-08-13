import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const ListTileAdd = (props) => {
  const board_id = props.board_id;
  const [action, setAction] = useState("");
  const [list, setList] = useState({ Title: "" });
  // actions : Default"" / Create"create" / Delete"delete" / Edit"edit"

  const createList = () => {
    console.log(list);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Board: board_id,
        Title: list.Title,
      }),
    };
    fetch("http://127.0.0.1:8000/board/" + board_id + "/list/", requestOptions).then(
      (response) => {
        console.log(response.json());
      }
    );
  };

  const renderCreateList = () => {
    return (
      <form>
        <div className="list">
          <div className="enter_list_title">
            <input
              type="text"
              id="Title"
              placeholder="Enter a list title..."
              onChange={(e) => setList({ Title: e.target.value })}
            />
          </div>
          <div className="enter_list_title">
            <button
              onClick={() => {
                setAction("");
                createList();
              }}
            >
              Add list
            </button>
            <button className="cancel" onClick={() => setAction("")}>
              <MdOutlineCancel color="inherit" size={"100%"} />
            </button>
          </div>
          <div className="list_end_pad" />
        </div>
      </form>
    );
  };

  const renderCreateDefault = () => {
    return (
      <div className="list">
        <div className="add_list" onClick={() => setAction("create")}>
          <AiOutlinePlus size={18} color="white" />
          <h6>Add a list</h6>
        </div>
      </div>
    );
  };

  return (
    <div>
      {action === "" && renderCreateDefault()}
      {action === "create" && renderCreateList()}
    </div>
  );
};

export default ListTileAdd;

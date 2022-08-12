import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const ListTileAdd = () => {
  const [action, setAction] = useState("");
  // actions : Create/Delete/Edit

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

  const renderCreateList = () => {
    return (
      <form>
        <div className="list">
          <div className="enter_list_title">
            <input
              type="text"
              id="Title"
              placeholder="Enter a list title..."
            ></input>
          </div>
          <div className="enter_list_title">
            <button>Add list</button>
            <button className="cancel" onClick={() => setAction("")}>
              <MdOutlineCancel color="inherit" size={"100%"} />
            </button>
          </div>
          <div className="list_end_pad" />
        </div>
      </form>
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

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

const ListAdd = () => {
  const [action, setAction] = useState("");
  // actions : Default"" / Create"create" / Delete"delete" / Edit"edit"

  const renderCreateCard = () => {
    return (
      <div class="add_card_container">
        <div className="add_card">
          <input
            className="card_input"
            type="text"
            id="Title"
            placeholder="Enter a card title..."
          />
        </div>
        <div className="enter_list_title">
          <button
            onClick={() => {
              // TODO: Create
              setAction("");
            }}
          >
            Add card
          </button>
          <button className="cancel" onClick={() => setAction("")}>
            <MdOutlineCancel color="inherit" size={"100%"} />
          </button>
        </div>
        <div className="list_end_pad" />
      </div>
    );
  };

  const renderCreateDefault = () => {
    return (
      <div className="list_title">
        <button className="list_add_card" onClick={() => setAction("create")}>
          <AiOutlinePlus size={16} color="gray" />
          <h6>Add a card</h6>
        </button>
        <button>
          <a title="Create from template">
            <HiOutlineTemplate size={16} color="gray" />
          </a>
        </button>
      </div>
    );
  };

  return (
    <>
      {action === "" && renderCreateDefault()}
      {action === "create" && renderCreateCard()}
    </>
  );
};

export default ListAdd;

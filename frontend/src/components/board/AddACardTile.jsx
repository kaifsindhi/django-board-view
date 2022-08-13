import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

const ListAdd = (props) => {
  const board_id = props.list.Board;
  const list_id = props.list.Id;
  const [action, setAction] = useState("");
  const [card, setCard] = useState({ Title: "" });
  // actions : Default"" / Create"create" / Delete"delete" / Edit"edit"

  const createCard = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        List: list_id,
        Title: card.Title,
        Description: "",
      }),
    };
    fetch(
      "http://127.0.0.1:8000/board/" + board_id + "/list/" + list_id + "/card/",
      requestOptions
    ).then((response) => {
      console.log(response.json());
    });
  };

  const renderCreateCard = () => {
    return (
      <form
        onSubmit={() => {
          setAction("");
          createCard();
        }}
      >
        <div class="add_card_container">
          <div className="add_card">
            <input
              className="card_input"
              type="text"
              id="Title"
              placeholder="Enter a card title..."
              onChange={(e) => setCard({ Title: e.target.value })}
            />
          </div>
          <div className="enter_list_title">
            <button type="submit">Add card</button>
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
      <div className="list_title">
        <button className="list_add_card" onClick={() => setAction("create")}>
          <AiOutlinePlus size={16} color="black" />
          <h6>Add a card</h6>
        </button>
        {/* <button>
          <a title="Create from template">
            <HiOutlineTemplate size={16} color="black" />
          </a>
        </button> */}
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

import { useState } from "react";
import "./card.css";
import { AiOutlineCreditCard } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Card = (props) => {
  const [visible, setVisible] = useState(true);
  const [action, setAction] = useState("");
  const [card, setCard] = useState(props.card);

  const editCard = () => {
    console.log(card);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        List: card.List,
        Id: card.Id,
        Title: card.Title,
        Description: card.Description,
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
      <div className="card_container">
        <div className="card_icon cancel">
          <button onClick={() => setVisible(false)}>
            <ImCross size={15} color={"inherit"} />
          </button>
        </div>
        <div className="card_title">
          <div className="card_icon">
            <AiOutlineCreditCard size={24} />
          </div>
          <h6>{card.Title}</h6>
        </div>
        {/* <div className="card_subtitle">
      <h6>
        in list <a>{card.List}</a>
      </h6>
    </div> */}
        <div className="card_description">
          <div className="card_title">
            <div className="card_icon">
              <HiOutlineMenuAlt2 size={24} />
            </div>
            <h6>Description</h6>
            {action === "" && (
              <button
                className="card_edit"
                onClick={() => setAction("editDescription")}
              >
                Edit
              </button>
            )}
          </div>
          {action === "" && (
            <p onClick={() => setAction("editDescription")}>
              {card.Description}
            </p>
          )}
          {action === "editDescription" && (
            <form
              onSubmit={() => {
                setAction("");
                editCard();
              }}
            >
              <textarea
                className="card_input"
                type="text"
                id="Title"
                value={card.Description}
                onChange={(e) =>
                  setCard({
                    Id: card.Id,
                    List: card.List,
                    Title: card.Title,
                    Description: e.target.value,
                  })
                }
              />
              <div className="form_buttons">
                <button className="save">Save</button>
                <button className="cancel">Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  };

  return <>{visible === true && renderCreateDefault()}</>;
};

export default Card;

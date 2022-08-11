import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import ListTile from "./ListTile";

const List = props => {
  return (
    <div className="list">
      <div className="list_title">
        <h6>{props.Title}</h6>
        <button>
          <BsThreeDots size={16} color="black" />
        </button>
      </div>
      <ul>
        <ListTile Title="My First Card" />
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
    </div>
  );
};

export default List;

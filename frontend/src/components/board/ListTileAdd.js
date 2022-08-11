import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ListTileAdd = () => {
  return (
    <div>
      <div className="list">
        <div className="add_list">
          <AiOutlinePlus size={18} color="white" />
          <h6>Add a list</h6>
        </div>
      </div>
    </div>
  );
};

export default ListTileAdd;

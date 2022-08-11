import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { GrTextAlignFull } from "react-icons/gr";

const ListTile = props => {
  const tile = props.tile; // Information about the tile

  return (
    <li>
      <div className="list_tile">
        <div className="list_tile_title">
          <h6>{tile.Title}</h6>
          <button className="list_tile_edit">
            <FiEdit2 size={12} color="gray" />
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

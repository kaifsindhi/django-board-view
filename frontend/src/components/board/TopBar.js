import React from "react";
import { AiOutlineStar, AiFillStar, AiOutlineLock } from "react-icons/ai";

const TopBar = (props) => {
  return (
    <div className="top">
      <button className="title">
        <h5>{props.Title}</h5>
      </button>
      <button className="icon dark">
        <div className="star">
          <AiOutlineStar color="inherit" size={20} />
        </div>
        {/* <AiFillStar color="gold" size={20}/> */}
      </button>

      <button className="divider">|</button>

      <button className="item">
        <AiOutlineLock color="white" size={18} />
        <h5 className="hide_mobile">Private</h5>
      </button>
    </div>
  );
};

export default TopBar;

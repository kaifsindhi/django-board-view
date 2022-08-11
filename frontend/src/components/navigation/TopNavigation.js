import React from "react";
import { TbGridDots } from "react-icons/tb";
import {
  AiFillAppstore,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <button className="icon">
        <TbGridDots color="white" size={20} />
      </button>

      <a href="/">
        <button className="title">
          <AiFillAppstore color="white" size={20} />
          <h6>Demo</h6>
        </button>
      </a>

      <button className="navigation_item">
        <h6>Workspaces</h6>
        <RiArrowDropDownLine size={25} color="white" />
      </button>

      <button className="navigation_item">
        <h6>Recent</h6>
        <RiArrowDropDownLine size={25} color="white" />
      </button>

      <button className="navigation_item">
        <h6>Starred</h6>
        <RiArrowDropDownLine size={25} color="white" />
      </button>

      <button className="navigation_item">
        <h6>Templates</h6>
        <RiArrowDropDownLine size={25} color="white" />
      </button>

      <div className="mobile">
        <button className="icon dark">
          <AiOutlinePlus size={20} color="white" />
        </button>
      </div>

      <button className="hide_mobile create">
        <h6>Create</h6>
      </button>

      <button className="gap" />

      <button className="search_bar">
        <button className="icon">
          <AiOutlineSearch size={15} color="white" />
        </button>
        <h6>Search</h6>
      </button>

      <button className="icon dark mobile">
        <AiOutlineSearch size={20} color="white" />
      </button>

      <button className="icon hide_mobile">
        <AiOutlineInfoCircle size={20} color="white" />
      </button>

      <button className="icon">
        <MdOutlineNotificationsNone size={20} color="white" />
      </button>

      <button className="icon avatar">
        <AiOutlineUser size={25} color="white" />
      </button>
    </nav>
  );
};

export default Navigation;

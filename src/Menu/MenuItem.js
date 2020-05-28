import React from "react";
import PropTypes from "prop-types";
import "./MenuItem.css";
const MenuItem = props => {
  return (
    <li
      className={props.selected ? "MenuItem selected" : "MenuItem"}
      onClick={() => props.clickHandler(props.index)}
    >
      <span className="MenuItemText">{props.name}</span>
    </li>
  );
};

MenuItem.propTypes = {
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
};

export default MenuItem;

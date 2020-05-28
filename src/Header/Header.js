import React from "react";
import UserInfo from "../UserPrefs/UserInfo";
import "./Header.css";
import { Header, Textfield, Badge, Icon } from "react-mdl";
import { debounce } from "lodash";

const CustomHeader = props => {
  const originalHeader = props.handleSearch;

  const debounceAction = debounce(e => {
    originalHeader(e.target.value);
  }, 400);

  const changeHandler = e => {
    e.persist();
    debounceAction(e);
  }
  return (
      <Header transparent title="{props.title}" style={{
        color: "rgb(150, 150, 150)",
        backgroundColor: "black"
      }}>
        <Textfield
          onChange={changeHandler}
          label="Search"
          expandable
          expandableIcon="search"
        />
        <Badge
          text = {props.orderCount}
          overlap
          style={{
            marginLeft: "10px",
            cursor: "pointer"
          }}
        >
          <Icon name = "shopping_cart"/>
        </Badge>
        <UserInfo
          isLoggedIn={props.isLoggedIn}
          buttonHandler={props.buttonHandler}
        />
      </Header>
  );
};

export default CustomHeader;

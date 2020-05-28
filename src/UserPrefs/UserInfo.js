import React from "react";
import "./UserInfo.css";
import { Button } from "react-mdl";

export default props => {
  const headerContainerClass = `FloatRight CenterHeader visible ${
    props.isLoggedIn ? "" : "hidden"
    }`;
  return (
    <div className={headerContainerClass}>
      <span className="UserContainer" href="/logout">
        User
      </span>
      <Button
        raised

        className="LogoutBtn"
        onClick={props.buttonHandler}>
        Logout
      </Button>
    </div>
  );
};
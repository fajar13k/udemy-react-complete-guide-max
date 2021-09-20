import React from "react";
import UsersItem from "./UsersItem";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={`${styles["users-list"]}`}>
      {props.items.map((item) => {
        return <UsersItem key={item.id} name={item.name} age={item.age} />;
      })}
    </ul>
  );
};

export default UsersList;

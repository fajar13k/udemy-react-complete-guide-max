import React from "react";

import styles from "./UsersItem.module.css";

const UsersItem = (props) => {
  return (
    <li
      key={props.id}
      className={`${styles["users-list__item"]}`}
    >{`${props.name} (${props.age} years old)`}</li>
  );
};

export default UsersItem;

import React, { useState } from "react";

import styles from "./Users.module.css";

import Card from "../UI/Card";
import NewUser from "../NewUser/NewUser";
import UsersList from "./UsersList";

const Users = (props) => {
  return (
    <div>
      <Card className={styles.users}>
        <NewUser />
        <UsersList />
      </Card>
    </div>
  );
};

export default Users;

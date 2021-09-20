import React, { useState } from "react";

import styles from "./Users.module.css";

import Card from "../UI/Card";
import NewUser from "../NewUser/NewUser";

const Users = (props) => {
  return (
    <div>
      <Card className={styles.users}>
        <NewUser />
      </Card>
    </div>
  );
};

export default Users;

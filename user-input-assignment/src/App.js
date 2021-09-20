import React, { useState } from "react";

import styles from "./App.module.css";
import Card from "./components/UI/Card";

import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (users) => {
    setUsersList((prevUsersList) => {
      return [users, ...prevUsersList];
    });
  };

  return (
    <div>
      <Card className={styles.users}>
        <NewUser onAddUser={addUserHandler} />
      </Card>
      <Card
        className={`${styles.users} ${usersList.length === 0 && styles.empty}`}
      >
        <UsersList items={usersList} />
      </Card>
    </div>
  );
};

export default App;

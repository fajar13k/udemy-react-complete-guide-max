import React, { useState } from "react";

import styles from "./App.module.css";
import Card from "./components/UI/Card";

import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USERS = [
  {
    id: "e1",
    name: "Fajar",
    age: 21,
  },
  {
    id: "e2",
    name: "Syifa",
    age: 16,
  },
];

const App = () => {
  const [usersList, setUsersList] = useState(DUMMY_USERS);

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
      <Card className={styles.users}>
        <UsersList items={usersList} />
      </Card>
    </div>
  );
};

export default App;

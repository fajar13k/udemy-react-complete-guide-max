import React, { useState } from "react";

import styles from "./App.module.css";
import Card from "./components/UI/Card";

import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";
// import ErrorModal from "./components/UI/ErrorModal";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  // const [errModal, setErrModal] = useState();

  const addUserHandler = (users) => {
    setUsersList((prevUsersList) => {
      return [users, ...prevUsersList];
    });
  };

  // const modalErrorHandler = (msg) => {
  //   setErrModal(msg);
  // };

  // const modalConfirm = () => {
  //   setErrModal(null);
  // };

  return (
    <div>
      {/* {errModal && (
        <ErrorModal
          title={errModal.title}
          message={errModal.message}
          onConfirm={modalConfirm}
        />
      )} */}
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

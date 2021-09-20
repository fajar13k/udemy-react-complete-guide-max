import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles["new-users"]}`}>
        <div className={`${styles["new-user"]}`}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="(e.g) Fajar"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={`${styles["new-user"]}`}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            placeholder="(e.g) 31"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </div>
    </form>
  );
};

export default NewUser;

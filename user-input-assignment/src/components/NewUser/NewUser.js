import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.length === 0 || enteredAge.length === 0) {
      // setError({
      //   title: "Invalid input",
      //   message: "Please fill all the forms before submitting!",
      // });
      return;
    }

    if (+enteredAge < 1) {
      // setError({
      //   title: "Invalid age",
      //   message: "You must be at least 1 year old",
      // });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    // props.onModalError(error);
    props.onAddUser(userData);
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

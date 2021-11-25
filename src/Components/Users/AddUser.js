import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event);

    if (enteredUsername.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (enteredAge.length === 0 || +enteredAge < 1) {
      setIsValid(false);
      return;
    }

    setEnteredUsername("");
    setEnteredAge("");
    setIsValid(true);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

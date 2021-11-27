import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = nameInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.length === 0) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setIsValid(false);
      setError({
        title: "Invalid age",
        message: "Age must be greater than zero",
      });
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    });

    setIsValid(true);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={clearErrorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

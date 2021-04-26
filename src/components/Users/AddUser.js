import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Aux from '../../Auxiliary';

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorModal, setErrorModal] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorModal({title:"Invalid Input",message:'Please enter a valid name and age (non-empty values).'});
      return;
    } 

    if (+age < 1) {
      setErrorModal({
        title: "Invalid Age",
        message: "Please enter a valid age (>0).",
      });
      
      return;
    }
    
    props.onAddUser(username, age);

    setUsername("");
    setAge("");
  };
  return (
    <Aux>
      {errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} clicked={setErrorModal}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Aux>
  );
};

export default AddUser;

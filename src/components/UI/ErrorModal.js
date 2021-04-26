import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Aux from "../../Auxiliary";

const ErrorModal = (props) => {
  return (
    <Aux>
      <div
        className={classes.backdrop}
        onClick={(prev) => props.clicked(!prev)}
      ></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={(prev) => props.clicked(!prev)}>Okay</Button>
        </footer>
      </Card>
    </Aux>
  );
};

export default ErrorModal;

import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const cssClasses = `${styles.card} ${props.className}`;
  return <div className={cssClasses}>{props.children}</div>;
};

export default Card;

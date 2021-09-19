import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button>
      <button
        type={props.type}
        className={styles.button}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </button>
  );
};

export default Button;

import React, { SyntheticEvent } from "react";
import styles from "./index.module.css";

type Props = {
  onClick: (e: SyntheticEvent) => void;
};

/**
 * A simple Button.
 */
const Button: React.SFC<Props> = props => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

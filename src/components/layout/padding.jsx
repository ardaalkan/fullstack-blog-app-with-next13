import React from "react";
import styles from "./padding.module.css";

const Padding = ({ children }) => {
  return <div className={styles.padding}>{children}</div>;
};

export default Padding;

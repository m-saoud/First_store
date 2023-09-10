import React from "react";
import styles from "./darkmood.module.css";
const mode = "dark";
const darkmoodtogle = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.light}>☀️</div>
        <div className={styles.drak}>🌛</div>
        <div
          className={styles.switcher}
          style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    </>
  );
};

export default darkmoodtogle;

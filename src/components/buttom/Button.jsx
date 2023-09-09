"use client";

import React from "react";
import styles from "./button.module.css";

const button = () => {
  return (
    <div>
      <button className={styles.logout} onClick={() => console.log('buttomnnn')}>
        Logout
      </button>
    </div>
  );
};

export default button;

"use client"

import React from "react";
import styles from'./Button.module.css'

const button = () => {
  return (
    <div>
      <button className={styles.logout} onClick={() => {}}>
        Logout
      </button>
    </div>
  );
};

export default button;

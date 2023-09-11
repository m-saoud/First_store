"use client"

import React, { useContext } from "react";
import styles from "./darkmood.module.css";
import { ThemContext } from "@/context/themContext";

export default function Darkmoodtogle() {
    const {mode , toggle} = useContext (ThemContext);

  return (
    <>
      <div className={styles.container} onClick={toggle}>
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



"use client";

import Link from "next/link";
import React from "react";
import styles from './nav.module.css';
import { links } from "./data";
import Button from "../buttom/button";
import { Cairo } from "next/font/google";
const logoFont = Cairo({ subsets: ["latin"], weight: ["600"]});

const nav = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
        CocKapo
      </Link>
      <div className={styles.Links}></div>
      {links.map((link) => (
        <Link key={link.id} href={link.url} className={styles.Link}>
          {link.title}
        </Link>
      ))}

      <Button />
    </div>
  );
};

export default nav;

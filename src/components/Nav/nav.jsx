'use client'


import Link from "next/link";
import React from "react";
import Styles from "./nav.module.css";
import { links } from "./data";
import Button from "../buttom/button";

const nav = () => {
  return (
    <div className={Styles.container}>
      <Link href="/" className={Styles.logo}>
        CocKapo
      </Link>
      <div className={Styles.Links}></div>
      {links.map((link) => (
        <Link key={link.id} href={link.url} className={Styles.Link}>
          {link.title}
        </Link>
      ))}
          
        <Button/>
              
    </div>
  );
};

export default nav;

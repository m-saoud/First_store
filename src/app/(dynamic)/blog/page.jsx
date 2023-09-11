import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            alt="post image"
            width={350}
            height={250}
            src={
              "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            }
            className={styles.image}
          />

          <div className={styles.contant}>
            <h1 className={styles.postTitle}>Post Title</h1>
            <p className={styles.postPh}>post text</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            alt="post image"
            width={350}
            height={250}
            src={
              "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            }
            className={styles.image}
          />

          <div className={styles.contant}>
            <h1 className={styles.postTitle}>Post Title</h1>
            <p className={styles.postPh}>post text</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            alt="post image"
            width={350}
            height={250}
            src={
              "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            }
            className={styles.image}
          />

          <div className={styles.contant}>
            <h1 className={styles.postTitle}>Post Title</h1>
            <p className={styles.postPh}>post text</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            alt="post image"
            width={350}
            height={250}
            src={
              "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            }
            className={styles.image}
          />

          <div className={styles.contant}>
            <h1 className={styles.postTitle}>Post Title</h1>
            <p className={styles.postPh}>post text</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

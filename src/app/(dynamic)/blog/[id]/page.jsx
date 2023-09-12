import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const post = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>xx</h1>
          <p className={styles.desc}>xxx</p>
        </div>
        <div className={styles.imageContainer}>
          <Image alt='image id' fill={true} src="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg" className={styles.image}></Image>
        </div>
        <span className={styles.auther}>Saoud.S</span>
      </header>
      <div className={styles.containt}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi exercitationem debitis incidunt eveniet dicta quos molestiae iste quidem, recusandae, eos numquam.
          Quisquam ipsam deleniti facere, quam ullam, iusto sit delectus excepturi repellat corporis optio necessitatibus rem cumque quo dignissimos blanditiis quas ut nobis qui? Cupiditate dolores et corrupti similique.</p>
      </div>
    </div>
  )
}

export default post

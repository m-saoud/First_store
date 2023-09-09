import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';


const footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 Cockapo. Al right reserved</div>
      <div className={styles.social}>
      <link rel="icon" type="image/png"></link>
        <Image
          src='/src/images/s.m.icons/facebook_4494475.png'
          width={10}
          height={10}
          className={styles.icon}
          alt='Cockapo facebook link'
        ></Image>
        <Image
          src='/src/images/s.m.icons/instagram.png'
          width={10}
          height={10}
          className={styles.icon}
          alt='Cockapo instagram link'
        ></Image>
        <Image
          src='/src/images/s.m.icons/youtube.png'
          width={10}
          height={10}
          className={styles.icon}
          alt='Cockapo youtube link'
        ></Image>
        
      </div>
    </div>
  )
}

export default footer

import Image from 'next/image'
import styles from './page.module.css'
import button from '@/components/buttom/button'
import Hero from '/src/images/hero.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your One Stop online pets store Destination</h1>
        <p className={styles.description}>Discover the world of enless showed by home</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image  className={styles.image}   src={Hero} alt=''></Image>
      
      </div>




    </div>
  
  )
}

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 






export default async  function blog() {
  const data = await getData()
  const products= data.products 

  return (

    <div className={styles.mainContainer}>

      {products.map((product) =>
        <Link href="/blog/id"  key={product.id}  className={styles.post}>
         <div className={styles.imageContainer}>
           <Image
             alt="post image"
             width={350}
             height={250}
             src={ product.thumbnail
             
             }
             className={styles.image}
           />
 
           <div className={styles.contant}>
             <h1 className={styles.postTitle}>{product.title}</h1>
             <p className={styles.postPh}>{product.description}</p>
           </div>
         </div>
       </Link>
      )}
     
     
    </div>
  );
}

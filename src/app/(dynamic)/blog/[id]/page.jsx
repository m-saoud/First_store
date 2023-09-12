import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'




async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 


   async function post ({ params }) {
  const product = await getData(params.id)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image alt='image id' fill={true} src={product.thumbnail} className={styles.image}></Image>
        </div>
        <span className={styles.auther}>{`${product.price} $`}</span>
      </header>
      <div className={styles.containt}>
      </div>
      <div className={styles.category}>
        {product.images.map((image) =>
          <Image key={image.id} alt='pro_Image' width={200} height={240} className={styles.prouactImages} src={image}></Image>
        )}
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est quo nam a deleniti omnis excepturi. Voluptatibus numquam totam, accusamus quam ab eum quaerat. Doloremque alias, voluptates quam, maiores exercitationem accusamus velit sit dolorem esse reiciendis voluptatum eius mollitia distinctio?</p>
      </div>
    </div>
  )
}

export default post

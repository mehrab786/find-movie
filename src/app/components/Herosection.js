import React from 'react'
import heroStyles from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Herosection = ({tittle,imageUrl}) => {
  return (
     <main className={heroStyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1> {tittle}</h1>
                    <p> From award-winning daramas to blockbuster action movies, we have got you covered. Browse 
                    our selection of the latest and greatest movies, and find your new favourite today.  </p>
                    <Link href='/movie'>
                    <button>
                        Explore Movies
                    </button>
                    </Link>
                </div>
                <div className={heroStyles.hero_image}>
                    <Image src={imageUrl} alt='watching movies' width={500} height={400}/>
                </div>
            </div>
        </div>
     </main>
  )
}

export default Herosection
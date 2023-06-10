import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';

const page = async () => {

    //await new Promise(executor,resolve => setTimeout(resolve, timeout(2000)));
    await new Promise((resolve) => setTimeout(resolve, 1500));

  const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bb75d6af93msh11dbd3f09b27e7fp15852ajsn7f81f51f941b',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url,options); 
const data= await res.json();
//console.log(data);
const main_data= data.titles;


  return (
    <>
      <section className={styles.moviSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default page
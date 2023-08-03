'use client'
import styles from './styles.module.css';
import Image from 'next/image';
import Searchpic from '../public/magnifying-glass-solid (1).svg';
import Homepic from '../public/icons8-home-48.png';
import librarypic from '../public/icons8-music-library-50.png';
const redirect = "http://localhost:3000/";
export default function slidebar({current}) {
  return (
      <div className={styles.sidebar}>
        {current === "Home" ? (
          <button disabled={true} className={styles.sidebar_button}>Home  <Image src={Homepic} alt='' height={26}width={27}/></button> 
        ) : (
          <button className={styles.sidebar_button} onClick={() => window.location.href=redirect+'Home'}>Home  <Image src={Homepic} alt='' height={26}width={27}/></button>
        )}
        {current === "Search" ? (
          <button disabled={true} className={styles.sidebar_button}>Search  <Image src={Searchpic} alt='' height={19} width={19}/></button>
        ) : (
          <button className={styles.sidebar_button} onClick={() => window.location.href= redirect+'Search'}>Search  <Image src={Searchpic} alt='' height={19} width={19}/></button>
        )}
        {current === "Library" ? (
          <button disabled={true} className={styles.sidebar_button}>Library   <Image src={librarypic} alt='' height={20} width={20}/></button>
        ) : (
          <button className={styles.sidebar_button} onClick={() => window.location.href=redirect+'Library'}>Library   <Image src={librarypic} alt='' height={20} width={20}/></button>
        )}
      </div>
  )
}

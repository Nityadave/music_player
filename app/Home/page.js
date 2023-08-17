'use client'
import styles from '../../component/styles.module.css';
import Image from 'next/image';
import Slidebar from '../../component/slidebar';
import Header from '../../component/header'; 
import Homecontent from '../../component/Homecontent';
import Playbar from '@/component/playbar';
import Songdetails from '@/component/songdetails';

export default  function Home() {

       return (
        <main className="Home">
          <div className={styles.body}>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Website</title>
            <Header />
            <Slidebar current='Home'/>
            <Playbar></Playbar>
            <Homecontent></Homecontent>
            <Songdetails></Songdetails>
            </div>

        </main>
      )
      
  }
  
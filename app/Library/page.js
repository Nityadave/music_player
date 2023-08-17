import styles from '../../component/styles.module.css';
import Image from 'next/image';
import Slidebar from '../../component/slidebar';
import Header from '../../component/header';
import Link from 'next/link';
import Songdetails from '@/component/songdetails';
import Playbar from '../../component/playbar';
import Librarycontent from '@/component/Librarycontent';
export default function Library() {
    return (
      <main className="Home">
      <div className={styles.body}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
        <Header />
       <Slidebar current='Library'/>
       <Playbar></Playbar>
      <Songdetails></Songdetails>
      <Librarycontent></Librarycontent>
      </div>
      </main>
    )
  }
  
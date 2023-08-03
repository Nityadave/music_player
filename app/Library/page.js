import styles from '../../component/styles.module.css';
import Image from 'next/image';
import Slidebar from '../../component/slidebar';
import Header from '../../component/header';
import Link from 'next/link';
export default function Library() {
    return (
      <main className="Home">
      <div className={styles.body}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
        <Header />
       <Slidebar current='Library'/>
      </div>
      </main>
    )
  }
  
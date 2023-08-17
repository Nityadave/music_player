import styles from './styles.module.css';
import Image from 'next/image';
import card from '../public/card.png';

export default function() {
   return (
        <div className={styles.content}>   

<div className={styles.container}>
      <h1 className={styles.playlist}>Playlist</h1>
      <div className={styles.cardContainer}>
          <div className={styles.card}>Card 1</div>
          <div className={styles.card}>Card 2</div>
          <div className={styles.card}>Card 3</div>
          <div className={styles.card}>Card 4</div>
          <div className={styles.card}>Card 5</div>
          {/* Add more cards here */}
        </div>
    </div>
            
        </div>
    );
}
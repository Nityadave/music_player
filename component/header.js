'use client'
import styles from './styles.module.css';
import Image from 'next/image';
import Logo from '../public/Screenshot_2023-08-02_190046-removebg-preview.png';
import slash from '../public/59-593700_clip-art-forward-slash-symbol-slash-png-removebg-preview.png';
const redirect = "http://localhost:3000/";
export default function header() {
    return (
        <div>
            <div className={styles.header}>
                <Image src={Logo} alt='' height={50} width={300}></Image>
                <div className={styles.buttons_container}>
                <button className={`${styles.button} ${styles.login_button}`} onClick={() => window.location.href=redirect+'Login'}>Login</button>
                <Image src={slash} alt='' height={45} width={20} />
                <button className={`${styles.button} ${styles.signup_button}`} onClick={()=> window.location.href= redirect+'signup'}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

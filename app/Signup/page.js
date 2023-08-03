import styles from './styles.module.css';
export default function Signup() {

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.signupCard}>
        <h1 className={styles.headline}>Sign Up</h1>
        <form>
          <input className={styles.datainput} type="text" placeholder="Email" />
          <input className={styles.datainput} type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className={styles.button}type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};


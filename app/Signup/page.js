// signup.js
import { useState } from 'react';
import styles from './Login.module.css';
import Image from 'next/image';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');

  const handleSubmit = async (e) => {
    // Handle signup form submission
  };

  const isButtonDisabled = !email || !password || !passwordConfirmation || password !== passwordConfirmation || !/\S+@\S+\.\S+/.test(email);

  const togglePasswordVisibility = () => {
    setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.loginCard}>
        <h1 className={styles.headline}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.datainput}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.inputContainer}>
            <input
              className={styles.datainput}
              type={passwordInputType}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.toggleButton}
            >
              <Image
                src={
                  passwordInputType === 'password'
                    ? eye_close
                    : eye_open
                }
                height={30}
                width={29}
                alt="toggle"
              />
            </button>
          </div>
          <input
            className={styles.datainput}
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button className={styles.button} type="submit" disabled={isButtonDisabled}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

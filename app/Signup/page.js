// signup.js
'use client'
import { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import eye_close from '../../public/eye_close.png'
import eye_open from '../../public/eye_open.png'
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');

  const handleSubmit = async (e) => {
    // Handle signup form submission
  };

  const isButtonDisabled = !email || !(password.length>8) || !passwordConfirmation || password !== passwordConfirmation || !/\S+@\S+\.\S+/.test(email);

  const togglePasswordVisibility = () => {
    setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.signupcard}>
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

import { useState } from 'react';
import styles from './styles.module.css';
import eye_open from '../../public/eye_open.png';
import eye_close from '../../public/eye_close.png';
import Image from 'next/image';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');

  const handleSubmit = async (e) => {
    // submit form
    // const query = `select * from login where email = ${email} and password =  ${password}`
    // const result = executeQuery({query});
    // if(result){
    //     alert("Work done");
    // }
  };

  const isButtonDisabled =
    !email ||
    !password ||
    !confirmPassword ||
    password !== confirmPassword ||
    !/\S+@\S+\.\S+/.test(email);

  const togglePasswordVisibility = () => {
    setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.loginCard}>
        <h1 className={styles.headline}>Signup</h1>
        {/* {error && <p>{error}</p>} */}
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
            type={passwordInputType}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className={styles.button}
            type="submit"
            disabled={isButtonDisabled}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

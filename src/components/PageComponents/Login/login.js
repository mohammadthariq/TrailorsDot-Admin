import React from "react";
import styles from "./styles.module.css";

export const Login = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.box}>
      <div className={styles.loginbox}>
        <h2>Welcome Back</h2>
        <p>Login in to Your account using email and password</p>
        <form>
          <div className={styles.userbox}>
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <div className={styles.userbox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
      <div className={styles.loginboxImage}>
        <img src="/assets/images/Trailors.png"/>
      </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate()

    const handleNavigate = () =>{
       navigate('/login')
    }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.loginbox}>
        <h2>Welcome To TrailorsDot</h2>
        <p>Create an account with respective fields asked below</p>
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
            Sign Up
          </a>
          <p>
          Already have an account?&nbsp;<span onClick={handleNavigate}>Login</span>
        </p>
        </form>
      </div>
    </div>
  );
};

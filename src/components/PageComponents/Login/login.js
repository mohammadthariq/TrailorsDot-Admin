import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()

  const handleNavigate = () =>{
     navigate('/signup')
  }
  return (
    <div className={styles.Wrapper}>
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
        <p>
          Don't have an account ?&nbsp;<span onClick={handleNavigate} >register</span>
        </p>
      </div>
    </div>
  );
};

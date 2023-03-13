import React from "react";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.inner}>
        {/* <div className={styles.logo}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/wwf-logo.png" />
        </div> */}
        <div className={styles.burger}></div>
        <nav>
          <a className={styles.active} href="#">
            Home
          </a>
          <a href="#">Banner</a>
          <a href="#">List</a>
          <a href="#"></a>
        </nav>
        <a href="#" className={styles.login}>
          login
        </a>
      </div>
    </header>
  );
};

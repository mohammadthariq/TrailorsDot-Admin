import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Header = () => {
  const [pathname, setPathName] = useState(null)

  useEffect(() =>{
    setPathName(window.location.pathname)
  }, [])

  console.log(pathname, "pathname");
  return (
    <header>
      <div className={styles.inner}>
        {/* <div className={styles.logo}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/wwf-logo.png" />
        </div> */}
        <div className={styles.burger}></div>
        <nav>
          <a className={ pathname === "/" ? styles.active : null} href="/">
            Home
          </a>
          <a href="/banner" className={ pathname=== "/banner" ? styles.active : null}>Banner</a>
          <a href="/list" className={ pathname=== "/list" ? styles.active : null}>List</a>
        </nav>
        <a href="/login"  className={ pathname=== "/login" ? styles.loginActive : styles.login}>
          login
        </a>
      </div>
    </header>
  );
};

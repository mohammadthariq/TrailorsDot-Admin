import React from "react";
import styles from './styles.module.css'

export const Createlist = () => {
    return(
        <div className={styles.Wrapper}>

        <div className={styles.loginbox}>
  <h2>Create List</h2>
  <form>
    <div className={styles.userbox}>
      <input type="text" name="" required="" />
      <label>Movie name</label>
    </div>
    <div className={styles.userbox}>
      <input type="numbers" name="" required="" />
      <label>Views</label>
    </div>
    <div className={styles.userbox}>
      <input type="text" name="" required="" />
      <label>Genre</label>
    </div>
    <div className={styles.userbox}>
      <input type="text" name="" required="" />
      <label>description</label>
    </div>
    <div className={styles.userbox}>
      <input type="file" name="" required="" />
      <label>Thumb</label>
    </div>
    <div className={styles.userbox}>
      <input type="text" name="" required="" />
      <label>Media Url</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Create
    </a>
  </form>
</div>
</div>
    )

};
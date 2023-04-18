import React from "react";
import styles from "./styles.module.css";

export const Card = (props) => {
  console.log(props, "p");
  return (
    <div className={styles.Wrapper}>
      <div className={styles.card}>
        <img
          src={` https://img.youtube.com/vi/${props?.mediaUrl}/0.jpg`}
          alt=""
        />
        <div className={styles.cardContent}>
          <p>
            {props?.description}
          </p>
          {/* <a href="#" className={styles.button}>
            {}
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./styles.module.css";

export const Card = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.card}>
        <img
          src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
          alt=""
        />
        <div className={styles.cardContent}>
          <h2>Card Heading</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            exercitationem iste, voluptatum, quia explicabo laboriosam rem
            adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
            asperiores harum? Dicta odio aut hic.
          </p>
          <a href="#" className={styles.button}>
            Find out more
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

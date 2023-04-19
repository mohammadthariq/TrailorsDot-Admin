import React from "react";
import styles from "./styles.module.css";

export const PageCard = (props) => {
  console.log(props, "p");
  return (
    <div className={styles.card}>
    <img
      className={styles.card__background}
      src={` https://img.youtube.com/vi/${props?.mediaUrl}/0.jpg`}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className={styles.card__content &&  styles.flow}>
      <div className={styles.card_container && styles.flow}>
        <h2 className={styles.card__title}>Colombia</h2>
      </div>
      <button className={styles.card__button}>Read more</button>
    </div>
  </div>
  );
};

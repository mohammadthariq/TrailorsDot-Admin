import React from "react";
import styles from "./styles.module.css";

export const Title = ({ title, goto, navigate, color, width }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.name} color={color} width={width}>
        {title}
      </div>
      {goto ? (
        <div className={styles.goto} onClick={navigate}>
          <p>{goto}</p>
          <i class='fas fa-arrow-right' style={{color:"white" ,fontSize:"20px"}}></i>
          {/* <img alt="goto" src="/assets/icons/arroww.png" />  */}
        </div>
      ) : null}
    </div>
  );
};

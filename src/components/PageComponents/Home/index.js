import React from "react";
import { Card } from "../../common/UI/Card";
import { Title } from "../../common/UI/Title";
import { homeData } from "./constatnt";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <div>
    <div className={styles.upcomingCard}>
      <Title title="Banners" color="#808080" goto="All Banners" />
   <div className={styles.listscroll}>
   {homeData.map((i, index) => (
        <Card key={i.id} {...i} />
      ))}
      </div> 
    </div>
      <div  className={styles.upcomingCard}>
      <Title title="List" color="#808080" goto="All List" />
   <div className={styles.listscroll}>
   {homeData.map((i, index) => (
        <Card key={i.id} {...i} />
      ))}
      </div> 
    </div>
    </div>
  );
};

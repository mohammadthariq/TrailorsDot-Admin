import React from "react";
import { Title } from "../../common/UI/Title";
import { homeData } from "../Home/constatnt";
import { Card } from "../../common/UI/Card";
import styles from "../List/styles.module.css"
import { useNavigate } from "react-router-dom";

export const List = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <Title title="List" color="#808080" navigate={()=> navigate('/createlist')} goto="Create List" />
        <div className={styles.listgrid}>
          {homeData.map((i, index) => (
            <Card key={i.id} {...i} />
          ))}
        </div>
      </div>
    </div>
  );
};

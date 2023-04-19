import React from "react";
import { Card } from "../../common/UI/Card";
import { Title } from "../../common/UI/Title";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { HomeApis } from "../../../services/home";
import { useQuery } from "react-query";
export const Home = () => {
  const navigate = useNavigate();
  const { homeBanners, homeLists } = new HomeApis();
  const { data, isLoading } = useQuery(["bannerData"], homeBanners);
  const { data: listData } = useQuery(["listData"], homeLists);

  return (
    <div>
      <div className={styles.upcomingCard}>
        <Title
          title="Banners"
          color="#ffffff"
          navigate={() => navigate("/banner")}
          goto="All Banners"
        />
        <div className={styles.listscroll}>
          {data?.response?.map((i, index) => (
            <Card key={i.id} {...i} />
          ))}
        </div>
      </div>
      <div className={styles.upcomingCard}>
        <Title
          title="List"
          color="#ffffff"
          navigate={() => navigate("/list")}
          goto="All List"
        />
        <div className={styles.listscroll}>
          {/* {listData.response.length === 0 && <p>No Data Found</p>} */}
          {listData.response.map((i, index) => (
            <Card key={i.id} {...i} />
          ))}
        </div>
      </div>
    </div>
  );
};

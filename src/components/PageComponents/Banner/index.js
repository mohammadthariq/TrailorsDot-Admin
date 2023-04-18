import React from "react";
import { Title } from "../../common/UI/Title";
import { homeData } from "../Home/constatnt";
import { Card } from "../../common/UI/Card";
import styles from "../Banner/styles.module.css"
import { useNavigate } from "react-router-dom";
import { HomeApis } from "../../../services/home";
import { useQuery } from "react-query";

export const Banner = () => {
  const navigate = useNavigate()
  const { homeBanners } = new HomeApis();
  const { data } = useQuery(["bannerData"], homeBanners);
  return (
    <div>
      <div >
        <Title title="Banners" color="#808080" navigate={()=> navigate('/createbanner')} goto="Create Banners" />
        <div className={styles.bannergrid}>
          {data?.response?.map((i, index) => (
            <Card key={i.id} {...i} />
          ))}
        </div>
      </div>
    </div>
  );
};

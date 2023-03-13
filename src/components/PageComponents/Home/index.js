import React from "react";
import { Card } from "../../common/UI/Card";
import { Title } from "../../common/UI/Title";
import { homeData } from "./constatnt";

export const Home = () => {
  return (
    <div>
      <Title title="Banners" color="#808080" goto="All Banners" />
      {homeData.map((i, index) => (
        <Card key={i.id} {...i} />
      ))}
    </div>
  );
};

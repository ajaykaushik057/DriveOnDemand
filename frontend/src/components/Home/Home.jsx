import React from "react";
import Header from "./Header";
import "../../styles/Home.css";
import StatisticsSection from "./Strip";
import Article from "./Article";
import Guest from "./Guest";
import Background from "./Background";

const Home = () => {
  return (
    <div>
      <Background />
      <StatisticsSection />
      <Article />
      <Guest />
    </div>
  );
};

export default Home;

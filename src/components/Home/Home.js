import React, { useEffect } from "react";
import BestSeller from "../Sections/BestSeller";
import DealOfTheWeek from "../Sections/DealOfTheWeek";
import NewsLetter from "../Sections/NewsLetter";
import SummerSell from "../Sections/SummerSale";
import ExploreBooks from "../Sections/ExploreBooks";
import FeaturedBox from "../Sections/FeaturedBox";
import TopSection from "../Sections/TopSection";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Aside /> */}

      {/*Top shipping section   */}

      <TopSection />

      {/*Summer sell */}

      {/*<SummerSell />}

      {/* BEST SELLER */}

      <BestSeller />

      {/*dells of the week */}
      <DealOfTheWeek />

      {/* Join Our Newsletter*/}

      <NewsLetter />

      {/* Explore Books */}

      {/* <ExploreBooks /> */}

      {/* Featured Box */}

      <FeaturedBox />

      <Footer />
    </div>
  );
};

export default Home;

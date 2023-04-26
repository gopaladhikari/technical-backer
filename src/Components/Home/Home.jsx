import React from "react";
import HomeBanner from "./HomeBanner";
import { HomeServicesData } from "../data";
import HomeCard from "./HomeCard";

import "./Home.css";

function Home() {
  return (
    <>
      <HomeBanner />
      <section>
        <div className="container">
          <div className="row g-4">
            {HomeServicesData.map((item) => {
              return <HomeCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

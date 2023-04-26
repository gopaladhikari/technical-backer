import React from "react";
import HomeBanner from "./HomeBanner";
import { HomeServicesData, HowWeWorkData } from "../data";
import HomeCard from "./HomeCard";
import HowWeWork from "./HowWeWork";
import WebDesignAndDevelopment from "./WebDesignAndDevelopment";
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

      <WebDesignAndDevelopment />

      <section>
        <div className="container mt-4 mt-md-5 hww-wrapper">
          <div className="row">
            <h1 className="text-center">
              {" "}
              <span className="hww">H</span>ow We Work ?
            </h1>{" "}
            <p className="text-center">
              {" "}
              Level up your team with Technical Backers. Choose the engagement
              model that makes sense for you.{" "}
            </p>
            {HowWeWorkData.map((item) => (
              <HowWeWork key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

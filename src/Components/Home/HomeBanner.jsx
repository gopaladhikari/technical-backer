import React from "react";
import "./Home.css";

function HomeBanner() {
  return (
    <section>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 text-capitalize cardHeading ">
            <h1>
              Accelerate your
              <span className="dbwu"> digital branding with us </span>{" "}
            </h1>
          </div>
          <div className="col-md-6">
            <p className="p-text mt-1 px-0 px-md-5">
              Our experienced team is here to utilize valuable resources
              efficiently that ensures client satisfaction. We guarantee you
              that our services will set exceptional growth for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;

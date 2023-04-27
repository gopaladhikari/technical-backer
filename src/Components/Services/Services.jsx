import React from "react";
import ServiceItem from "./ServiceItem";
import { servicesData } from "../data";

function Services() {
  return (
    <section>
      <div className="container">
        <div className="row g-4">
          {servicesData.map((item) => (
            <ServiceItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

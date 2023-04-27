import React from "react";

import { ImOffice } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";

function InspiringBusiness() {
  return (
    <>
      \
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://softbenz.com/uploads/settings/about-image-1620164239.svg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3>About Us</h3>
              <h1>
                Inspiring businesses <span className="o">with IT</span>{" "}
              </h1>
              <h1 className="o">Solutions</h1>
              <p className="about-us-para">
                Technical Backers is a{" "}
                <span className="bold"> revenue-based project company</span>{" "}
                specializing in the <span className="bold"> IT sector</span> .
                We are especially working in the field of{" "}
                <span className="bold">
                  website design and software development
                </span>
                .Not only that, our other services include{" "}
                <span className="bold">
                  mobile app development, and graphics designing
                </span>{" "}
                . We are your best IT partner and believe that website are the
                only ways to promote growing businesses digitally. Our B2B
                (Business to Business) company aims at transforming and updating
                tech services to deliver quality outputs. Technical Backers is
                the only choice for your web problems due to brilliant teamwork,
                passionate team members, and first-class service delivery. The
                company has proved to be award-winning technology solutions to
                clients. Our projects are fully successful in terms of time,
                cost, design, and performance.
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
      <section className="bg-whitish py-4  my-5 py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6  gap-2">
              <ImOffice className="about-icons my-3 o" />
              <div>
                <h4>Our Mission</h4>
                <p className="about-us-para">
                  We directly approach our goal and prove to be best with our
                  clients by evaluating their resources in the best possible
                  way. We are in the developing stage but never showcase it as
                  our limitations. Our business empowers you and your company in
                  the right manner so that there is a long-term relationship
                  between clients, employees, and other stakeholders.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <AiFillEye className="about-icons my-3 o" />
              <div>
                <h4>Our Vision</h4>
                <p className="about-us-para">
                  Our effort is endless to make Technical Backers a systematic
                  and qualitative company in the IT sector. Every business
                  requires digital identification in today’s era. Websites is
                  not a luxury but a necessity for your brand identification.
                  Website is the most reliable tool for digital marketing which
                  is even suggested by legal authorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InspiringBusiness;

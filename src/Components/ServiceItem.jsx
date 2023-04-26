import React from "react";
import { Link } from "react-router-dom";

function ServiceItem() {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-12">
          <h1 className="text-center">heading</h1>
        </div>

        <div className="col-md-6">
          <h2 className="my-3"> subHeading </h2>
          <p> para </p>
          <Link
            to="/technical-backer-vite/contact"
            className="btn btn-success mt-3 mt-lg-5"
          >
            Quick Enquiry
          </Link>
        </div>
        <div className="col-md-6">
          <img src="url" className="img-fluid service-img" alt="" />
        </div>
        <div className="col-12 mb-4 mt-5">
          <h2 className="text-center o">Features</h2>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon1" className="img-fluid icon1" alt="" />
          <div>
            <h5>feature_heading1</h5>
            <p></p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="{icon2}" className="img-fluid icon1" alt="" />
          <div>
            <h5>feature_heading2</h5>
            <p></p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon3" className="img-fluid icon1" alt="" />
          <div>
            <h5>feature_heading3</h5>
            <p></p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon4" className="img-fluid icon1" alt="" />
          <div>
            <h5>feature_heading4</h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;

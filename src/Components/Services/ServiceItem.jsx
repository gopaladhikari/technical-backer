import React from "react";
import { Link } from "react-router-dom";

function ServiceItem({
  id,
  heading,
  title,
  img,
  description,
  featureHeading1,
  featureImg1,
  featureParagraph1,
  featureHeading2,
  featureImg2,
  featureParagraph2,
  featureHeading3,
  featureImg3,
  featureParagraph3,
  featureHeading4,
  featureImg4,
  featureParagraph4,
}) {
  if (id % 2 === 0) {
    return (
      <>
        <div className="col-12">
          <h1 className="text-center">{heading}</h1>
        </div>

        <div className="col-md-6">
          <h2 className="my-3"> {title} </h2>
          <p> {description} </p>
          <Link to="/contact" className="btn btn-success mt-3 mt-lg-5">
            Quick Enquiry
          </Link>
        </div>
        <div className="col-md-6">
          <img src={img} className="img-fluid service-img" alt="coming soon" />
        </div>
        <div className="col-12 mb-4 mt-5">
          <h2 className="text-center o">Features</h2>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon1" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading1}</h5>
            <p> {featureParagraph1} </p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="{icon2}" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading2}</h5>
            <p> {featureParagraph2} </p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon3" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading3}</h5>
            <p> {featureParagraph3} </p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon4" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading4}</h5>
            <p> {featureParagraph4} </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="col-12">
          <h1 className="text-center">{heading}</h1>
        </div>
        <div className="col-md-6">
          <img src={img} className="img-fluid service-img" alt="coming soon" />
        </div>
        <div className="col-md-6">
          <h2 className="my-3"> {title} </h2>
          <p> {description} </p>
          <Link to="/contact" className="btn btn-success mt-3 mt-lg-5">
            <a> Quick Enquiry</a>
          </Link>
        </div>

        <div className="col-12 mb-4 mt-5">
          <h2 className="text-center o">Features</h2>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon1" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading1}</h5>
            <p> {featureParagraph1} </p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="{icon2}" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading2}</h5>
            <p> {featureParagraph2} </p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon3" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading3}</h5>
            <p> {featureParagraph3} </p>
          </div>
        </div>
        <div className="col-md-6 d-flex gap-3">
          <img src="icon4" className="img-fluid icon1" alt="" />
          <div>
            <h5>{featureHeading4}</h5>
            <p> {featureParagraph4} </p>
          </div>
        </div>
      </>
    );
  }
}

export default ServiceItem;

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function HowWeWork({ title, text, icon }) {
  return (
    <div className="col-md-4 mt-4 ">
      <div
        className="card border-0 py-4 mx-auto "
        style={{ maxWidth: "22rem" }}
      >
        <div className="hww-icon ms-3">{icon}</div>
        <div className="card-body ">
          <h5 className="card-title my-4">{title} </h5>
          <p> {text} </p>
          <Link
            to="./technical-backer/services"
            className="btn btn-success my-4"
          >
            Get Started <BsArrowRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;

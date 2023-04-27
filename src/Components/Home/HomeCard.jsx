import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function HomeCard({ id, img, title, text }) {
  const smTitle = title.slice(0, 15);
  const jse = "d-md-flex justify-content-end";
  const jsc = "d-md-flex justify-content-center";
  return (
    <div className={`col-sm-6 col-xl-4 p-0 ${jsc} ${jse}`}>
      <div
        className="card home-card border-0 py-3 mx-auto"
        style={{ maxWidth: "20rem" }}
      >
        <img src={img} className="card-img-top ms-2" alt="..." />
        <div className="card-body">
          <h5>{window.innerWidth < 576 ? smTitle : title}</h5>
          <p>{text.length > 119 ? text.slice(0, 118) + " ..." : text}</p>
          <Link to="/technical-backer-vite/services" className="read-more-btn">
            Read More <BsArrowRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;

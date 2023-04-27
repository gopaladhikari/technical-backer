import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row gx-4">
          <h1 className="text-center">
            Why <span className="o"> Choose Us</span>{" "}
          </h1>
          <p className=" text-center">
            Our IT services consist of business and technology experts who help
            to manage business processes of all categories.
          </p>
          <div className="col-md-4 mt-4">
            <FiPhoneCall className="about-icons o" />
            <div>
              <h4>Regular Support</h4>
              <p className="about-us-para">
                We assure you that our team is here to promote your regular and
                continuous development even in a difficult situation. It
                includes continuous feedback, quality maintenance, and constant
                motivation to generate qualitative output.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <AiOutlineTeam className="about-icons o" />
            <div>
              <h4>Experienced Team</h4>
              <p className="about-us-para">
                Technical Backers always selects experienced professionals as
                its team member who can bring positive changes to the company’s
                working conditions. We assure you that our members possess
                technical, conceptual, and human skills.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <FaCode className="about-icons o" />
            <div>
              <h4>Top Code Quality</h4>
              <p className="about-us-para">
                Our high code quality is important to determine the overall
                status of your project. Quality is the basis to measure how
                safe, secure and reliable your codebase is. Maintenance of high
                quality is not difficult for Technical Backers to develop
                safety-critical systems on your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

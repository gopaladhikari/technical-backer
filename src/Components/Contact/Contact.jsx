import React from "react";
import { useFormik } from "formik";
import { validateForm } from "./ValidateForm";
import axios from "axios";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

function Getintouch({ showAlert }) {
  const initialValues = {
    Fname: "",
    Lname: "",
    email: "",
    project: "1",
    work: "1",
    phone_number: "",
    address: "",
    message: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validateForm,
      onSubmit: (value, action) => {
        const {
          Fname,
          Lname,
          email,
          project,
          work,
          phone_number,
          address,
          message,
        } = value;
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            Fname,
            Lname,
            email,
            project,
            work,
            phone_number,
            address,
            message,
          })
          .then((response) => {
            showAlert("Form has been submitted successfully.");
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        action.resetForm();
      },
    });
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                Let's <span className="o">work</span> together{" "}
              </h1>
              <p className="contact-para mt-md-4 mt-xl-5 pe-md-5">
                Please tell us a bit about you, your project, and how best to
                reach you. We’ll get right back to you.
              </p>
              <div className="row">
                <div className="col-12 mt-3 mt-md-5 d-flex gap-4 ">
                  <div className="git-icon-wrapper ">
                    <GoLocation className="git-icon" />
                  </div>
                  <div className="">
                    <h5 className=" m-0">Office Address</h5>
                    <p className="pb-4  m-0 mt-2"> </p>
                  </div>
                </div>
                <div className="col-12 mt-3 mt-md-4 mt-xl-5 d-flex gap-4 ">
                  <div className="git-icon-wrapper ">
                    <FiPhone className="git-icon" />
                  </div>
                  <div className="">
                    <h5 className=" m-0">Our Phone Number</h5>
                    <p className="pb-4  m-0 mt-2"> </p>
                  </div>
                </div>
                <div className="col-12 mt-3 mt-md-4 mt-xl-5 d-flex gap-4 ">
                  <div className="git-icon-wrapper ">
                    <FaRegEnvelope className="git-icon" />
                  </div>
                  <div className="">
                    <h5 className=" m-0">For Customer Support & Enquiry</h5>
                    <p className="pb-4  m-0 mt-2"> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="w-100 d-md-flex  gap-5">
                  <div className="mb-3 w-100">
                    <label htmlFor="Fname" className="form-label">
                      Your First Name <span className="error">*</span>{" "}
                    </label>
                    <input
                      name="Fname"
                      type="text"
                      className="form-control w-100"
                      id="Fname"
                      aria-describedby="emailHelp"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Fname}
                    />
                    {errors.Fname && touched.Fname ? (
                      <p className="error"> {errors.Fname} </p>
                    ) : null}
                  </div>
                  <div className="mb-3 w-100">
                    <label htmlFor="Lname" className="form-label">
                      Your Last Name <span className="error">*</span>
                    </label>
                    <input
                      name="Lname"
                      type="text"
                      className="form-control w-100"
                      id="Lname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Lname}
                    />
                    {errors.Lname && touched.Lname ? (
                      <p className="error"> {errors.Lname} </p>
                    ) : null}
                  </div>
                </div>
                <div className="w-100 d-md-flex gap-5">
                  <div className="mb-3 w-100">
                    <label htmlFor="email" className="form-label">
                      Your Email Address <span className="error">*</span>{" "}
                    </label>
                    <input
                      name="email"
                      type="text"
                      className="form-control w-100"
                      id="email"
                      aria-describedby="emailHelp"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <p className="error"> {errors.email} </p>
                    ) : null}
                  </div>
                </div>
                <div className="w-100 d-md-flex mt-2 gap-5">
                  <div className="mb-3 w-100">
                    <label htmlFor="project">
                      How do you want to work with us?{" "}
                      <span className="error">*</span>
                    </label>
                    <select
                      name="project"
                      id="project"
                      className="form-select mt-2"
                      aria-label="Default select example"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.project}
                    >
                      <option disabled value="1">
                        {" "}
                        Choose an option
                      </option>
                      <option value="new-project">New Project</option>
                      <option value="dedicated-team">Dedicated Team</option>
                      <option value="other">Other</option>
                    </select>{" "}
                    {errors.project && touched.project ? (
                      <p className="error"> {errors.project} </p>
                    ) : null}
                  </div>
                  <div className="mb-3 w-100">
                    <label htmlFor="work">
                      What service do you require?{" "}
                      <span className="error">*</span>{" "}
                    </label>
                    <select
                      name="work"
                      id="work"
                      className="form-select mt-2"
                      aria-label="Default select example"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.work}
                    >
                      <option disabled value="1">
                        Choose an option
                      </option>
                      <option value="web-design">Web Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="ios-development">IOS Development</option>
                      <option value="seo">SEO </option>
                      <option value="it-consultant">IT Consultant</option>
                      <option value="other">Other</option>
                    </select>

                    {errors.work && touched.work ? (
                      <p className="error"> {errors.work} </p>
                    ) : null}
                  </div>
                </div>
                <div className="w-100 d-md-flex mt-2 gap-5">
                  <div className="mb-3 w-100">
                    <label htmlFor="phone-number" className="form-label">
                      Phone Number{" "}
                    </label>
                    <input
                      name="phone_number"
                      type="text"
                      className="form-control w-100"
                      id="phone-number"
                      aria-describedby="emailHelp"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone_number}
                    />
                    {errors.phone_number && touched.phone_number ? (
                      <p className="error"> {errors.phone_number} </p>
                    ) : null}
                  </div>
                  <div className="mb-3 w-100">
                    <label htmlFor="Lname" className="form-label">
                      Address{" "}
                    </label>
                    <input
                      name="address"
                      type="text"
                      className="form-control w-100"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea">
                    {" "}
                    Tell us something about your project{" "}
                  </label>
                  <textarea
                    name="message"
                    className="form-control mt-2"
                    id="exampleTextarea"
                    rows="8"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                  ></textarea>
                </div>
                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="btn btn-outline-success  submitBtn text-dark btn-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Getintouch;

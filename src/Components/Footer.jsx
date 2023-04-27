import React from "react";
import { useFormik } from "formik";
import { validateFooter } from "./Schemas/ValidateFooter";
import { companyLinks, serviceLinks, connectWithUsLinks } from "./data";
import "./Footer.css";
import axios from "axios";

function Footer() {
  const initialValues = {
    email: "",
  };

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues,
      validationSchema: validateFooter,
      onSubmit: (value, action) => {
        const { email } = value;
        axios
          .post("https://jsonplaceholder.typicode.com/posts", { email })
          .then((res) => console.log(res.data))
          .catch((err) => {
            console.log(err);
          });
        action.resetForm();
      },
    });

  return (
    <footer className="bg-dark pt-5 pb-2 text-light mt-4 mt-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Join our newsletter</h2>
            <p>
              Sign up to stay updated with the latest insights, news, and more.
            </p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="">
              <div className="d-flex gap-3">
                <input
                  name="email"
                  className="w-100 newsletter-input rounded-3 ps-3"
                  placeholder="Your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <button type="submit" className="btn btn-success">
                  Subscribe
                </button>
              </div>
              {errors.email && touched.email ? (
                <p className="error pt-2 ms-1"> {errors.email} </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 col-md-4 text-start">
            <ul className="list-group p-0">
              <h2 className="text-start">Company</h2>
              {companyLinks.map((item) => {
                const { id, text } = item;
                return (
                  <li key={id} className="list-group-item my-2 p-0">
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-6 col-md-4 d-md-flex justify-content-center">
            <ul className="list-group p-0">
              <h2 className="text-start">Services</h2>{" "}
              {serviceLinks.map((item) => {
                const { id, text } = item;
                return (
                  <li key={id} className="list-group-item my-2 p-0">
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-6 col-md-4 d-md-flex  justify-content-end">
            <ul className="list-group p-0">
              <h2 className="text-start">Connect With Us</h2>

              {connectWithUsLinks.map((item) => {
                const { id, text } = item;
                return (
                  <li key={id} className="list-group-item my-2 p-0">
                    {text}
                  </li>
                );
              })}

              <li className="list-group-item my-2 p-0">Facebook</li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-center">
            &copy; Copyright 2023 Technical Backers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

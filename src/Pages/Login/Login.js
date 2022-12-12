import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";

const Login = () => {
  return (
    <div style={{ backgroundColor: "#EEF2FE" }} className="py-5">
      <div className="m-auto mt-5 card p-5 formBox border-0">
        <h2 className="text-center">Login</h2>
        <form className=" ">
          <div className="mb-3">
            <label
              htmlFor="exampleDropdownFormEmail2"
              className="form-label fw-bold"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control border-0 border-bottom px-0 rounded-0"
              id="exampleDropdownFormEmail2"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleDropdownFormPassword2"
              className="form-label fw-bold"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control border-0 border-bottom px-0 rounded-0"
              id="exampleDropdownFormPassword2"
              placeholder="Enter your Password"
            />
          </div>

          <button
            style={{ backgroundColor: "#9B1FE9" }}
            type="submit"
            className="btn w-100 mt-3 fw-bold text-white"
          >
            Login
          </button>
        </form>
        <div className="py-3 text-center">
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#9B1FE9", textDecoration: "none" }}
            >
              Signup
            </Link>
          </p>
          <h5>Or</h5>
        </div>
        <div className="d-flex justify-content-around align-items-center gap-2 w-25 m-auto">
          <FaGoogle></FaGoogle>
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
        </div>
      </div>
    </div>
  );
};

export default Login;

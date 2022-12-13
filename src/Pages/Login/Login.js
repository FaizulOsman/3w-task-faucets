import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import useTitle from "../../customHooks/useTitle";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  useTitle("Login");
  const { logIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  // Log In function
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login with Email and Password
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("Successfully logged in, Keep Going");
        form.reset();
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        toast.error("Something went wrong");
        setLoading(false);
      });
  };

  // Google Sign In Function
  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Logged in with Google");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  // Spinner
  if (loading) {
    return (
      <div style={{ margin: "200px auto" }}>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#EEF2FE" }} className="py-5">
      <div className="m-auto mt-5 card p-5 formBox border-0">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit} className=" ">
          <div className="mb-3">
            <label
              htmlFor="exampleDropdownFormEmail2"
              className="form-label fw-bold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
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
          <Link onClick={handleGoogleSignIn} className="text-body">
            <FaGoogle></FaGoogle>
          </Link>
          <Link className="text-body">
            <FaFacebook></FaFacebook>
          </Link>
          <Link className="text-body">
            <FaInstagram></FaInstagram>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

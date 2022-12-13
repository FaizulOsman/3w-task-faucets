import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import useTitle from "../../customHooks/useTitle";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  useTitle("Sign Up");
  const { createUser, updateUserProfile, googleSignIn, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  // Register function
  const handleSubmit = (e) => {
    setLoading(true);
    // e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Update User Profile!
        updateUserProfile(name, photoURL)
          .then(() => {
            form.reset();
            logOut()
              .then(() => {})
              .catch((e) => console.log(e));
            toast.success("Successfully Registered, Please Login");
          })
          .catch((e) => {
            console.log(e);
            toast.error("Something went wrong!");
          });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong!");
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
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#EEF2FE" }} className="py-5">
      <div className="m-auto mt-5 card p-5 formBox border-0">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className=" ">
          <div className="mb-3">
            <label
              htmlFor="exampleDropdownFormName2"
              className="form-label fw-bold"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control border-0 border-bottom px-0 rounded-0"
              id="exampleDropdownFormName2"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleDropdownFormPhotoURL2"
              className="form-label fw-bold"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              className="form-control border-0 border-bottom px-0 rounded-0"
              id="exampleDropdownFormPhotoURL2"
              placeholder="Enter Your photoURL"
              required
            />
          </div>
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
              required
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
              required
            />
          </div>

          <button
            style={{ backgroundColor: "#9B1FE9" }}
            type="submit"
            className="btn w-100 mt-3 fw-bold text-white"
          >
            Sign Up
          </button>
        </form>
        <div className="py-3 text-center">
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#9B1FE9", textDecoration: "none" }}
            >
              Log in
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

export default SignUp;

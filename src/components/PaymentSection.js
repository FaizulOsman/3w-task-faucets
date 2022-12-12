import React, { useContext } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { NavbarValueProvider } from "../App";
import "./PaymentSection.css";
import RequestHistory from "./RequestHistory";

const PaymentSection = () => {
  const { data } = useContext(NavbarValueProvider);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="p-3">
      <div style={{ backgroundColor: "#EEF2FE", fontSize: "14px" }}>
        <p className="p-2">
          <span className="px-2">
            <FaExclamationTriangle
              style={{ color: "#9B1FE9" }}
            ></FaExclamationTriangle>
          </span>
          Your wallet is connected to{" "}
          {data ? (
            <span className="fw-bold"> {data} </span>
          ) : (
            <span className="fw-bold"> Ethereum Kovan</span>
          )}
          , so you are requesting{" "}
          {data ? (
            <span className="fw-bold"> {data} </span>
          ) : (
            <span className="fw-bold"> Ethereum Kovan </span>
          )}
          Link/ETH.
        </p>
      </div>

      <div className="Wallet">
        <form>
          <div className="mb-3">
            <label
              style={{ color: "#9B1FE9", fontSize: "14px" }}
              htmlFor="exampleDropdownFormEmail2"
              className="form-label fw-bold"
            >
              Wallet Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="Wallet Address....."
            />
          </div>
          <div className="d-flex ">
            <div className="mb-3 w-50 me-3">
              <label
                style={{ color: "#9B1FE9", fontSize: "14px" }}
                htmlFor="exampleDropdownFormPassword2"
                className="form-label fw-bold"
              >
                Request Type
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="20 Test Link"
                disabled
              />
            </div>
            <div className="mt-4 pt-2 w-50">
              <input
                type="text"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="0.5 ETH"
                disabled
              />
            </div>
          </div>
          <div className="mb-3">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn text-white"
            style={{
              backgroundColor: "#9B1FE9",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            Send Request
          </button>
        </form>
        <RequestHistory />
      </div>
    </div>
  );
};

export default PaymentSection;

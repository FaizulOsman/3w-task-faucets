import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import MetaMaskImg from "../assets/images/MetaMask.svg";
import WalletConnectImg from "../assets/images/WalletConnect.svg";

const Navbar = () => {
  const values = [
    {
      text: "Ethereum Kovan",
      icon: "https://faucets.netlify.app/static/media/ethereum.42dac5dc.svg",
    },
    {
      text: "Arbitrum Rinkeby",
      icon: "https://faucets.netlify.app/static/media/arbitrum.79164059.svg",
    },
    {
      text: "Avalanche Fuji",
      icon: "https://faucets.netlify.app/static/media/avalanche.234db155.svg",
    },
    {
      text: "BNB Chain Testnet",
      icon: "https://faucets.netlify.app/static/media/bsc.d8c61230.svg",
    },
    {
      text: "Ethereum Rinkeby",
      icon: "https://faucets.netlify.app/static/media/ethereum.42dac5dc.svg",
    },
    {
      text: "Fantom Testnet",
      icon: "https://faucets.netlify.app/static/media/fantom.3f8c71bb.svg",
    },
    {
      text: "Harmony Testnet",
      icon: "https://faucets.netlify.app/static/media/harmony.02c2e3ba.svg",
    },
    {
      text: "POA Network Sokol",
      icon: "https://faucets.netlify.app/static/media/poa.90512ab9.svg",
    },
    {
      text: "Polygon Mumbai",
      icon: "https://faucets.netlify.app/static/media/polygon.97ff139c.svg",
    },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-white">
        <div className="container">
          <Link className="navbar-brand text-purple-200" to="/">
            <h3 className="fw-bold" style={{ color: "#9B1FE9" }}>
              Faucets
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <div className="mx-3">
                <form>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    {values.map((value, i) => (
                      <option key={i}>
                        {/* <img className="mx-3" src={value?.icon} alt="" /> */}
                        {value?.text}
                      </option>
                    ))}
                  </select>
                </form>
              </div>

              <div className="mx-2">
                <button
                  style={{ color: "#9B1FE9" }}
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span className="px-2">
                    <FaWallet></FaWallet>
                  </span>
                  Connect wallet
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLabel">
                          Connect your wallet
                        </h2>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex text-center justify-content-center align-items-center mx-2">
                          <div className=" p-5 me-2  bg-light">
                            <img
                              className="img-fluid"
                              src={MetaMaskImg}
                              alt=""
                            />
                            <h4>MetaMask</h4>
                          </div>
                          <div className=" p-5 me-2 bg-light">
                            <img
                              className="img-fluid"
                              src={WalletConnectImg}
                              alt=""
                            />
                            <h4>WalletConnect</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown mx-2">
                <Link
                  style={{ color: "#9B1FE9" }}
                  className=" border-0 dropdown-toggle fs-4"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserCircle></FaUserCircle>
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link to="/login" className="dropdown-item">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="dropdown-item">
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="dropdown-item" href="#">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

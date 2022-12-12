import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { NavbarValueProvider } from "../App";
import MetaMaskImg from "../assets/images/MetaMask.svg";
import WalletConnectImg from "../assets/images/WalletConnect.svg";

const Navbar = () => {
  const { setData } = useContext(NavbarValueProvider);
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
      <nav className="navbar border-bottom navbar-expand-lg navbar-light bg-light py-3 bg-white">
        <div className="container px-0">
          <Link className="navbar-brand text-purple-200 py-1" to="/">
            <h3 className="fs-3" style={{ color: "#9B1FE9" }}>
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
            <div className="d-flex align-items-center justify-content-center">
              <div className="mx-3">
                <form>
                  <select
                    style={{ fontSize: "14px" }}
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setData(e.target.value)}
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
                  style={{
                    color: "#9B1FE9",
                    border: "1px solid #9B1FE9",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span className="px-2">
                    <FaWallet></FaWallet>
                  </span>
                  <span className="connectWallet">Connect wallet</span>
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
                          <div className="row">
                            <div className="col col-sm-6">
                              <div className="py-5 px-5 bg-light modalImgBg">
                                <img
                                  className="img-fluid"
                                  src={MetaMaskImg}
                                  alt=""
                                />
                                <h4>MetaMask</h4>
                              </div>
                            </div>
                            <div className="col col-sm-6 text-center">
                              <div className="py-5 px-3 bg-light modalImgBg">
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
                </div>
              </div>

              <div className="dropdown mx-2">
                <Link
                  style={{ backgroundColor: "#eee" }}
                  className="border p-2 rounded-circle w-100 fs-3 d-flex align-items-center text-secondary"
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

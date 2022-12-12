import React from "react";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#EEF2FE" }} className="pb-4">
      <div style={{ backgroundColor: "#9B1FE9" }} className=" text-center">
        <p className="text-white py-4 fs-6">Notice here</p>
      </div>
      <div className="container py-5">
        <h2 className="fs-1" style={{ color: "#9B1FE9" }}>
          Request testnet LINK
        </h2>
        <p>
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can <br /> create and test your own oracle and
          Chainlinked smart contract
        </p>
      </div>
    </div>
  );
};

export default Home;
